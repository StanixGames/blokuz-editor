import React, { useCallback } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { PLAYER_ONE, PLAYER_TWO } from '../../const';
import { rotateFigure, flipX, flipY } from '../../utils/Figure';
import game from '../../store/ducks/game';
import FigureControlButton from '../../UI/FigureControlButton';
import Figure from '../Figure';

function getControlHandlerCreator(props) {
  const { player, activeFigure, setFigureSchema, setActiveFigure } = props;
  return (controlMethod) => {
    return useCallback(() => {
      if (!activeFigure || !controlMethod) {
        return ;
      }
      const updatedSchema = controlMethod(activeFigure.schema);
      setActiveFigure({
        ...activeFigure,
        schema: updatedSchema,
      });
      setFigureSchema(player, activeFigure.id, updatedSchema);
    });
  }
}

function PlayerInfo(props) {
  const { turn, player, activeFigure, setActiveFigure } = props;
  const playerActive = turn === player;
  const data = player === PLAYER_ONE ? props.player1 : props.player2;
  const { name, color, figures } = data || {};
  let score = 0;

  const createControlHandler = getControlHandlerCreator(props);
  const rotateHandler = createControlHandler(rotateFigure);
  const flipXHandler = createControlHandler(flipX);
  const flipYHandler = createControlHandler(flipY);

  const figureButtons = figures.map((figure) => {
    const { schema, id } = figure;
    const selected = playerActive && activeFigure && activeFigure.id === id;
    const clickHandler = playerActive ? () => setActiveFigure(figure) : null;

    return (
      <FigureButton selected={selected}>
        <Figure
          color={color}
          schema={schema}
          onClick={clickHandler} 
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
        {playerActive && (
          <>
            <PreviewFigure>
              {activeFigure && (
                <Figure
                  color={color}
                  schema={activeFigure.schema}
                />
              )}
            </PreviewFigure>
            <PrevieControlButtonsContainer>
              <FigureControlButton onClick={rotateHandler}>
                Rotate
              </FigureControlButton>
              <FigureControlButton onClick={flipXHandler}>
                Flip X
              </FigureControlButton>
              <FigureControlButton onClick={flipYHandler}>
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
    player1: state.game.player1,
    player2: state.game.player2,
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

const buttonSideSize = '9vh';
const FigureButton = styled.div`
  min-width: ${buttonSideSize};
  min-height: ${buttonSideSize};
  max-width: ${buttonSideSize};
  max-height: ${buttonSideSize};
  display: flex;
  flex: 1;
  background-color: rgba(0,0,0,0.1);
  margin: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0,0,0,0.4);
  }
  padding: 5px;
  position: relative;
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

const previewFigureSize = '30vh';
const PreviewFigure = styled.div`
  min-width: ${previewFigureSize};
  min-height: ${previewFigureSize};
  max-width: ${previewFigureSize};
  max-height: ${previewFigureSize};
  display: flex;
  flex: 1;
  background-color: rgba(0,0,0,0.1);
`;

const PrevieControlButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
