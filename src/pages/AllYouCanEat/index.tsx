import React from 'react';
import { usePlayers } from '../../hooks/usePlayers';

interface AllYouCanEatProps{
  foodName?: string;
}

export default function AllYouCanEat({foodName = "Pizza"}: AllYouCanEatProps) {
  const players = usePlayers();
  console.log(players);
  return (
    <div id="page-all-you-can-eat">
      <main>
          <h1>Ródizio de: {foodName}</h1>
          <div className="game">

          </div>
        </main>
    </div>
  );
}
