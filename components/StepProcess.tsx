import React from 'react';
import { Button } from './Button';
import { WizardStepProps } from '../types';
import { CheckCircle2, Mail, Sparkles, Gift } from 'lucide-react';

export const StepProcess: React.FC<WizardStepProps> = ({ onNext }) => {
  const steps = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: "Complete this survey",
      desc: "Answer a few quick questions about your shopping preferences",
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Confirm your email",
      desc: "We'll send you exclusive access details and product information",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "Choose your favorite items",
      desc: "Select from premium laptops, gaming consoles, and more",
    },
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      title: "Receive your $1000 reward",
      desc: "Get your gift card after completing your honest product reviews",
    }
  ];

  const handleGetStarted = () => {
    window.location.href = "https://trkio.org/aff_c?offer_id=880&aff_id=29930";
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold text-gray-900">How to Qualify</h2>
        <p className="text-gray-500">Follow these simple steps to earn your $1000 Best Buy reward</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-3">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-[#0046BE]`}>
              {step.icon}
            </div>
            <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-4">
        <Button onClick={handleGetStarted}>Get Started</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  );
};