import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { convertBSToAD, convertADToBS } from '../utils/dateConverter';

export const DateConverter: React.FC = () => {
  const [date, setDate] = useState('');
  const [convertFrom, setConvertFrom] = useState<'BS' | 'AD'>('BS');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleDateChange = (value: string) => {
    setDate(value);
    setShowResult(false);
    setError(null);
  };

  const handleConvert = () => {
    if (!date) {
      setError('Please enter a date');
      setShowResult(false);
      return;
    }

    try {
      const convertedDate = convertFrom === 'BS' 
        ? convertBSToAD(date)
        : convertADToBS(date);
      setResult(convertedDate);
      setShowResult(true);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid date format. Please use YYYY-MM-DD');
      setShowResult(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-800">Date Converter</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date (YYYY-MM-DD)
            </label>
            <input
              type="text"
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
              placeholder={convertFrom === 'BS' ? '2080-12-15' : '2024-03-28'}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Convert From
            </label>
            <div className="flex gap-4">
              <label className="relative flex items-center cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                <input
                  type="radio"
                  checked={convertFrom === 'BS'}
                  onChange={() => {
                    setConvertFrom('BS');
                    setDate('');
                    setResult(null);
                    setShowResult(false);
                    setError(null);
                  }}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-600 peer-checked:border-8 transition-all"></div>
                <span className="ml-2 text-gray-700">BS to AD</span>
              </label>
              <label className="relative flex items-center cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                <input
                  type="radio"
                  checked={convertFrom === 'AD'}
                  onChange={() => {
                    setConvertFrom('AD');
                    setDate('');
                    setResult(null);
                    setShowResult(false);
                    setError(null);
                  }}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-blue-600 peer-checked:border-8 transition-all"></div>
                <span className="ml-2 text-gray-700">AD to BS</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleConvert}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Convert
          </button>

          {showResult && result && !error && (
            <div className="pt-4 border-t">
              <div className="text-sm text-gray-600">
                {convertFrom === 'BS' ? 'AD Date:' : 'BS Date:'}
              </div>
              <div className="text-2xl font-semibold text-gray-800">
                {result}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 max-w-md w-full">
        <div className="bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="bg-white/20 rounded-full p-2">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold mb-2 text-lg">Did you know?</h3>
              <p className="text-orange-50 leading-relaxed">
                The Nepali calendar (BS) is approximately 56 years and 8 months ahead of the English calendar (AD).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};