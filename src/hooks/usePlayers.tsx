import { createContext, useState, ReactNode, useContext } from 'react';

interface Player {
  name: string;
}

interface PlayersContextData {
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

interface PlayersProviderProps {
  children: ReactNode;
}

const PlayersContext = createContext<PlayersContextData>(
  {} as PlayersContextData
);

export function PlayersProvider({ children }: PlayersProviderProps ) {
  const [players, setPlayers] = useState<Player[]>([]);
  return (
    <PlayersContext.Provider value={{players, setPlayers}}>
      { children }
    </PlayersContext.Provider>
  )
}

export function usePlayers() {
  const context = useContext(PlayersContext);
  return context;
}