import React from 'react';

import { Welcome } from './components/Welcome';
import { Settings } from './components/Settings';
import { Game } from './components/Game';
import './App.css';

function App() {
  return <>
    <Welcome />
    <Settings />
    <Game />
  </>
}

export default App;
