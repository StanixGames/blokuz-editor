import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

function calculateSizes(setBoardSize, setCellSize) {
  const boardElem = document.getElementById('board');
  const boardContainerWidth = boardElem.offsetWidth;
  const boardContainerHeight = boardElem.offsetHeight;
  let boardSize = boardContainerHeight;

  if (boardContainerWidth < boardContainerHeight) {
    boardSize = boardContainerWidth;
  }

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
  const { schema, color, cells } = props;
  const [ boardSize, setBoardSize ] = useState(0);
  const [ cellSize, setCellSize ] = useState(1);

  const test = useCallback((e) => {
    const boardElem = document.getElementById('boardCanv');
    var rect = boardElem.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    const xPad = Math.ceil(x / cellSize);
    const yPad = Math.ceil(y / cellSize);
    // console.log(cellSize, xPad, yPad);
  }, [cellSize]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      calculateSizes(setBoardSize, setCellSize);
    });

    calculateSizes(setBoardSize, setCellSize);
    
    const boardElem = document.getElementById('boardCanv');
    boardElem.addEventListener('mousemove', (e) => {
      e.preventDefault();
      test(e);
    }, true);

    return () => {
      window.removeEventListener('resize');
      boardElem.removeEventListener('mousemove');
    }
  }, []);

  return (
    <Wrapper id="boardCanv" size={boardSize}>
      {renderCells(cells, cellSize)}
    </Wrapper>
  );
}

function mapStateToProps(state) {
  return {
    cells: state.board.cells,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ size }) => (`
    width: ${size}px;
    height: ${size}px;  
  `)}
`;

const Cell = styled.div`
  display: block;
  background-color: ${({ color }) => color || `rgba(255,255,255,0.4)`};
  ${({ size }) => (`
    width: ${size}px;
    height: ${size}px;
  `)}
  border: 1px solid rgba(0,0,0,0.2);
  box-sizing: border-box;
`;
