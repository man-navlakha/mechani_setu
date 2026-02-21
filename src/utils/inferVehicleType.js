// Utility to infer a simplified vehicle type from RC / model data
// Returns one of: 'bike', 'autorickshaw', 'truck', 'bus', 'car'
export function inferVehicleType(record = {}) {
  const cls = (record.class || record.vehicle_class_desc || '').toLowerCase();
  const model = (record.brand_model || record.model || '').toLowerCase();

  // Class-based heuristics
  if (cls.includes('m-cycle') || cls.includes('scooter') || cls.includes('2wn')) return 'bike';
  if (cls.includes('autorik') || cls.includes('auto') || cls.includes('three') || cls.includes('3wn')) return 'autorickshaw';
  if (cls.includes('bus')) return 'bus';
  if (cls.includes('truck') || cls.includes('lcv') || cls.includes('hcv') || cls.includes('goods')) return 'truck';
  if (cls.includes('car') || cls.includes('sedan') || cls.includes('suv') || cls.includes('muv')) return 'car';

  // Model/name hints
  if (/scooter|activa|dio|pleasure|jupiter|scooty|vespa|ntorq|access/.test(model)) return 'bike'; // includes TVS Jupiter
  if (/rickshaw|autorik|auto rick/.test(model)) return 'autorickshaw';
  if (/bus/.test(model)) return 'bus';
  if (/pickup|mini truck|truck|tempo|ashok|bharatbenz|eicher/.test(model)) return 'truck';

  return 'car'; // default
}
