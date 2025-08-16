import React from 'react';

interface InputGroupProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  symbol?: string;
  symbolPosition?: 'left' | 'right';
  disabled?: boolean;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, value, onChange, placeholder, symbol, symbolPosition = 'left', disabled = false }) => {
  const paddingClass = symbolPosition === 'left' ? 'pl-7 pr-4' : 'pr-7 pl-4';
  
  return (
    <div>
      {label && <label className="block text-sm font-medium text-slate-600 dark:text-gray-300 mb-2">{label}</label>}
      <div className="relative">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full border border-slate-400 dark:border-gray-700 rounded-lg py-2.5 text-slate-900 dark:text-gray-100 placeholder-slate-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 ${paddingClass} ${disabled ? 'bg-slate-200 dark:bg-gray-800 cursor-not-allowed' : 'bg-slate-50 dark:bg-gray-900/70'}`}
        />
        {symbol && symbolPosition === 'left' && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 dark:text-gray-400">
                {symbol}
            </span>
        )}
        {symbol && symbolPosition === 'right' && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 dark:text-gray-400">
                {symbol}
            </span>
        )}
      </div>
    </div>
  );
};

export default InputGroup;
