import React from 'react';

import { useModeValue } from '../context';
import { usePhaseValue } from '../context';
import { PHASES } from '../constants';

export const Settings = () => {
    const { darkMode } = useModeValue();
    const { phase, setPhase } = usePhaseValue();
    const OWN_PHASE = 'settings';
    const currentPhase = PHASES[phase];
    
    console.log('Settings component mode is dark:', darkMode);
    console.log('Settings component phase is:', PHASES[phase]);
    return (
        <div className={currentPhase === OWN_PHASE ? 'settings' : 'hidden'}>
            <h1>To start playing choose number of players</h1>
            <ul>
                {Array(8).fill().map((_, i) => 
                    <li key={i}>
                        <span onClick={() => setPhase(phase + 1)}>
                            {i + 1}
                        </span>
                    </li>)}
            </ul>
        </div>
    );
}