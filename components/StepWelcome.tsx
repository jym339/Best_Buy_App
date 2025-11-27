import React from 'react';
import { GiftCard } from '../constants';
import { Button } from './Button';
import { BadgeCheck } from 'lucide-react';
import { WizardStepProps } from '../types';

export const StepWelcome: React.FC<WizardStepProps> = ({ onNext }) => {
  return (
    <div className="space-y-6 text-center animate-fadeIn">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Best Buy Product Reviewer – Early Access
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-sm mx-auto">
          You've been selected for an exclusive bonus program to test Best Buy Tech products and earn rewards.
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-2xl shadow-inner border border-gray-100">
        <GiftCard />
        <div className="flex items-center justify-center space-x-2 mt-4 text-[#0046BE]">
          <BadgeCheck className="w-5 h-5 fill-[#0046BE] text-white" />
          <span className="font-semibold text-gray-900">Verified by TikTok</span>
        </div>
      </div>

      <div className="pt-4">
        <p className="text-xs text-gray-500 mb-4">
          Join thousands of shoppers who are earning rewards for testing premium tech products.
        </p>
        <Button onClick={onNext}>Get Started</Button>
      </div>
    </div>
  );
};