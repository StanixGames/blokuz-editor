import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import board from '../../store/ducks/board';
import { PLAYER_ONE } from '../../const';
import canvasRenderer from './CanvasRenderer';

function calculateSizes(setBoardSize, setCellSize) {
  const boardElem = document.getElementById('board');
  const boardContainerWidth = boardElem.offsetWidth;
  const boardContainerHeight = boardElem.offsetHeight;
  let boardSize = boardContainerHeight;

  if (boardContainerWidth < boardContainerHeight) {
    boardSize = boardContainerWidth;
  }

  boardSize -= 20;

  const cellSize = (boardSize - 28) / 14;

  setBoardSize(boardSize - 20);
  setCellSize(cellSize);

  return cellSize;
}

function renderCells(cells, size) {
  return cells.map((row) => {
    return row.map((color) => {
      return (
        <Cell size={size} color={color} />
      );
    });
  });
}

function Board(props) {
  const { activeFigure, turn, cells, placeFigure } = props;
  const [ boardSize, setBoardSize ] = useState(0);
  const color = props[turn === PLAYER_ONE ? 'player1' : 'player2'].color;
  // const [ cellSize, setCellSize ] = useState(1);

  // const test = useCallback((e) => {
  //   const boardElem = document.getElementById('boardCanv');
  //   var rect = boardElem.getBoundingClientRect();
  //   var x = e.clientX - rect.left; //x position within the element.
  //   var y = e.clientY - rect.top;  //y position within the element.
  //   const xPad = Math.ceil(x / cellSize);
  //   const yPad = Math.ceil(y / cellSize);
  //   // console.log(cellSize, xPad, yPad);
  // }, []);

  const recalculate = useCallback(() => {
    const boardElem = document.getElementById('board');
    const boardContainerWidth = boardElem.offsetWidth;
    const boardContainerHeight = boardElem.offsetHeight;
    let boardSize = boardContainerHeight;

    if (boardContainerWidth < boardContainerHeight) {
      boardSize = boardContainerWidth;
    }

    boardSize -= 20;

    setBoardSize(boardSize - 20);

    canvasRenderer.setBoardSize(boardSize);
    // canvasRenderer.renderGrid();
  }, [ setBoardSize, boardSize ]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      recalculate();
    });

    recalculate();
    
    const boardElem = document.getElementById('preview');
    boardElem.addEventListener('mousemove', (e) => {
      e.preventDefault();
      canvasRenderer.mouseMove(e);
    }, true);
    boardElem.addEventListener('mousedown', (e) => {
      e.preventDefault();
      canvasRenderer.mouseDown();
    });

    return () => {
      window.removeEventListener('resize');
      boardElem.removeEventListener('mousemove');
      boardElem.removeEventListener('mousedown');
    }
  }, []);

  useEffect(() => {
    canvasRenderer.setFigure(activeFigure);
    canvasRenderer.setColor(color);
    canvasRenderer.setCells(cells);
    canvasRenderer.onPlaceFigure(placeFigure);
  }, [ activeFigure, color, cells, placeFigure ]);

  return canvasRenderer.render();
}

function mapStateToProps(state) {
  return {
    cells: state.board.cells,
    activeFigure: state.game.activeFigure,
    turn: state.game.turn,
    player1: state.game.player1,
    player2: state.game.player2,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    placeFigure: (figure, centerX, centerY) =>
      dispatch(board.actions.placeFigure(figure, centerX, centerY)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);

// const Wrapper = styled(canvas)`
//   display: flex;
//   flex-wrap: wrap;
//   background-color: #EBEBEB;
//   border: 1px solid red;
//   ${({ size }) => (`
//     width: ${size}px;
//     height: ${size}px;  
//   `)}
// `;

const Cell = styled.div`
  display: block;
  background-color: ${({ color }) => color || `rgba(255,255,255,0.4)`};
  ${({ size }) => (`
    width: ${size}px;
    height: ${size}px;
  `)}
  border: 3px solid #D4D4D4;
  box-sizing: border-box;
`;
