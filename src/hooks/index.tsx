import React from 'react';

import { CategoryProvider } from './useCategory';
import { GameProvider } from './useGame';
import { PlayersProvider } from './usePlayers';

const AppProvider: React.FC = ({ children }) => (
  <PlayersProvider>
  <CategoryProvider>
    <GameProvider>
      {children}
    </GameProvider>
  </CategoryProvider>
  </PlayersProvider>
);

export default AppProvider;
