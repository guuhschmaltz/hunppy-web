import React from 'react';

import { CategoryProvider } from './useCategory';
import { PlayersProvider } from './usePlayers';

const AppProvider: React.FC = ({ children }) => (
  <PlayersProvider>
  <CategoryProvider>{children}</CategoryProvider>
  </PlayersProvider>
);

export default AppProvider;
