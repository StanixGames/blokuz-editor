import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { PLAYER_ONE, PLAYER_TWO } from '../../const';
import PlayerInfo from '../../components/PlayerInfo';
import engine from '../../engine';

function GameScreen() {
  useEffect(() => {
    engine.initGame();

    return () => {
      engine.destroyGame();
    }
  }, []);

  const handleFlipX = useCallback(() => {
    engine.changeActiveFigure('flipX');
  }, []);
  const handleFlipY = useCallback(() => {
    engine.changeActiveFigure('flipY');
  }, []);
  const handleRotate = useCallback(() => {
    engine.changeActiveFigure('rotate');
  }, []);

  return (
    <Wrapper>
      <PlayerPanel>
        <PlayerInfo
          player={PLAYER_ONE}
          onFlipX={handleFlipX}
          onFlipY={handleFlipY}
          onRotate={handleRotate}
        />
      </PlayerPanel>
      <BoardPanel id="board" />
      <PlayerPanel>
        <PlayerInfo
          player={PLAYER_TWO}
          onFlipX={handleFlipX}
          onFlipY={handleFlipY}
          onRotate={handleRotate}
        />
      </PlayerPanel>
    </Wrapper>
  );
}

export default GameScreen;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: #424242;
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
`;
