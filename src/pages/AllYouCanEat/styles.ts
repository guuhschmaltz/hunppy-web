import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';


const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(+50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;

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
`;

export const EndGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 16px;
  height: 40px;

  border-radius: 6px;
  background-color: var(--color-background-img);
  color: var(--color-background);
  padding: 16px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${shade(0.2, '#17BCEF')};
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

  animation: ${appearFromRight} 1s;

  > img {
    width: 200px;
  }
`

export const Table = styled.table`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;

  >div:last-child {
    border: none;
  }
  >div {
    width: 90%;
    margin-top: 4px;
    border-bottom: 2px solid var(--color-background-img);

    >tr{
      display: flex;
      flex: 1;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      text-transform: capitalize;
      padding: 0 16px 0 16px;

      >td + td {
      display: flex;
      justify-content: center;
      align-items: center;

      > p {
        font-size: 16px;
        font-weight: bold;
      }
    }

      svg {
        cursor: pointer;
        color: var(--color-background-img);
        transition: color 0.2s;
        margin: 4px;

        &:hover {
          color: ${shade(0.2, '#17BCEF')};
        }
      }
    }  
  }
`;

export const InputButtonContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  background: var(--color-background);
  border-radius: 6px;
  border: 2px solid var(--color-background-img);

  > input {
    border: 0;
    background: transparent;
    border-radius: 6px 0 0 6px;
    padding: 0 0 0 16px;
    min-width: 100px;
    width: 100%;
    height: 100%;
  }
  
  > button {
    font-size: 14px;
    min-width: 100px;
    width: 100%;
    height: 100%;
    border: 0;
    color: var(--color-background);
    background-color: var(--color-background-img);
    border-radius: 0 6px 6px 0;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: ${shade(0.2, '#17BCEF')};
    }
  }
`

export const AddPhoneNumber = styled.form`
  display: flex;
  flex: 1;
  margin: 16px;
  flex-direction: column;

  > p {
    display: inline-block;
  }
`