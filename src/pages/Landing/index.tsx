import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowRightCircle } from 'react-icons/fi';

import logoImg from '../../assets/logo-com-nome.png';
import { Container, Content } from './styles';
import { usePlayers } from '../../hooks/usePlayers';
import { useCategory } from '../../hooks/useCategory';


export default function Landing() {
  const navigate = useNavigate();
  const { players } = usePlayers();
  const { category } = useCategory();
  
  // useEffect(() => {
  //   if(players.length > 0 && category){
  //     navigate('/all-you-can-eat');
  //   }
  // }, [players, category, navigate]);
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
