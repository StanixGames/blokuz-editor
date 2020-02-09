import React, { useState, useEffect } from 'react';
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
}

function renderCells(size) {
  const cells = [];
  
  for (let i = 0; i < 14*14; i += 1) {
    let color = null;

    cells.push(
      <Cell size={size} color={color} />
    );
  }
  return cells; 
}

export default function Board(props) {
  const { schema, color } = props;
  const [ boardSize, setBoardSize ] = useState(0);
  const [ cellSize, setCellSize ] = useState(0);

  useEffect(() => {
    calculateSizes(setBoardSize, setCellSize);

    window.addEventListener('resize', () => {
      calculateSizes(setBoardSize, setCellSize);
    });

    return () => {
      window.removeEventListener('resize');
    }
  }, []);

  return (
    <Wrapper id="boardCanv" size={boardSize}>
      {renderCells(cellSize)}
    </Wrapper>
  );
}

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
