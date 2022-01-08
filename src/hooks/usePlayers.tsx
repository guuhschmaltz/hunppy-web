import { createContext, useState, ReactNode, useContext } from 'react';

interface Player {
  name: string;
  points: number;
}

interface PlayersContextData {
  players: Player[];
  addPlayer: (player: Player) => void;
  deletePlayer: (player: Player) => void;
  addPoint: (player: Player) => void;
  deletePoint: (player: Player) => void;
}

interface PlayersProviderProps {
  children: ReactNode;
}

const PlayersContext = createContext<PlayersContextData>(
  {} as PlayersContextData
);

export function PlayersProvider({ children }: PlayersProviderProps) {
  const [players, setPlayers] = useState<Player[]>([]);

  function addPlayer(newPlayer: Player) {
    const newPlayers = [...players, newPlayer];
    setPlayers(newPlayers);
  }

  function deletePlayer(player: Player) {
    const newPlayers = players.filter(p => p.name !== player.name);
    setPlayers(newPlayers);
  }

  function addPoint(player: Player) {
    const newPlayers = [...players];

    const index = players.indexOf(player);
    if (player.points || player.points === 0) {
      const newPlayer = {
        name: player.name,
        points: player.points += 1
      }

      newPlayers[index] = newPlayer;
      console.log(newPlayers);
      setPlayers(newPlayers);
    }
  }

    function deletePoint(player: Player) {
      const newPlayers = [...players];

      const index = players.indexOf(player);
      if (player.points) {
        if(player.points >= 0){
          const newPlayer = {
            name: player.name,
            points: player.points -= 1
          }
  
          newPlayers[index] = newPlayer;
          console.log(newPlayers);
          setPlayers(newPlayers);
        }
      }
    }

    return (
      <PlayersContext.Provider value={{ players, addPlayer, deletePlayer, addPoint, deletePoint }}>
        {children}
      </PlayersContext.Provider>
    )
  }


export function usePlayers() {
  const context = useContext(PlayersContext);
  return context;
}