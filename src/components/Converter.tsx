import React, { useState } from 'react';
import { ConversionCard } from './ConversionCard';
import { DidYouKnow } from './DidYouKnow';
import { convert } from '../utils/converter';
import {
  landConversion,
  teraiConversion,
  weightConversion,
  volumeConversion,
  lengthConversion,
} from '../data/conversions';

const conversionTypes = {
  land: { title: 'Land (Hill)', data: landConversion, defaultToUnit: 'sqm' },
  terai: { title: 'Land (Terai)', data: teraiConversion, defaultToUnit: 'sqm' },
  weight: { title: 'Weight', data: weightConversion, defaultToUnit: 'kg' },
  volume: { title: 'Volume', data: volumeConversion, defaultToUnit: 'l' },
  length: { title: 'Length', data: lengthConversion, defaultToUnit: 'km' },
};

export const Converter: React.FC = () => {
  const [activeType, setActiveType] = useState<keyof typeof conversionTypes>('land');
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentConversion = conversionTypes[activeType];
  const units = Object.keys(currentConversion.data);

  // Set initial units if not set or when conversion type changes
  React.useEffect(() => {
    setFromUnit(units[0]);
    setToUnit(currentConversion.defaultToUnit);
    setValue('');
    setResult(null);
    setShowResult(false);
    setError(null);
  }, [activeType]);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    setShowResult(false);
    setError(null);
  };

  const handleFromUnitChange = (unit: string) => {
    setFromUnit(unit);
    setShowResult(false);
    setError(null);
  };

  const handleToUnitChange = (unit: string) => {
    setToUnit(unit);
    setShowResult(false);
    setError(null);
  };

  const handleSwapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
    setShowResult(false);
    setError(null);
  };

  const handleConvert = () => {
    if (!value.trim()) {
      setError('Please enter a value to convert');
      setShowResult(false);
      return;
    }

    const convertedValue = convert(
      parseFloat(value) || 0,
      fromUnit,
      toUnit,
      currentConversion.data
    );
    setResult(convertedValue);
    setShowResult(true);
    setError(null);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {Object.entries(conversionTypes).map(([key, { title }]) => (
          <button
            key={key}
            onClick={() => {
              setActiveType(key as keyof typeof conversionTypes);
              setResult(null);
              setShowResult(false);
              setError(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                activeType === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
          >
            {title}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <ConversionCard
          title={currentConversion.title}
          value={value}
          fromUnit={fromUnit}
          toUnit={toUnit}
          result={result}
          units={units}
          onValueChange={handleValueChange}
          onFromUnitChange={handleFromUnitChange}
          onToUnitChange={handleToUnitChange}
          onSwapUnits={handleSwapUnits}
          onConvert={handleConvert}
          showResult={showResult}
          error={error}
        />
        <DidYouKnow category={activeType} />
      </div>
    </div>
  );
};