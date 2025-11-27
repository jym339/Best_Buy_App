import React, { useState } from 'react';
import { Button } from './Button';
import { WizardStepProps } from '../types';

export const StepQualification: React.FC<WizardStepProps> = ({ onNext }) => {
  const [checks, setChecks] = useState({
    honest: false,
    resident: false,
    age: false,
  });

  const allChecked = checks.honest && checks.resident && checks.age;

  const CheckboxOption = ({ 
    label, 
    checked, 
    onChange 
  }: { 
    label: string; 
    checked: boolean; 
    onChange: () => void 
  }) => (
    <label className={`flex items-center space-x-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${checked ? 'border-[#0046BE] bg-blue-50/30' : 'border-transparent bg-gray-50 hover:bg-gray-100'}`}>
      <div className={`w-6 h-6 rounded flex-shrink-0 border-2 flex items-center justify-center transition-colors ${checked ? 'border-[#0046BE] bg-[#0046BE]' : 'border-gray-300 bg-white'}`}>
        {checked && (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className="text-gray-800 font-medium text-lg">{label}</span>
      <input type="checkbox" className="hidden" onChange={onChange} checked={checked} />
    </label>
  );

  return (
    <div className="space-y-8 animate-fadeIn py-4">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold text-gray-900">Qualification Criteria</h2>
        <p className="text-gray-500">Please confirm you meet our program requirements</p>
      </div>

      <div className="space-y-4">
        <CheckboxOption 
          label="I am willing to provide honest product reviews" 
          checked={checks.honest} 
          onChange={() => setChecks(prev => ({ ...prev, honest: !prev.honest }))} 
        />
        <CheckboxOption 
          label="I am a resident of the U.S., Canada, or U.K." 
          checked={checks.resident} 
          onChange={() => setChecks(prev => ({ ...prev, resident: !prev.resident }))} 
        />
        <CheckboxOption 
          label="I am over 18 years old" 
          checked={checks.age} 
          onChange={() => setChecks(prev => ({ ...prev, age: !prev.age }))} 
        />
      </div>

      <Button onClick={onNext} disabled={!allChecked} className={`mt-8 ${!allChecked ? 'opacity-50 cursor-not-allowed' : ''}`}>
        Next
      </Button>
    </div>
  );
};