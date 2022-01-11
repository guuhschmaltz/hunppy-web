import React, { useRef, useState } from 'react';
import { useCategory } from '../../hooks/useCategory';
import { usePlayers } from '../../hooks/usePlayers';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import '../AllYouCanEat/styles.css';

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

  function handleSendWhatsAppMessage(players: Player[]){
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
    <div id="page-all-you-can-eat">
      <main className="content">
        <div className="game">
        <table>
          <thead>Ródizio de: {category.category?.name}</thead>
            <tr>
              <th>Nome</th>
              <th>Número de pontos</th>
            </tr>
          {players.players.map(player => {
            return (
              <tr key={player.name}>
                <td>
                    <p>{player.name}</p>
                </td>
                <td className="player-points">
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
            )
          })}
        </table>
        { showWhatsAppButton === false ? (
          <div className="end-game">
          <p onClick={() => setShowWhatsAppButton(true)}>Finalizar Jogo</p>
          </div>
          ) : (
          <div>
            <label htmlFor="phone-number">Insira um número de celular para receber a pontuação via WhatsApp!</label>
            <input name="phone-number" type="number" ref={phoneNumberInputRef}></input>
            <p onClick={() => handleSendWhatsAppMessage(players.players)}>Enviar Mensagem</p>
          </div>
        )
        }
        </div>
      </main>
    </div>
  );
}
