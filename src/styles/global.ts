import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-beef) url(../assets/background-medium.png) 50%;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
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
    --color-background: #568ba0;
    --color-icon: #2E3192;
    }
`;
