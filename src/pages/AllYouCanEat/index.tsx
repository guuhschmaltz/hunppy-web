import React, { FormEvent, useRef, useState } from 'react';
import { useCategory } from '../../hooks/useCategory';
import { usePlayers } from '../../hooks/usePlayers';
import { FiPlusCircle, FiMinusCircle, FiArrowLeftCircle } from 'react-icons/fi';
import logoImg from '../../assets/logo-com-nome.png';

import { AddPhoneNumber, Container , Content, EndGame, Table } from './styles';
import { InputButtonContainer } from '../AddPlayers/styles';
import { Link } from 'react-router-dom';

type Player = {
  name: string;
  points: number;
}

export default function AllYouCanEat() {
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);

  const category = useCategory();
  const players = usePlayers();

  function handleAddPoint(player: Player) {
    players.addPoint(player);
  }

  function handleDeletePoint(player: Player) {
    players.deletePoint(player);
  }

  function handleSendWhatsAppMessage(e: FormEvent<HTMLFormElement>, players: Player[]){
    e.preventDefault();
    if(phoneNumberInputRef.current !== null){
      const pointsString = players.map(player => `O jogador *${player.name}* fez *${player.points}* pontos,`).join('%0a')

      const championPlayer = players.reduce(function(prev, current){
          return(prev.points > current.points) ? prev: current
      })
      
      const whatsAppMessageString = `*🍕 Aplicativo Hunppy 🍔*%0a%0aVocê participou de um Rodízio de ${category.category?.name}. %0aPlacar de pontuações: %0a%0a${pointsString} %0a%0aOnde o incrível campeão foi o *${championPlayer.name}* com incríveis *${championPlayer.points}* pontos 🏆%0a%0aObrigado por ter utilizado nosso aplicativo (; `;

      window.open(`https://api.whatsapp.com/send?phone=+55${phoneNumberInputRef.current.value}&text=${whatsAppMessageString}`); 
    }
  }

  const phoneNumberInputRef = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Hunppy"></img>
        <Table>
          <thead>Ródizio de: {category.category?.name}</thead>
          {players.players.map(player => {
            return (
              <div>
              <tr key={player.name}>
                <td>
                    <p>{player.name}</p>
                </td>
                <td>
                  <FiPlusCircle size={32} style={{
                     marginLeft: 5,
                     marginRight: 10,
                     cursor: 'pointer' }}
                     onClick={() => handleAddPoint(player)} />
                  <p>{player.points}</p>
                  <FiMinusCircle size={32} style={{
                     marginLeft: 10,
                     marginRight: 5,
                     cursor: 'pointer' }}
                     onClick={() => handleDeletePoint(player)} />
                </td>
              </tr>
              </div>
            )
          })}
        </Table>
        { showWhatsAppButton === false ? (
          <EndGame>
          <p onClick={() => setShowWhatsAppButton(true)}>Finalizar Jogo</p>
          </EndGame>
          ) : (
          <AddPhoneNumber onSubmit={(e) => handleSendWhatsAppMessage(e, players.players)}>
            <p>Adicione um celular</p>
            <InputButtonContainer>
            <input name="phone-number" placeholder="11999999999" type="number" ref={phoneNumberInputRef} />
            <button>Enviar</button>
            </InputButtonContainer>
          </AddPhoneNumber>
        )
        }
      </Content>
    </Container>
  );
}
