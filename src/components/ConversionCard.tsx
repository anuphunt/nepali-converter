import React, { useEffect } from 'react';
import { ArrowRightLeft } from 'lucide-react';
import { getUnitLabel } from '../utils/unitLabels';

interface ConversionCardProps {
  title: string;
  value: string;
  fromUnit: string;
  toUnit: string;
  result: number | null;
  units: string[];
  onValueChange: (value: string) => void;
  onFromUnitChange: (unit: string) => void;
  onToUnitChange: (unit: string) => void;
  onSwapUnits: () => void;
  onConvert: () => void;
  showResult: boolean;
  error: string | null;
}

export const ConversionCard: React.FC<ConversionCardProps> = ({
  title,
  value,
  fromUnit,
  toUnit,
  result,
  units,
  onValueChange,
  onFromUnitChange,
  onToUnitChange,
  onSwapUnits,
  onConvert,
  showResult,
  error
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Value
          </label>
          <input
            type="number"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter value"
          />
          {error && (
            <p className="mt-1 text-sm text-red-600">{error}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <select
              value={fromUnit}
              onChange={(e) => onFromUnitChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {getUnitLabel(unit)}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={onSwapUnits}
            className="mt-6 p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowRightLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <select
              value={toUnit}
              onChange={(e) => onToUnitChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {getUnitLabel(unit)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={onConvert}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Convert
        </button>

        {showResult && result !== null && !error && (
          <div className="pt-4 border-t">
            <div className="text-sm text-gray-600">Result:</div>
            <div className="text-2xl font-semibold text-gray-800">
              {result.toFixed(2)} {getUnitLabel(toUnit)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};