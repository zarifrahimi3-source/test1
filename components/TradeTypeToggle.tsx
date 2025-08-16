import React from 'react';
import { TradeType } from '../types';
import { LongIcon, ShortIcon } from './Icons';

interface TradeTypeToggleProps {
  tradeType: TradeType;
  setTradeType: (type: TradeType) => void;
}

const TradeTypeToggle: React.FC<TradeTypeToggleProps> = ({ tradeType, setTradeType }) => {
  const isLong = tradeType === TradeType.LONG;

  const toggleType = () => {
    setTradeType(isLong ? TradeType.SHORT : TradeType.LONG);
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        onClick={toggleType}
        className="relative flex items-center w-60 h-14 p-1.5 cursor-pointer bg-gray-200 dark:bg-gray-900/70 rounded-full border border-slate-300 dark:border-gray-700"
        role="switch"
        aria-checked={isLong}
        aria-label="Trade Type Toggle"
      >
        {/* Sliding background */}
        <div
          className={`absolute h-11 w-1/2 rounded-full transition-transform duration-300 ease-in-out transform ${isLong ? 'translate-x-0 bg-green-500 shadow-lg shadow-green-500/20' : 'translate-x-full bg-red-500 shadow-lg shadow-red-500/20'}`}
        />

        {/* Long Option */}
        <div className="relative z-10 w-1/2 h-full flex items-center justify-center space-x-2">
          <span className={`w-5 h-5 transition-colors duration-300 ${isLong ? 'text-white' : 'text-slate-600 dark:text-gray-300'}`}>
            <LongIcon />
          </span>
          <span className={`text-base font-semibold transition-colors duration-300 ${isLong ? 'text-white' : 'text-slate-600 dark:text-gray-300'}`}>
            Long
          </span>
        </div>

        {/* Short Option */}
        <div className="relative z-10 w-1/2 h-full flex items-center justify-center space-x-2">
          <span className={`w-5 h-5 transition-colors duration-300 ${!isLong ? 'text-white' : 'text-slate-600 dark:text-gray-300'}`}>
            <ShortIcon />
          </span>
          <span className={`text-base font-semibold transition-colors duration-300 ${!isLong ? 'text-white' : 'text-slate-600 dark:text-gray-300'}`}>
            Short
          </span>
        </div>
      </div>
    </div>
  );
};

export default TradeTypeToggle;