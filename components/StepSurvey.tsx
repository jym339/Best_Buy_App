import React, { useState } from 'react';
import { Button } from './Button';
import { WizardStepProps } from '../types';

interface RadioOptionProps {
  label: string;
  value: string;
  selected: boolean;
  onSelect: (val: string) => void;
}

const RadioOption: React.FC<RadioOptionProps> = ({ 
  label, 
  value, 
  selected, 
  onSelect 
}) => (
  <label className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all ${selected ? 'border-[#0046BE] bg-blue-50' : 'border-transparent hover:bg-gray-50'}`}>
    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selected ? 'border-[#0046BE]' : 'border-gray-300'}`}>
      {selected && <div className="w-3 h-3 bg-[#0046BE] rounded-full" />}
    </div>
    <span className="text-gray-700 font-medium">{label}</span>
    <input type="radio" className="hidden" onChange={() => onSelect(value)} checked={selected} />
  </label>
);

export const StepSurvey: React.FC<WizardStepProps> = ({ onNext }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const canProceed = selectedGender && selectedAge && selectedCategory;

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold text-gray-900">Tell us about yourself</h2>
        <p className="text-gray-500 text-sm">Help us match you with the perfect Best Buy products</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Gender</h3>
          <div className="space-y-1">
            {['Female', 'Male', 'Non-binary', 'Prefer not to say'].map((opt) => (
              <RadioOption 
                key={opt} 
                label={opt} 
                value={opt} 
                selected={selectedGender === opt} 
                onSelect={setSelectedGender} 
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Age Group</h3>
          <div className="space-y-1">
             {['18-24', '25-34', '35-44', '45-54'].map((opt) => (
              <RadioOption 
                key={opt} 
                label={opt} 
                value={opt} 
                selected={selectedAge === opt} 
                onSelect={setSelectedAge} 
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Preferred Product Category</h3>
          <div className="space-y-1">
             {['Smartphones & Laptops', 'Home Theater & Audio', 'Gaming & Consoles', 'Smart Home & Appliances', 'All Categories'].map((opt) => (
              <RadioOption 
                key={opt} 
                label={opt} 
                value={opt} 
                selected={selectedCategory === opt} 
                onSelect={setSelectedCategory} 
              />
            ))}
          </div>
        </div>
      </div>

      <Button onClick={onNext} disabled={!canProceed} className={!canProceed ? 'opacity-50 cursor-not-allowed' : ''}>
        Next
      </Button>
    </div>
  );
};