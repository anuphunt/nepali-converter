import React from 'react';
import { facts } from '../data/facts';
import { Lightbulb } from 'lucide-react';

interface DidYouKnowProps {
  category: string;
}

export const DidYouKnow: React.FC<DidYouKnowProps> = ({ category }) => {
  const categoryKey = category === 'land' ? 'landHill' : 
                     category === 'terai' ? 'landTerai' : category;
                     
  const categoryFacts = facts[categoryKey];
  const randomFact = categoryFacts[Math.floor(Math.random() * categoryFacts.length)];

  return (
    <div className="mt-8 max-w-md w-full">
      <div className="bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg p-6 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 rounded-full p-2">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-2 text-lg">Did you know?</h3>
            <p className="text-orange-50 leading-relaxed">{randomFact.fact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};