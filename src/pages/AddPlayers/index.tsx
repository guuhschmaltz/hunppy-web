import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


import logoImg from '../../assets/logo-com-nome.png';
import { usePlayers } from '../../hooks/usePlayers';
import './styles.css';

type Player = {
  name: string;
}

export default function AddPlayers() {
  const appPlayers = usePlayers();
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    setPlayers(appPlayers.players);
  }, [appPlayers]);
  
  const navigate = useNavigate();

  function handleAddPlayer() {
    if (playerInputRef.current !== null) {

      const player = {
        name: playerInputRef.current.value
      };

      //verificar se o input tá vazio
      if (player.name === '') {
        return;
      }

      //verificar se já existe um player com esse nome.
      const findPlayerWithSameName = players.find(p => p.name === player.name);
      if (findPlayerWithSameName) {
        return;
      }
      //mostrar erro

      const newPlayers = [...players, player];
      setPlayers(newPlayers);
      playerInputRef.current.value = '';
    }
  }

  function handleDeletePlayer(playerName: string) {
    const newPlayers = players.filter(player => player.name !== playerName);
    setPlayers(newPlayers);
  }

  function handleStartGame(){
    appPlayers.setPlayers(players);
    navigate('/all-you-can-eat');
  }

  const playerInputRef = useRef<HTMLInputElement>(null);
  return (
    <div id="page-add-players">
      <main className="content">
        <img src={logoImg} alt="Hunppy"></img>
        <h1>Adicione os particicipantes</h1>
        <div className="add-players">
          <input name="player" type="text" ref={playerInputRef} />
          <button onClick={handleAddPlayer}>Adicionar Participante</button>
        </div>
        {players.length > 0 && (
          <div className="players">
            <h2>Lista de participantes:</h2>
            {players.map(player => {
              return (
                <div className="player" key={player.name}>
                  <p>{player.name}</p>
                  <FiTrash className="trash" size={24} onClick={() => handleDeletePlayer(player.name)} />
                </div>
              )
            })}
            <div className="start-game" onClick={handleStartGame}>
                <p>Começar jogo</p>
                <FaArrowRight size={32} color="rgba(255, 255, 255, 0.932)" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
