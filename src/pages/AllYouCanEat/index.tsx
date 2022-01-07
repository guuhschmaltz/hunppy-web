import React from 'react';
import { useCategory } from '../../hooks/useCategory';
import '../AllYouCanEat/styles.css';

export default function AllYouCanEat() {
  const category = useCategory();

  return (
    <div id="page-all-you-can-eat">
      <main className="content">
        <h1>Ródizio de: {category.category?.name}</h1>
        <div className="game">

        </div>
      </main>
    </div>
  );
}
