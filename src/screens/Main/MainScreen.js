import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import ActionButton from '../../UI/ActionButton';

export default function MainScreen() {
  const history = useHistory();
  const startGameHandler = () => history.push('/game');

  return (
    <Wrapper>
      <LogoLabel>BlokuZ</LogoLabel>
      <ActionButton onClick={startGameHandler}>
        Start Game
      </ActionButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: #1b6152;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoLabel = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 102px;
  color: rgba(255,255,255,0.8);
  margin-bottom: 50px;
`;
