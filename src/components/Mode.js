import React from 'react';

import { useModeValue } from '../context';

export const Mode = () => {
    const { darkMode, setDarkMode } = useModeValue();

    return (
        <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`mode-button ${darkMode ? 'dark' : ''}`}
        >
            {darkMode ? 'Light mode' : 'Dark mode'}
        </button>
    );
}