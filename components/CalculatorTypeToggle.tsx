import React from 'react';
import { CalculatorType } from '../types';
import { FuturesIcon, SpotIcon } from './Icons';

interface CalculatorTypeToggleProps {
  calculatorType: CalculatorType;
  setCalculatorType: (type: CalculatorType) => void;
}

const CalculatorTypeToggle: React.FC<CalculatorTypeToggleProps> = ({ calculatorType, setCalculatorType }) => {
  const isFutures = calculatorType === CalculatorType.FUTURES;

  const toggleType = () => {
    setCalculatorType(isFutures ? CalculatorType.SPOT : CalculatorType.FUTURES);
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        onClick={toggleType}
        className="relative flex items-center w-60 h-14 p-1.5 cursor-pointer bg-gray-200 dark:bg-gray-900/70 rounded-full border border-slate-300 dark:border-gray-700"
        role="switch"
        aria-checked={isFutures}
        aria-label="Calculator Mode Toggle"
      >
        {/* Sliding background */}
        <div
          className={`absolute h-11 w-1/2 rounded-full transition-transform duration-300 ease-in-out transform ${isFutures ? 'translate-x-0 bg-blue-500 shadow-lg shadow-blue-500/20' : 'translate-x-full bg-teal-500 shadow-lg shadow-teal-500/20'}`}
        />

        {/* Futures Option */}
        <div className="relative z-10 w-1/2 h-full flex items-center justify-center space-x-2">
          <span className={`w-6 h-6 transition-colors duration-300 ${isFutures ? 'text-white' : 'text-slate-600 dark:text-gray-300'}`}>
            <FuturesIcon />
          </span>
          <span className={`text-base font-semibold transition-colors duration-300 ${isFutures ? 'text-white' : 'text-slate-600 dark:text-gray-300'}`}>
            Futures
          </span>
        </div>

        {/* Spot Option */}
        <div className="relative z-10 w-1/2 h-full flex items-center justify-center space-x-2">
          <span className={`w-6 h-6 transition-colors duration-300 ${!isFutures ? 'text-white' : 'text-slate-600 dark:text-gray-300'}`}>
            <SpotIcon />
          </span>
          <span className={`text-base font-semibold transition-colors duration-300 ${!isFutures ? 'text-white' : 'text-slate-600 dark:text-gray-300'}`}>
            Spot
          </span>
        </div>
      </div>
    </div>
  );
};

export default CalculatorTypeToggle;