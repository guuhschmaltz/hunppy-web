import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { useCategory } from './useCategory';
import { usePlayers } from './usePlayers';

interface GameContextData {
  gameStarted: Boolean; 
}

interface GameProviderProps {
  children: ReactNode;
}

const GameContext = createContext<GameContextData>(
  {} as GameContextData
);

export function GameProvider({ children }: GameProviderProps) {
    const { players } = usePlayers();
    const { category } = useCategory();
    const [gameStarted, setGameStarted] = useState<Boolean>(() => {
      
      if(players.length > 0 && category?.name){
        return true
      }

      return false
    })

    useEffect(() =>{
      if(players.find(p => p.points > 0) && category){
        setGameStarted(true);
      } else {
        setGameStarted(false);
      }
    },[players,category])

    return (
      <GameContext.Provider value={{gameStarted}}>
        {children}
      </GameContext.Provider>
    )
  }


export function useGame() {
  const context = useContext(GameContext);
  return context;
}