export const getUnitLabel = (unit: string): string => {
  const labels: { [key: string]: string } = {
    // Land units
    sqm: 'square meters',
    sqf: 'square feet',
    // Weight units
    kg: 'kilograms',
    g: 'grams',
    // Volume units
    l: 'liters',
    // Keep other units as is
    ropani: 'ropani',
    aana: 'aana',
    paisa: 'paisa',
    daam: 'daam',
    bigha: 'bigha',
    kattha: 'kattha',
    dhur: 'dhur',
    pathi: 'pathi',
    mana: 'mana',
    tola: 'tola',
    kos: 'kos',
    haath: 'haath',
    km: 'kilometers',
    m: 'meters',
    miles: 'miles',
    ft: 'feet'
  };

  return labels[unit] || unit;
};