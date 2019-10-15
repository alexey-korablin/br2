import React from 'react';

import { useModeValue } from '../context';

export const Mode = () => {
    const { darkMode, setDarkMode } = useModeValue();

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light mode' : 'Dark mode'}
        </button>
    );
}