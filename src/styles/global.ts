import { createGlobalStyle } from 'styled-components';
import backgroundImg from '../assets/background.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-beef) 50%;
    background-image: url(${backgroundImg});
    color: #2c2c2c;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Nunito', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  :root {
    --color-bread: #F9AD47;
    --color-lettuce: #369B49;
    --color-cheese: #FFD63B;
    --color-beef: #6F150D;
    --color-ketchup: #FF321F;
    --color-background: #e6ffff;
    --color-background-img: #17BCEF;
    --color-icon: #2E3192;
    }
`;
