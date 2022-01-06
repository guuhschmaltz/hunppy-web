import React, { FormEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type Player = {
  name: string;
}

export default function AddPlayers() {
  const [players, setNewPlayers] = useState<Player[]>([]);

  function addPlayers(){
    
    if (playerInputRef.current !== null){
      const player = {
        name: playerInputRef.current.value
      };
      const newPlayers = [...players, player];
      setNewPlayers(newPlayers);
    }
  }

  const playerInputRef = useRef<HTMLInputElement>(null);
  return (
    <div id="page-add-players">
      <main>
          <h1>Adicione os particicipantes</h1>
          <label htmlFor="player">Nome do participante:</label>
          <input name="player" type="text" ref={playerInputRef} />
          <button onClick={addPlayers}>Adicionar</button>
          {}
          { players.length > 0 && (
            <div className="players">
            <h2>Lista de participantes:</h2>
              { players.map(player => {
                return(
                  <div className="player" key={player.name + Math.random()}>
                    <p>{player.name}</p>
                  </div>
                )
              })}
            </div>
          )}
          <div className="start-game">
            <Link to="/all-you-can-eat">
              <button>Começar jogo</button>
            </Link>
          </div>
        </main>
    </div>
  );
}
