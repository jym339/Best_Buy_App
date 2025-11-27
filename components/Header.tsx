import React from 'react';
import { BestBuyLogo } from '../constants';

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 mb-8 pt-8">
      {/* Live Viewing Badge */}
      <div className="inline-flex items-center space-x-2 bg-white border border-red-100 rounded-full px-4 py-1.5 shadow-sm">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-red-500 text-sm font-medium">942 people viewing this page right now</span>
      </div>

      {/* Brand Logo */}
      <div className="transform scale-125">
         <BestBuyLogo className="h-16 w-32" />
      </div>
    </div>
  );
};