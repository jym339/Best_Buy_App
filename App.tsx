import React, { useState } from 'react';
import { Header } from './components/Header';
import { StepWelcome } from './components/StepWelcome';
import { StepSurvey } from './components/StepSurvey';
import { StepQualification } from './components/StepQualification';
import { StepProcess } from './components/StepProcess';
import { StepTestimonials } from './components/StepTestimonials';
import { Step } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>(Step.Welcome);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, Step.Testimonials));
  };

  const renderStep = () => {
    switch (currentStep) {
      case Step.Welcome:
        return <StepWelcome onNext={nextStep} />;
      case Step.Survey:
        return <StepSurvey onNext={nextStep} />;
      case Step.Qualification:
        return <StepQualification onNext={nextStep} />;
      case Step.Process:
        return <StepProcess onNext={nextStep} />;
      case Step.Testimonials:
        return <StepTestimonials />;
      default:
        return <StepWelcome onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <Header />
      
      <main className="w-full max-w-lg mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-8 sm:p-10">
            {renderStep()}
          </div>
        </div>
        
        {/* Footer/Trust Indicators */}
        <div className="mt-8 text-center space-y-4">
            <div className="flex justify-center space-x-6 opacity-40 grayscale">
                <span className="h-6 font-bold text-xl">CNN</span>
                <span className="h-6 font-bold text-xl">NBC</span>
                <span className="h-6 font-bold text-xl">Fox News</span>
            </div>
            <p className="text-xs text-gray-400 max-w-xs mx-auto">
                This program is not affiliated with or endorsed by Best Buy or TikTok. 
                Trademarks are property of their respective owners.
            </p>
        </div>
      </main>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;