// Conversion data for different measurement categories
export const landConversion = {
  ropani: { sqm: 508.72, sqf: 5476, aana: 16, paisa: 64, daam: 256 },
  aana: { sqm: 31.8, sqf: 342.25, ropani: 0.0625, paisa: 4, daam: 16 },
  paisa: { sqm: 7.95, sqf: 85.56, ropani: 0.015625, aana: 0.25, daam: 4 },
  daam: { sqm: 1.99, sqf: 21.39, ropani: 0.00390625, aana: 0.0625, paisa: 0.25 },
  sqm: { sqf: 10.764, ropani: 0.00197, aana: 0.0314, paisa: 0.126, daam: 0.503 },
  sqf: { sqm: 0.0929, ropani: 0.000183, aana: 0.00292, paisa: 0.0117, daam: 0.0467 },
  acres: { sqm: 4046.86, sqf: 43560, ropani: 7.95, aana: 127.26, paisa: 509.04, daam: 2036.16 },
};

export const teraiConversion = {
  bigha: { sqm: 6772.63, sqf: 72900, kattha: 20, dhur: 400 },
  kattha: { sqm: 338.63, sqf: 3645, bigha: 0.05, dhur: 20 },
  dhur: { sqm: 16.93, sqf: 182.25, bigha: 0.0025, kattha: 0.05 },
  sqm: { sqf: 10.764, bigha: 0.000148, kattha: 0.00295, dhur: 0.0591 },
  sqf: { sqm: 0.0929, bigha: 0.0000137, kattha: 0.000274, dhur: 0.00549 },
  acres: { sqm: 4046.86, sqf: 43560, bigha: 0.598, kattha: 11.96, dhur: 239.2 }
};

export const weightConversion = {
  pathi: { kg: 4.54, g: 4540, mana: 8, tola: 389.36 },
  mana: { kg: 0.568, g: 568, pathi: 0.125, tola: 48.67 },
  tola: { kg: 0.01166, g: 11.66, pathi: 0.00257, mana: 0.0206 },
  kg: { g: 1000, pathi: 0.220, mana: 1.761, tola: 85.735 },
  g: { kg: 0.001, pathi: 0.00022, mana: 0.00176, tola: 0.0858 }
};

export const volumeConversion = {
  pathi: { l: 4.545, mana: 8 },
  mana: { l: 0.568, pathi: 0.125 },
  l: { pathi: 0.220, mana: 1.761 }
};

export const lengthConversion = {
  kos: { km: 3.219, m: 3219, miles: 1.997, ft: 10560 },
  haath: { m: 0.457, km: 0.000457, ft: 1.5, miles: 0.000284 },
  km: { m: 1000, kos: 0.311, haath: 2187.5, miles: 0.621, ft: 3280.84 },
  m: { km: 0.001, kos: 0.000311, haath: 2.1875, miles: 0.000621, ft: 3.28084 },
  miles: { km: 1.60934, m: 1609.34, kos: 0.5, haath: 3500, ft: 5280 },
  ft: { m: 0.3048, km: 0.0003048, kos: 0.0000947, haath: 0.667, miles: 0.000189 }
};