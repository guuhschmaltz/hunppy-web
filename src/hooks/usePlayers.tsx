import { createContext, useState, ReactNode, useContext } from 'react';

interface Player {
  name: string;
  points?: number;
}

interface PlayersContextData {
  players: Player[];
  deletePlayer: (player: Player) => void;
  addPlayer: (player: Player) => void;
}

interface PlayersProviderProps {
  children: ReactNode;
}

const PlayersContext = createContext<PlayersContextData>(
  {} as PlayersContextData
);

export function PlayersProvider({ children }: PlayersProviderProps ) {
  const [players, setPlayers] = useState<Player[]>([]);

  function addPlayer(newPlayer: Player) {
    const newPlayers = [...players, newPlayer];
    setPlayers(newPlayers);
  }

  function deletePlayer(player: Player) {
    const newPlayers = players.filter(p => p.name !== player.name);
    setPlayers(newPlayers);
  }
  return (
    <PlayersContext.Provider value={{players, deletePlayer, addPlayer}}>
      { children }
    </PlayersContext.Provider>
  )
}

export function usePlayers() {
  const context = useContext(PlayersContext);
  return context;
}