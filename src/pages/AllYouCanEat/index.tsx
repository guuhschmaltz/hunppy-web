import React from 'react';

interface AllYouCanEatProps{
  foodName?: string;
}

export default function AllYouCanEat({foodName = "Pizza"}: AllYouCanEatProps) {
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
