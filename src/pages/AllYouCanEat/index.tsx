import React from 'react';
import { useCategory } from '../../hooks/useCategory';
import { usePlayers } from '../../hooks/usePlayers';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import '../AllYouCanEat/styles.css';

export default function AllYouCanEat() {
  const category = useCategory();
  const players = usePlayers();

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
                     cursor: 'pointer' }} />
                  <p>{player.points}</p>
                  <FiMinusCircle size={32} style={{
                     marginLeft: 10,
                     marginRight: 5,
                     cursor: 'pointer' }} />
                </td>
              </tr>
            )
          })}
        </table>
        </div>
      </main>
    </div>
  );
}
