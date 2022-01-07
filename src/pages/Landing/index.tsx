import React from 'react';
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';

import logoImg from '../../assets/logo-com-nome.png';
import './styles.css';


export default function Landing() {
  return (
    <div id="page-landing">
        <main className="content">
          <img src={logoImg} alt="Hunppy"></img>
          <h1>Seu contador de rodízios</h1>
          <p>Vamos ver quem come mais? só não vale passar mal.</p>
          <div className="button-container">
          <Link to="/add-players" className="enter-app">
            <FaArrowRight size={32} color="rgba(255, 255, 255, 0.932)" />
          </Link>
          </div>
        </main>
    </div>
  );
}
