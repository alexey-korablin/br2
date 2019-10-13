import React from 'react';

export const Game = () => (
    <>
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
            <h3>Summary</h3>
            <ul>
                <li><span>Player 1</span> has <span>3</span> points</li>
                <li><span>Player 2</span> has <span>5</span> points</li>
                <li><span>Player 3</span> has <span>5</span> points</li>
                <li><span>Player 4</span> has <span>6</span> points</li>
            </ul>
        </div>
        <button>Finish the game</button>
    </>
)