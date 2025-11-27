import React from 'react';

export const BRAND_COLORS = {
  primary: '#0046BE', // Best Buy Blue
  accent: '#FFE000', // Best Buy Yellow
  text: '#1D1D1F',
};

// Best Buy Logo Component
export const BestBuyLogo = ({ className = "h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tag Icon Shape */}
    <path d="M10 50H90C95.5228 50 100 45.5228 100 40V10C100 4.47715 95.5228 0 90 0H10C4.47715 0 0 4.47715 0 10V40C0 45.5228 4.47715 50 10 50Z" fill="#FFE000"/>
    {/* Text */}
    <text x="50" y="32" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" textAnchor="middle" fill="#000">BEST BUY</text>
  </svg>
);

// Gift Card Component
export const GiftCard = () => (
  <div className="relative w-full aspect-[1.586] bg-[#0046BE] rounded-xl shadow-inner border border-blue-800 overflow-hidden flex flex-col justify-between p-6">
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE000] rounded-bl-full opacity-10"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-tr-full"></div>
    
    <div className="flex justify-end">
       <span className="text-white font-bold text-4xl tracking-tighter">$1000</span>
    </div>

    <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-white font-black text-5xl italic tracking-tight">BEST BUY</h1>
    </div>

    <div className="flex justify-between items-end">
      <div className="w-12 h-8 bg-yellow-400 rounded-md opacity-80"></div>
      <span className="text-blue-200 text-xs font-mono">**** **** **** 4291</span>
    </div>
  </div>
);