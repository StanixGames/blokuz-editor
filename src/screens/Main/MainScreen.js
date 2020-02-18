import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import BackgroundGrid from '../../components/BackgroundGrid';
import ActionButton from '../../UI/ActionButton';

export default function MainScreen() {
  const history = useHistory();
  const startGameHandler = useCallback(
    () => history.push('/game'),
    [ history ]
  );
  const editorHandler = useCallback(
    () => history.push('/editor'),
    [ history ]
  );

  return (
    <BackgroundGrid>
      <Wrapper>
        <LogoLabel>BlokuZ</LogoLabel>
        <ActionButton onClick={startGameHandler}>
          Start Game
        </ActionButton>
        <ActionButton onClick={editorHandler}>
          Editor
        </ActionButton>
      </Wrapper>
    </BackgroundGrid>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 400px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.1);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoLabel = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 102px;
  color: rgba(0,0,0,0.3);
  margin-bottom: 50px;
`;
