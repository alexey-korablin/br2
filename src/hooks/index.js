import { useState } from 'react';

export const useMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    return { darkMode, setDarkMode }
};

export const usePhase = () => {
    const [phase, setPhase] = useState(1);
    return { phase, setPhase };
}