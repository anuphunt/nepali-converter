import React, { useState } from 'react';
import { Converter } from './components/Converter';
import { DateConverter } from './components/DateConverter';

function App() {
  const [activeTab, setActiveTab] = useState<'units' | 'dates'>('units');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto pt-8 px-4">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('units')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'units'
                ? 'bg-gradient-to-br from-orange-300 to-orange-400 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Convert Units
          </button>
          <button
            onClick={() => setActiveTab('dates')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'dates'
                ? 'bg-gradient-to-br from-orange-300 to-orange-400 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Convert Dates
          </button>
        </div>

        {activeTab === 'units' ? <Converter /> : <DateConverter />}
      </div>
    </div>
  );
}

export default App;