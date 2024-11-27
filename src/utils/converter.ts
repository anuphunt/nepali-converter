type ConversionData = {
  [key: string]: {
    [key: string]: number;
  };
};

export const convert = (
  value: number,
  fromUnit: string,
  toUnit: string,
  conversionData: ConversionData
): number => {
  if (fromUnit === toUnit) return value;
  
  // Direct conversion
  if (conversionData[fromUnit]?.[toUnit]) {
    return value * conversionData[fromUnit][toUnit];
  }
  
  // Inverse conversion
  if (conversionData[toUnit]?.[fromUnit]) {
    return value / conversionData[toUnit][fromUnit];
  }

  // Try intermediate conversion through base units
  const baseUnits = ['kg', 'g', 'sqm', 'sqf', 'l', 'km', 'm'];
  
  for (const baseUnit of baseUnits) {
    if (conversionData[fromUnit]?.[baseUnit] && conversionData[toUnit]?.[baseUnit]) {
      const valueInBase = value * conversionData[fromUnit][baseUnit];
      const result = valueInBase / conversionData[toUnit][baseUnit];
      return result;
    }
    
    // Try reverse conversion through base unit
    if (conversionData[baseUnit]?.[fromUnit] && conversionData[baseUnit]?.[toUnit]) {
      const valueInBase = value / conversionData[baseUnit][fromUnit];
      const result = valueInBase * conversionData[baseUnit][toUnit];
      return result;
    }
  }
  
  return 0;
};