import React, { useEffect } from 'react';
import styled from 'styled-components';

function renderFigure(elemId, figure, color, size, cellsCount) {
  const offset = 3;
  const padding = size / 10;
  const canvasElem = document.getElementById(elemId);
  const context = canvasElem.getContext("2d");
  const cellSize = (size - padding * 2) / cellsCount;

  context.clearRect(0, 0, canvasElem.width, canvasElem.height);

  const renderBlocks = (blocks, color) => {
    context.fillStyle = color;
    blocks.forEach((block) => {
      const xReal = ((offset + block.x) * cellSize) + padding + 1;
      const yReal = ((offset + block.y) * cellSize) + padding + 1;
      context.fillRect(xReal, yReal, cellSize - 2, cellSize - 2);
    });
  };

  renderBlocks(figure.blocks, color);
  renderBlocks(figure.chains, 'green');
  renderBlocks(figure.spaces, 'red');
}

export default function Figure(props) {
  const { id, figure, color, size } = props;
  const cellsCount = 7;

  useEffect(
    () => renderFigure(id, figure, color, size, cellsCount),
    [ figure ]
  );

  return (
    <Canvas
      id={id}
      width={size}height={size}
    />
  );
}

const Canvas = styled.canvas`
  margin: 0;
  padding: 0;
`;
