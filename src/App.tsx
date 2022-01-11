import React from 'react';
import Routes from './routes';
import './styles/reset.css';

import GlobalStyle from './styles/global';
import AppProvider from './hooks';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes />
        
      </AppProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
