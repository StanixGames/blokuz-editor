import React, { useCallback } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { PLAYER_ONE, PLAYER_TWO } from '../../const';
import game from '../../store/ducks/game';
import FigureControlButton from '../../UI/FigureControlButton';
import Figure from '../Figure';

function PlayerInfo(props) {
  const {
    turn,
    player,
    activeFigure,
    setActiveFigure,
    onFlipX,
    onFlipY,
    onRotate,
  } = props;

  if (!props[PLAYER_ONE] && !props[PLAYER_TWO]) {
    return null;
  }
  const playerActive = turn === player;
  const { name, color, score, figures } = props[player] || {};
  const buttonSize = 50;

  const figureButtons = figures.map((figure) => {
    const figurePlaced = figure.blocks.length === 0;
    const selected = !figurePlaced && playerActive && activeFigure && activeFigure.id === figure.id;
    const clickHandler = playerActive && !figurePlaced ? () => setActiveFigure({ ...figure, color }) : null;
    const id = `button-${figure.id}`;

    return (
      <FigureButton
        key={id}
        selected={selected}
        size={buttonSize}
        onClick={clickHandler} 
      >
        {figure && (
          <Figure
            id={id}
            size={buttonSize}
            color={color}
            figure={figure}
          />
        )}
      </FigureButton>
    );
  });

  return (
    <Wrapper active={playerActive}>
      <Header>
        <NameLabel>{name}</NameLabel>
        <ScoreLabel>{score}</ScoreLabel>
      </Header>
      <FiguresContainer>{figureButtons}</FiguresContainer>
      <PreviewContainer>
        {playerActive && activeFigure && (
          <>
            <PreviewFigure size={300}>
              {activeFigure && (
                <PreviewFigureContainer onClick={onRotate}>
                  <Figure
                    id="figure-preview"
                    size={150}
                    color={color}
                    figure={activeFigure}
                    withGrid
                    // debug
                  />
                </PreviewFigureContainer>
              )}
            <PrevieControlButtonsContainer>
              <FigureControlButton onClick={onFlipX}>
                Flip X
              </FigureControlButton>
              <FigureControlButton onClick={onFlipY}>
                Flip Y
              </FigureControlButton>
            </PrevieControlButtonsContainer>
            </PreviewFigure>
          </>
        )}
      </PreviewContainer>
      {!playerActive && (
        <LockOverlay />
      )}
    </Wrapper>
  );
}

function mapStateToProps(state) {
  return {
    turn: state.game.turn,
    activeFigure: state.game.activeFigure,
    [PLAYER_ONE]: state.game[PLAYER_ONE],
    [PLAYER_TWO]: state.game[PLAYER_TWO],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setActiveFigure: (figure) => dispatch(game.actions.setActiveFigure(figure)),
    setFigureSchema: (player, figureId, newSchema) =>
      dispatch(game.actions.setFigureSchema(player, figureId, newSchema)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerInfo);

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: #6F6F6F;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
`;

const LockOverlay = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background-color: rgba(0,0,0,0.6);
`;

const Header = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;

const NameLabel = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 22px;
  color: rgba(255,255,255,0.8);
`;

const ScoreLabel = styled(NameLabel)`
  font-family: 'Roboto', sans-serif;
  font-size: 44px;
  color: rgba(255,255,255,0.6);
`;

const FiguresContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
`;

const FigureButton = styled.div`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
  display: block;
  background-color: #E4E4E4;
  margin: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #D7D7D7;
  }
  padding: 0px;
  box-sizing: border-box;
  ${({ selected }) => selected ? `border: 4px solid #79EC29;` : ''}
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
`;

const PreviewFigure = styled.div`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PrevieControlButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const PreviewFigureContainer = styled.div`
  background-color: #7C7C7C;
  cursor: pointer;
`;
