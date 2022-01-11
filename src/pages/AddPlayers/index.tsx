import React, { FormEvent, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiArrowLeftCircle, FiArrowRightCircle, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import logoImg from '../../assets/logo-com-nome.png';
import { useCategory } from '../../hooks/useCategory';
import { usePlayers } from '../../hooks/usePlayers';

import { AddDevourers, AddCategory, Container, Content, InputButtonContainer, Category, Table } from './styles';

type Player = {
  name: string;
  points: number;
}


export default function AddPlayers() {
  const players = usePlayers();
  const category = useCategory();

  function handleAddPlayer(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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

  function handleAddCategory(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (categoryInputRef.current !== null) {
      const newCategory = {
        name: categoryInputRef.current.value
      }

      if (newCategory.name === '') {
        return;
      }

      category.addCategory(newCategory);
    }
  }

  const playerInputRef = useRef<HTMLInputElement>(null);
  const categoryInputRef = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Hunppy"></img>
        {!category.category ? (
           <AddCategory onSubmit={(e) => handleAddCategory(e)}>
           <p>Categoria de alimento:</p>
            <InputButtonContainer>
            <input name="category" type="text" ref={categoryInputRef} />
            <button type="submit">Salvar</button>
            </InputButtonContainer>
          </AddCategory>
        ) : (
          <Category>
           <p>Rodízio de: <strong>{category.category.name}</strong></p>
          </Category>
        )}
        <AddDevourers onSubmit={(e) => handleAddPlayer(e)}>
          <p>Adicione os particicipantes</p>
          <InputButtonContainer>
          <input name="player" type="text" ref={playerInputRef} />
          <button>Adicionar</button>
          </InputButtonContainer>
        </AddDevourers>
        {players.players.length > 0 && (
          <Table>
          <thead>Lista de Participantes</thead> 
            {players.players.map(player => {
              return (
                <div>
                <tr key={player.name}>
                  <td>
                  <p>{player.name}</p>
                  </td>
                  <FiTrash className="trash" size={32} onClick={() => handleDeletePlayer(player)} />
                </tr>
                </div>
              )
            })}
          </Table>
        )}
        <div className="navigation">
          {players.players.length > 0 && category.category ? (
            <div>
            <Link to="/">
              <FiArrowLeftCircle size={48}/>
            </Link>
            <Link to ="/all-you-can-eat">
              <FiArrowRightCircle size={48} />
            </Link>
            </div>
          ) : (
            <div>
            <Link to="/">
              <FiArrowLeftCircle size={48}/>
            </Link>
            <FiArrowRightCircle size={48} opacity={0.5}/>
            </div>
          )}
        </div>
      </Content>
    </Container>
  );
}
