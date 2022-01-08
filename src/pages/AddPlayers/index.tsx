import React, { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


import logoImg from '../../assets/logo-com-nome.png';
import { useCategory } from '../../hooks/useCategory';
import { usePlayers } from '../../hooks/usePlayers';
import './styles.css';

type Player = {
  name: string;
  points: number;
}


export default function AddPlayers() {
  const players = usePlayers();
  const category = useCategory();
  
  const navigate = useNavigate();


  function handleAddPlayer() {
    if (playerInputRef.current !== null) {

      const player = {
        name: playerInputRef.current.value,
        points: 0
      };

      //verificar se o input tá vazio
      if (player.name === '') {
        return;
      }

      //verificar se já existe um player com esse nome.
      const findPlayerWithSameName = players.players.find(p => p.name === player.name);
      if (findPlayerWithSameName) {
        return;
      }
      
      players.addPlayer(player);
      playerInputRef.current.value = '';
    }
  }

  function handleDeletePlayer(player: Player) {
    players.deletePlayer(player);
  }

  function handleAddCategory() {
    if(categoryInputRef.current !== null) {
      const newCategory = {
        name: categoryInputRef.current.value
      }

      if(newCategory.name === ''){
        return;
      }

      category.addCategory(newCategory);
    }
  }

  function handleStartGame(){
    navigate('/all-you-can-eat');
  }

  const playerInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLInputElement>(null);
  return (
    <div id="page-add-players">
      <main className="content">
        <img src={logoImg} alt="Hunppy"></img>
        <div className="add-players">
          <p>Adicione os particicipantes</p>
          <input name="player" type="text" ref={playerInputRef} />
          <button onClick={() => handleAddPlayer()}>Adicionar Participante</button>
        </div>
        {players.players.length > 0 && (
          <div className="players">
            <h2>Lista de participantes:</h2>
            {players.players.map(player => {
              return (
                <div className="player" key={player.name}>
                  <p>{player.name}</p>
                  <FiTrash className="trash" size={24} onClick={() => handleDeletePlayer(player)} />
                </div>
              )
            })}
            { category.category ? (
               <div className="start-game" onClick={handleStartGame}>
               <p>Começar o rodízio de {category.category.name}</p>
               <FaArrowRight size={32} color="rgba(255, 255, 255, 0.932)" />
           </div>
            ) : (
              <>
              <div className="add-category">
              <p>Escreva o nome do alimento que você irá comer no rodízio:</p>
              <input name="category" type="text" ref={categoryInputRef} />
              <button onClick={() => handleAddCategory()}>Salvar Categoria</button>
              </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
