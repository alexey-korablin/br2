import React from 'react';

import { Welcome } from './components/Welcome';
import { Settings } from './components/Settings';
import { Game } from './components/Game';
import { Mode } from './components/Mode';
import { Finish } from './components/Finish';
import { ModeProvider, PhaseProvider } from './context';
import './App.css';

const App = () => {
  
  return <>
    <PhaseProvider>
      <ModeProvider>
        <Welcome />
        <Settings />
        <Game />
        <Mode />
        <Finish />
      </ModeProvider>
    </PhaseProvider>
  </>
}

export default App;
