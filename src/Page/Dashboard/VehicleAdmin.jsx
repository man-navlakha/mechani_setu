import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  Car,
  CheckCircle,
  Flame,
  Loader2,
  Pencil,
  RefreshCw,
  Search,
  Shield,
  Trash2,
  User
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import api from '../../utils/apiVercel';
import { toast } from 'react-hot-toast';

const resolveIdentifier = (vehicle) =>
  vehicle?.vehicleId || vehicle?.license_plate || vehicle?.id || vehicle?.vehicle_number;

const formatDate = (value) => {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString();
};

const VehicleAdmin = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingList, setLoadingList] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [editForm, setEditForm] = useState({
    owner_name: '',
    father_name: '',
    brand_name: '',
    brand_model: '',
    fuel_type: '',
    rc_status: '',
    registration_date: '',
    insurance_company: '',
    insurance_policy: '',
    insurance_expiry: '',
    permit_type: '',
    permit_number: '',
    permit_valid_upto: '',
    permit_valid_from: '',
    seating_capacity: '',
    vehicle_category: '',
    vehicle_image: '',
    present_address: '',
    permanent_address: '',
  });
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [showRaw, setShowRaw] = useState(false);

  const editableFields = [
    { key: 'owner_name', label: 'Owner Name', placeholder: 'Owner full name' },
    { key: 'father_name', label: 'Father / Guardian', placeholder: 'Father name' },
    { key: 'brand_name', label: 'Brand Name', placeholder: 'MARUTI SUZUKI INDIA LTD' },
    { key: 'brand_model', label: 'Brand Model', placeholder: 'ERTIGA VXI (O) CNG' },
    { key: 'fuel_type', label: 'Fuel Type', placeholder: 'PETROL / CNG / EV' },
    { key: 'rc_status', label: 'RC Status', placeholder: 'ACTIVE / Fitness Expired' },
    { key: 'registration_date', label: 'Registration Date', placeholder: 'YYYY-MM-DD' },
    { key: 'insurance_company', label: 'Insurance Company', placeholder: 'ICICI Lombard...' },
    { key: 'insurance_policy', label: 'Insurance Policy #', placeholder: 'Policy number' },
    { key: 'insurance_expiry', label: 'Insurance Expiry', placeholder: 'YYYY-MM-DD' },
    { key: 'permit_type', label: 'Permit Type', placeholder: 'Contract Carriage Permit' },
    { key: 'permit_number', label: 'Permit Number', placeholder: 'Permit no' },
    { key: 'permit_valid_from', label: 'Permit Valid From', placeholder: 'YYYY-MM-DD' },
    { key: 'permit_valid_upto', label: 'Permit Valid Upto', placeholder: 'YYYY-MM-DD' },
    { key: 'seating_capacity', label: 'Seating Capacity', placeholder: '7' },
    { key: 'vehicle_category', label: 'Vehicle Category', placeholder: 'car / bike' },
    { key: 'vehicle_image', label: 'Image URL', placeholder: 'https://...' },
    { key: 'present_address', label: 'Present Address', placeholder: 'Current address' },
    { key: 'permanent_address', label: 'Permanent Address', placeholder: 'Permanent address' },
  ];

  const detailFields = [
    { key: 'vehicle_id', label: 'Vehicle ID' },
    { key: 'license_plate', label: 'License Plate' },
    { key: 'chassis_number', label: 'Chassis Number' },
    { key: 'engine_number', label: 'Engine Number' },
    { key: 'brand_name', label: 'Brand Name' },
    { key: 'brand_model', label: 'Brand Model' },
    { key: 'fuel_type', label: 'Fuel Type' },
    { key: 'color', label: 'Color' },
    { key: 'class', label: 'Class' },
    { key: 'norms', label: 'Emission Norms' },
    { key: 'seating_capacity', label: 'Seating Capacity' },
    { key: 'cubic_capacity', label: 'Cubic Capacity' },
    { key: 'owner_name', label: 'Owner Name' },
    { key: 'father_name', label: 'Father / Guardian' },
    { key: 'present_address', label: 'Present Address' },
    { key: 'permanent_address', label: 'Permanent Address' },
    { key: 'registration_date', label: 'Registration Date', format: formatDate },
    { key: 'rc_status', label: 'RC Status' },
    { key: 'insurance_company', label: 'Insurance Company' },
    { key: 'insurance_policy', label: 'Insurance Policy' },
    { key: 'insurance_expiry', label: 'Insurance Expiry', format: formatDate },
    { key: 'permit_type', label: 'Permit Type' },
    { key: 'permit_number', label: 'Permit Number' },
    { key: 'permit_valid_from', label: 'Permit Valid From', format: formatDate },
    { key: 'permit_valid_upto', label: 'Permit Valid Upto', format: formatDate },
    { key: 'pucc_number', label: 'PUCC Number' },
    { key: 'pucc_upto', label: 'PUCC Upto', format: formatDate },
    { key: 'tax_upto', label: 'Tax Upto' },
    { key: 'vehicle_category', label: 'Vehicle Category' },
    { key: 'vehicle_image', label: 'Image URL' },
  ];

  const expiredCount = useMemo(
    () => vehicles.filter((v) => v.is_insurance_expired).length,
    [vehicles]
  );

  const fetchVehicles = async (term = '') => {
    setLoadingList(true);
    try {
      const response = await api.get('/vehicle/saved', {
        params: { search: term || undefined, scope: 'admin' }
      });
      const list = response.data?.data || [];
      setVehicles(list);
      // Preserve selection if still present after refresh
      if (selectedVehicle) {
        const id = resolveIdentifier(selectedVehicle);
        const stillExists = list.find((item) => resolveIdentifier(item) === id);
        if (!stillExists) {
          setSelectedVehicle(null);
        }
      }
    } catch (error) {
      console.error('[VehicleAdmin] Fetch vehicles failed', error);
      toast.error(error.response?.data?.message || 'Unable to load vehicle records');
    } finally {
      setLoadingList(false);
    }
  };

  const hydrateVehicle = async (identifier) => {
    if (!identifier) return;
    setDetailLoading(true);
    try {
      const response = await api.get(`/vehicle/saved/${identifier}`);
      if (response.data?.success) {
        const merged = { ...(response.data.data || {}), ...response.data };
        setSelectedVehicle(merged);
        setEditForm((prev) => ({
          ...prev,
          owner_name: merged.owner_name || '',
          father_name: merged.father_name || '',
          brand_name: merged.brand_name || '',
          brand_model: merged.brand_model || '',
          fuel_type: merged.fuel_type || '',
          rc_status: merged.rc_status || '',
          registration_date: merged.registration_date || '',
          insurance_company: merged.insurance_company || '',
          insurance_policy: merged.insurance_policy || '',
          insurance_expiry: merged.insurance_expiry || '',
          permit_type: merged.permit_type || '',
          permit_number: merged.permit_number || '',
          permit_valid_from: merged.permit_valid_from || '',
          permit_valid_upto: merged.permit_valid_upto || '',
          seating_capacity: merged.seating_capacity || '',
          vehicle_category: merged.vehicle_category || '',
          vehicle_image: merged.vehicle_image || '',
          present_address: merged.present_address || '',
          permanent_address: merged.permanent_address || '',
        }));
      } else {
        toast.error(response.data?.message || 'Vehicle not found');
      }
    } catch (error) {
      console.error('[VehicleAdmin] Fetch detail failed', error);
      toast.error(error.response?.data?.message || 'Unable to load vehicle detail');
    } finally {
      setDetailLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchVehicles(searchTerm), 350);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleUpdate = async () => {
    const identifier = resolveIdentifier(selectedVehicle);
    if (!identifier) {
      toast.error('Missing vehicle identifier');
      return;
    }
    setSaving(true);
    try {
      const payload = {
        owner_name: editForm.owner_name || undefined,
        father_name: editForm.father_name || undefined,
        brand_name: editForm.brand_name || undefined,
        brand_model: editForm.brand_model || undefined,
        fuel_type: editForm.fuel_type || undefined,
        rc_status: editForm.rc_status || undefined,
        registration_date: editForm.registration_date || undefined,
        insurance_company: editForm.insurance_company || undefined,
        insurance_policy: editForm.insurance_policy || undefined,
        insurance_expiry: editForm.insurance_expiry || undefined,
        permit_type: editForm.permit_type || undefined,
        permit_number: editForm.permit_number || undefined,
        permit_valid_from: editForm.permit_valid_from || undefined,
        permit_valid_upto: editForm.permit_valid_upto || undefined,
        seating_capacity: editForm.seating_capacity || undefined,
        vehicle_category: editForm.vehicle_category || undefined,
        vehicle_image: editForm.vehicle_image || undefined,
        present_address: editForm.present_address || undefined,
        permanent_address: editForm.permanent_address || undefined,
      };
      await api.patch(`/vehicle/saved/${identifier}`, payload);
      toast.success('Vehicle updated');
      await hydrateVehicle(identifier);
      setVehicles((prev) =>
        prev.map((v) =>
          resolveIdentifier(v) === identifier ? { ...v, ...payload } : v
        )
      );
    } catch (error) {
      console.error('[VehicleAdmin] Update failed', error);
      toast.error(error.response?.data?.message || 'Update failed');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (vehicle) => {
    const identifier = resolveIdentifier(vehicle);
    if (!identifier) {
      toast.error('Missing vehicle identifier');
      return;
    }
    if (!window.confirm('Delete this vehicle record? This cannot be undone.')) return;

    setDeletingId(identifier);
    try {
      await api.delete(`/vehicle/saved/${identifier}`);
      toast.success('Vehicle deleted');
      setVehicles((prev) => prev.filter((v) => resolveIdentifier(v) !== identifier));
      if (selectedVehicle && resolveIdentifier(selectedVehicle) === identifier) {
        setSelectedVehicle(null);
      }
    } catch (error) {
      console.error('[VehicleAdmin] Delete failed', error);
      toast.error(error.response?.data?.message || 'Delete failed');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-28 pb-16 space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em]">
              Admin • Vehicles
            </p>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Vehicle Control</h1>
            <p className="text-slate-500 font-medium">
              Audit, edit, or delete saved vehicle profiles from the centralized garage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative flex-1 min-w-[240px]">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by plate, owner, city..."
                className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none font-medium"
              />
            </div>
            <button
              onClick={() => fetchVehicles(searchTerm)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-sm hover:bg-black transition-colors"
            >
              <RefreshCw size={16} className={loadingList ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Car size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Saved Vehicles ({vehicles.length})
                  </p>
                  <p className="text-xs text-slate-500">
                    {expiredCount} with expired insurance
                  </p>
                </div>
              </div>
              {loadingList && (
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Loader2 size={16} className="animate-spin" /> syncing
                </div>
              )}
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-100 text-sm">
                <thead className="bg-slate-50 text-slate-500 uppercase text-[11px] tracking-[0.16em] font-bold">
                  <tr>
                    <th className="px-6 py-3 text-left">Vehicle</th>
                    <th className="px-6 py-3 text-left">Owner</th>
                    <th className="px-6 py-3 text-left">Fuel</th>
                    <th className="px-6 py-3 text-left">Insurance</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loadingList ? (
                    <tr>
                      <td className="px-6 py-10 text-center text-slate-500" colSpan={5}>
                        <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
                          <Loader2 size={18} className="animate-spin text-blue-600" />
                          Loading vehicles...
                        </div>
                      </td>
                    </tr>
                  ) : vehicles.length === 0 ? (
                    <tr>
                      <td className="px-6 py-10 text-center text-slate-500" colSpan={5}>
                        No records found for this search.
                      </td>
                    </tr>
                  ) : (
                    vehicles.map((vehicle) => {
                      const identifier = resolveIdentifier(vehicle);
                      const isSelected =
                        selectedVehicle &&
                        resolveIdentifier(selectedVehicle) === identifier;
                      return (
                        <tr
                          key={identifier}
                          className={`cursor-pointer transition-colors ${
                            isSelected ? 'bg-blue-50/60' : 'hover:bg-slate-50'
                          }`}
                          onClick={() => hydrateVehicle(identifier)}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Car size={18} />
                              </div>
                              <div>
                                <div className="font-black text-slate-900 uppercase tracking-wide">
                                  {identifier}
                                </div>
                                <div className="text-xs text-slate-500 font-semibold">
                                  {vehicle.brand_model || vehicle.brand_name || '—'}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <User size={16} className="text-slate-400" />
                              <span className="font-medium text-slate-800">
                                {vehicle.owner_name || 'N/A'}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 font-semibold">
                              <Flame size={14} /> {vehicle.fuel_type || '—'}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-semibold ${
                                vehicle.is_insurance_expired
                                  ? 'bg-red-50 text-red-700'
                                  : 'bg-green-50 text-green-700'
                              }`}
                            >
                              <Shield size={14} />
                              {vehicle.is_insurance_expired ? 'Expired' : 'Active'}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  hydrateVehicle(identifier);
                                }}
                                className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors text-xs font-semibold"
                              >
                                Manage
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(vehicle);
                                }}
                                disabled={deletingId === identifier}
                                className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50"
                              >
                                {deletingId === identifier ? (
                                  <Loader2 size={16} className="animate-spin" />
                                ) : (
                                  <Trash2 size={16} />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-6 flex flex-col gap-4">
            {!selectedVehicle && !detailLoading ? (
              <div className="flex flex-col items-center justify-center text-center text-slate-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center mb-3">
                  <Search size={22} />
                </div>
                <p className="font-semibold">Select a vehicle to manage</p>
                <p className="text-xs text-slate-400">
                  Click any row from the list to load full details.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
                      Vehicle
                    </p>
                    <p className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                      {resolveIdentifier(selectedVehicle)}
                    </p>
                    <p className="text-sm text-slate-500 font-medium">
                      {selectedVehicle?.brand_model || selectedVehicle?.brand_name || '—'}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 ${
                      selectedVehicle?.is_insurance_expired
                        ? 'bg-red-50 text-red-700'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {selectedVehicle?.is_insurance_expired ? (
                      <AlertCircle size={14} />
                    ) : (
                      <CheckCircle size={14} />
                    )}
                    {selectedVehicle?.is_insurance_expired ? 'Insurance Expired' : 'Insurance Active'}
                  </div>
                </div>

                {detailLoading ? (
                  <div className="flex items-center gap-2 text-slate-500">
                    <Loader2 size={18} className="animate-spin" /> Loading details...
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
                          Owner
                        </p>
                        <p className="font-semibold text-slate-900">
                          {selectedVehicle?.owner_name || 'N/A'}
                        </p>
                      </div>
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
                          Father / Guardian
                        </p>
                        <p className="font-semibold text-slate-900">
                          {selectedVehicle?.father_name || '—'}
                        </p>
                      </div>
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
                          Fuel Type
                        </p>
                        <p className="font-semibold text-slate-900">
                          {selectedVehicle?.fuel_type || '—'}
                        </p>
                      </div>
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
                          Insurance Expiry
                        </p>
                        <p className="font-semibold text-slate-900">
                          {formatDate(selectedVehicle?.insurance_expiry)}
                        </p>
                      </div>
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
                          RC Status
                        </p>
                        <p className="font-semibold text-slate-900">
                          {selectedVehicle?.rc_status || '—'}
                        </p>
                      </div>
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
                          Registration Date
                        </p>
                        <p className="font-semibold text-slate-900">
                          {formatDate(selectedVehicle?.registration_date)}
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-slate-100" />

                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                        Full Profile
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {detailFields.map((field) => {
                          const rawValue = selectedVehicle?.[field.key];
                          if (rawValue === null || rawValue === undefined || rawValue === '') return null;
                          const value = field.format ? field.format(rawValue) : rawValue;
                          return (
                            <div
                              key={field.key}
                              className="p-3 rounded-2xl bg-white border border-slate-100 shadow-sm"
                            >
                              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
                                {field.label}
                              </p>
                              <p className="font-semibold text-slate-900 break-words">{value}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                        Edit Fields
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {editableFields.map((field) => (
                          <label key={field.key} className="block space-y-1 text-sm">
                            <span className="text-slate-600 font-semibold">{field.label}</span>
                            <input
                              value={editForm[field.key] || ''}
                              onChange={(e) =>
                                setEditForm((prev) => ({ ...prev, [field.key]: e.target.value }))
                              }
                              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none"
                              placeholder={field.placeholder}
                            />
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <button
                        type="button"
                        className="text-xs text-blue-600 underline"
                        onClick={() => setShowRaw((v) => !v)}
                      >
                        {showRaw ? 'Hide raw response' : 'Show raw response'}
                      </button>
                      {showRaw && (
                        <pre className="text-xs bg-slate-900 text-slate-100 rounded-2xl p-3 overflow-auto max-h-64 border border-slate-800">
{JSON.stringify(selectedVehicle?.raw_response, null, 2)}
                        </pre>
                      )}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={handleUpdate}
                        disabled={saving || !selectedVehicle}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
                      >
                        {saving ? <Loader2 size={16} className="animate-spin" /> : <Pencil size={16} />}
                        Save changes
                      </button>
                      <button
                        onClick={() => handleDelete(selectedVehicle)}
                        disabled={!selectedVehicle || deletingId === resolveIdentifier(selectedVehicle)}
                        className="px-4 py-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 font-semibold transition-colors disabled:opacity-60"
                      >
                        {deletingId === resolveIdentifier(selectedVehicle) ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <Trash2 size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleAdmin;
