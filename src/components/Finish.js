import React from 'react';

import { useModeValue, usePhaseValue } from '../context';
import { PHASES } from '../constants';

export const Finish = () => {
    const { darkMode } = useModeValue();
    const { phase, setPhase } = usePhaseValue();
    const OWN_PHASE = 'finish';
    const currentPhase = PHASES[phase];

    console.log('Finish component mode is dark:', darkMode);
    console.log('Finish component phase is:', PHASES[phase]);

    return (
        <div className={currentPhase === OWN_PHASE ? 'finish': 'hidden'}>
            <h3>Thanks a lot for playing!</h3>
            <section>
                <h3>Summary</h3>
                <ul>
                    <li><span>Player 1</span> has <span>3</span> points</li>
                    <li><span>Player 2</span> has <span>5</span> points</li>
                    <li><span>Player 3</span> has <span>5</span> points</li>
                    <li><span>Player 4</span> has <span>6</span> points</li>
                </ul>
            </section>
            <section>
                <p>The winner is Player 4</p>
            </section>
            <button onClick={() => setPhase(1)}>Finish the game</button>
            <button onClick={() => setPhase(2)}>Play again</button>
        </div>
    );
}