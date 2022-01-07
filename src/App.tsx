import React from 'react';
import Routes from './routes';
import './styles/reset.css';
import './styles/global.css';
import { PlayersProvider } from './hooks/usePlayers';

function App() {
  return (
    <div className="App">
      <PlayersProvider>
        <Routes />
      </PlayersProvider>
    </div>
  );
}

export default App;
