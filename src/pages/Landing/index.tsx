import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRightCircle } from 'react-icons/fi';

import logoImg from '../../assets/logo-com-nome.png';
import { Container, Content } from './styles';


export default function Landing() {
  return (
    <Container>
        <Content>
          <img src={logoImg} alt="Hunppy"></img>
          <p>Vamos ver quem come mais?<br/> só não vale passar mal.</p>
          <div>
          <Link to="/add-players">
            <FiArrowRightCircle size={48} />
          </Link>
          </div>
        </Content>
    </Container>
  );
}
