import React from 'react';

import { useModeValue } from '../context';
import { usePhaseValue } from '../context';
import { PHASES } from '../constants';

export const Game = () => {
    const { darkMode } = useModeValue();
    const { phase, setPhase } = usePhaseValue();
    const OWN_PHASE = 'play';
    const currentPhase = PHASES[phase];

    console.log('Game component mode is dark:', darkMode);
    console.log('Settings component phase is:', PHASES[phase]);
    
    return (
        <div className={currentPhase === OWN_PHASE ? 'game' : 'hidden'}>
            <h2>Round 1 of 12</h2>
            <ul>
                {Array(6).fill().map((_, i) => 
                    <li key={`question_${i}`}>
                        <>
                            <span>Task {i}</span>
                        </>
                    </li>
                )}
            </ul>
            <p>Click to generate number</p>
            <button>Get number</button>
            <div>
                {/* make outstanding Summary component. Use in Game and Finish components */}
                <h3>Summary</h3>
                <ul>
                    <li><span>Player 1</span> has <span>3</span> points</li>
                    <li><span>Player 2</span> has <span>5</span> points</li>
                    <li><span>Player 3</span> has <span>5</span> points</li>
                    <li><span>Player 4</span> has <span>6</span> points</li>
                </ul>
            </div>
            <button onClick={() => setPhase(phase + 1)}>Finish the game</button>
        </div>
)}