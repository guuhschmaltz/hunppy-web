import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
`;


const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;



export const Content = styled.main`
  background: var(--color-background);
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  > img {
    width: 200px;
  }

  > p {
    font-size: 20px;
    text-align: center;
  }

  > div {
      margin: 16px 0;

      svg {
        color: var(--color-background-img);
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.2, '#17BCEF')};
        }
      }
    }
`