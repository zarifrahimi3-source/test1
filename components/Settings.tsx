import React, { useState } from 'react';
import { CogIcon, CloseIcon, SunIcon, MoonIcon } from './Icons';

type Theme = 'light' | 'dark';

interface SettingsProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeToggle: React.FC<SettingsProps> = ({ theme, setTheme }) => {
    const baseClasses = "flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-gray-900 focus:ring-blue-500";
    const activeClasses = "bg-blue-500 text-white";
    const inactiveClasses = "bg-slate-200 dark:bg-gray-700/50 text-slate-600 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-gray-700";

    return (
        <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Theme</label>
            <div className="flex items-center space-x-2 bg-slate-100 dark:bg-gray-800/70 p-1 rounded-xl border border-slate-300 dark:border-gray-700">
                <button onClick={() => setTheme('light')} className={`${baseClasses} ${theme === 'light' ? activeClasses : inactiveClasses}`}>
                    <span className="w-5 h-5"><SunIcon /></span>
                    <span>Light</span>
                </button>
                <button onClick={() => setTheme('dark')} className={`${baseClasses} ${theme === 'dark' ? activeClasses : inactiveClasses}`}>
                    <span className="w-5 h-5"><MoonIcon /></span>
                    <span>Dark</span>
                </button>
            </div>
        </div>
    );
};

const Settings: React.FC<SettingsProps> = ({ theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="absolute top-2 right-2 z-10 p-1 rounded-full text-slate-500 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-700/50 hover:text-slate-800 dark:hover:text-gray-200 transition-colors duration-200"
                aria-label="Open settings"
            >
                <span className="w-7 h-7 block"><CogIcon /></span>
            </button>

            {/* Overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-sm bg-slate-100 dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-6 h-full flex flex-col">
                    <header className="flex items-center justify-between pb-4 border-b border-slate-300 dark:border-gray-700">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-gray-100">Settings</h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 rounded-full text-slate-500 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-700 hover:text-slate-800 dark:hover:text-gray-100 transition-colors"
                            aria-label="Close settings"
                        >
                            <span className="w-7 h-7 block"><CloseIcon /></span>
                        </button>
                    </header>
                    <div className="py-6 space-y-6 flex-grow">
                        <ThemeToggle theme={theme} setTheme={setTheme} />
                        <div>
                           <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100 mb-3">About</h3>
                           <div className="space-y-3 text-sm text-slate-700 dark:text-gray-300 p-4 bg-slate-200 dark:bg-gray-800/50 rounded-lg border border-slate-300 dark:border-gray-700">
                               <p>This calculator helps you manage risk in cryptocurrency markets by determining the correct position size based on your entry, stop-loss, and risk parameters.</p>
                               <p>It supports both Futures and Spot trading with advanced options like multiple take-profit targets and entry points.</p>
                           </div>
                        </div>
                    </div>
                    <footer className="text-center text-xs text-slate-500 dark:text-gray-500 py-4">
                        <p>Made by Daniel, an independent developer.</p>
                        <a href="mailto:zarifrahimi3@gmail.com" className="text-blue-600 dark:text-blue-500 hover:underline">
                            zarifrahimi3@gmail.com
                        </a>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Settings;