import React from 'react';

export const Settings = () => (
    <>
        <h1>To start playing choose number of players</h1>
        <ul>
            {Array(8).fill().map((_, i) => <li key={i}>{i + 1}</li>)}
        </ul>
    </>
);