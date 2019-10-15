import React, { createContext, useContext } from 'react';

import { useMode } from '../hooks';

export const ModeContext = createContext();
export const ModeProvider = ({ children }) => {
    const { darkMode, setDarkMode } = useMode();
    return (<ModeContext.Provider value={{darkMode, setDarkMode}}>
        {children}
    </ModeContext.Provider>);
};
export const useModeValue = () => useContext(ModeContext);