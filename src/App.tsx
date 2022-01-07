import React from 'react';
import Routes from './routes';
import './styles/reset.css';
import './styles/global.css';
import AppProvider from './hooks';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes />
      </AppProvider>
    </div>
  );
}

export default App;
