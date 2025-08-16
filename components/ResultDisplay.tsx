import React from 'react';

interface ResultDisplayProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit?: string;
  valueClassName?: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ icon, label, value, unit, valueClassName = 'text-blue-600 dark:text-blue-400' }) => {
  return (
    <div className="bg-slate-100 dark:bg-gray-950/60 p-4 rounded-lg border border-slate-300 dark:border-gray-700/50 flex flex-col items-center justify-center space-y-2">
      <div className="flex items-center space-x-2 text-slate-600 dark:text-gray-400">
        <span className="w-5 h-5">{icon}</span>
        <h3 className="text-sm font-medium">{label}</h3>
      </div>
      <p className={`text-2xl font-bold ${valueClassName}`}>
        {value}
        {unit && <span className="text-base font-medium text-slate-500 dark:text-gray-500 ml-1.5">{unit}</span>}
      </p>
    </div>
  );
};

export default ResultDisplay;
