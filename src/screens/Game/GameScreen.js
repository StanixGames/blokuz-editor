import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PLAYER_ONE, PLAYER_TWO } from '../../const';
import PlayerInfo from '../../components/PlayerInfo';
import Board from '../../components/Board';
import engine from '../../engine';

function GameScreen() {
  useEffect(() => {
    engine.initGame();

    return () => {
      engine.destroyGame();
    }
  }, []);

  return (
    <Wrapper>
      <PlayerPanel>
        <PlayerInfo
          player={PLAYER_ONE}
        />
      </PlayerPanel>
      <BoardPanel id="board">
        {/* <Board /> */}
      </BoardPanel>
      <PlayerPanel>
        <PlayerInfo
          player={PLAYER_TWO}
        />
      </PlayerPanel>
    </Wrapper>
  );
}

export default GameScreen;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: #1b6152;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;

const PlayerPanel = styled.div`
  display: flex;
  flex: 1;
  margin: 4px;
`;

const BoardPanel = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  margin: 4px;
  background-color: rgba(255,255,255,0.1);
  border: 1px solid red;
`;
