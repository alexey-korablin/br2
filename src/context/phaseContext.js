import React, { createContext, useContext } from 'react';

import { usePhase } from '../hooks';

export const PhaseContext = createContext();
export const PhaseProvider = ({ children }) => {
    const { phase, setPhase } = usePhase();
    return (<PhaseContext.Provider value={{phase, setPhase}}>
        {children}
    </PhaseContext.Provider>);
};
export const usePhaseValue = () => useContext(PhaseContext);