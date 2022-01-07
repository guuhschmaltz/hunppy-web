import React, { useRef, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

type Player = {
  name: string;
}

export default function AddPlayers() {
  const [players, setNewPlayers] = useState<Player[]>([]);

  function addPlayers() {

    if (playerInputRef.current !== null) {
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
        {players.length > 0 && (
          <div className="players">
            <h2>Lista de participantes:</h2>
            {players.map(player => {
              return (
                <div className="player" key={player.name + Math.random()}>
                  <p>{player.name}</p>
                  <div className="delete-player">
                  <FiTrash size={32} color="rgba(255, 255, 255, 0.932)" />
                  </div>
                </div>
              )
            })}
            <div className="start-game">
              <Link to="/all-you-can-eat">
                <button>Começar jogo</button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
