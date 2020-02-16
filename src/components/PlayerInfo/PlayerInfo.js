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
  const { name, color, figures } = props[player] || {};
  let score = 0;
  const buttonSize = 100;

  const figureButtons = figures.map((figure) => {
    const selected = playerActive && activeFigure && activeFigure.id === figure.id;
    const clickHandler = playerActive ? () => setActiveFigure({ ...figure, color }) : null;

    return (
      <FigureButton
        selected={selected}
        size={buttonSize}
        onClick={clickHandler} 
      >
        <Figure
          id={`button-${figure.id}`}
          size={buttonSize}
          color={color}
          figure={figure}
        />
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
            <PreviewFigure onClick={onRotate} size={300}>
              {activeFigure && (
                <Figure
                  id="figure-preview"
                  size={300}
                  color={color}
                  figure={activeFigure}
                  debug
                />
              )}
            </PreviewFigure>
            <PrevieControlButtonsContainer>
              <FigureControlButton onClick={onFlipX}>
                Flip X
              </FigureControlButton>
              <FigureControlButton onClick={onFlipY}>
                Flip Y
              </FigureControlButton>
            </PrevieControlButtonsContainer>
          </>
        )}
      </PreviewContainer>
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
  background-color: ${({ active }) => active ? '#31947f' : '#1b6152'};
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
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
  background-color: rgba(0,0,0,0.1);
  margin: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0,0,0,0.4);
  }
  padding: 0px;
  box-sizing: border-box;
  ${({ selected }) => selected ? `border: 2px solid #bac72e;` : ''}
`;

const PreviewContainer = styled.div`
  display: flex;
  flex: 1;
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
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.1);
`;

const PrevieControlButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
