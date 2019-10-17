import React from 'react';

import { useModeValue, usePhaseValue } from '../context';
import { PHASES } from '../constants';

const calculateClassName = (currentPhase, ownPhase, mode) => {
    const result = `${currentPhase === ownPhase ? 'welcome': 'hidden'} ${mode ? 'dark' : ''}`;
    console.log(result);
    return result;
}

export const Welcome = () => {
    const { darkMode } = useModeValue();
    const { phase, setPhase } = usePhaseValue();
    const OWN_PHASE = 'start';
    const currentPhase = PHASES[phase];

    console.log('Welcome component mode is dark:', darkMode);
    console.log('Welcome component phase is:', PHASES[phase]);

    return (
    <div 
        className={calculateClassName(currentPhase, OWN_PHASE, darkMode)}
    >
        <h1>Welcome to the <span>Keep Talking</span> game!</h1>
        <p>To start the game click "Start"</p>
        <button onClick={() => setPhase(phase + 1)}>Start the Game</button>
    </div>
);}