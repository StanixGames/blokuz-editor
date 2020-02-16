import React, { useEffect } from 'react';
import styled from 'styled-components';

function renderFigure(elemId, figure, color, size, cellsCount, debug, withGrid) {
  const offset = 2;
  const padding = size / 10;
  const canvasElem = document.getElementById(elemId);
  const context = canvasElem.getContext("2d");
  const cellSize = (size - padding * 2) / cellsCount;

  context.clearRect(0, 0, canvasElem.width, canvasElem.height);

  const renderBlocks = (blocks, color) => {
    if (!blocks) {
      return;
    }
    const innerBlockPadding = cellSize / 10;
    blocks.forEach((block) => {
      const xReal = ((offset + block.x) * cellSize) + padding + 1;
      const yReal = ((offset + block.y) * cellSize) + padding + 1;
      context.fillStyle = color;
      context.fillRect(xReal, yReal, cellSize - 2, cellSize - 2);
      context.fillStyle = 'rgba(0,0,0,0.3)'
      context.fillRect(
        xReal + innerBlockPadding,
        yReal + innerBlockPadding,
        cellSize - innerBlockPadding * 2 - 2,
        cellSize - innerBlockPadding * 2 - 2);
    });
    
    // context.fillStyle = 'black';
    // let prevCoords = null;
    // for (let i = 0; i < figure.chains.length; i += 1) {
    //   const chain = figure.chains[i];
    //   const xReal = ((offset + chain.x) * cellSize) + padding + 1 + cellSize / 2;
    //   const yReal = ((offset + chain.y) * cellSize) + padding + 1 + cellSize / 2;

    //   if (prevCoords !== null) {
    //     context.moveTo(prevCoords.x, prevCoords.y);
    //     context.lineTo(xReal, yReal);
    //   }
    //   prevCoords = {
    //     x: xReal,
    //     y: yReal,
    //   };
    // }
  };

  // if (withGrid) {
  //   for (let x = cellSize - 4; x <= size; x += cellSize) {
  //     context.moveTo(x, 0);
  //     context.lineTo(x, size);
  
  //     context.moveTo(0, x);
  //     context.lineTo(size, x);
  //   }
  //   context.strokeStyle = "#9E9E9E";
  //   context.stroke();
  // }

  renderBlocks(figure.blocks, color);
  if (debug) {
    renderBlocks(figure.chains, 'green');
    renderBlocks(figure.spaces, 'red');
  }
}

export default function Figure(props) {
  const { id, figure, color, size, debug, withGrid } = props;
  const cellsCount = 5;

  useEffect(
    () => renderFigure(id, figure, color, size, cellsCount, debug, withGrid),
    [ figure ]
  );

  if (!figure) {
    return null;
  }

  return (
    <Canvas
      id={id}
      width={size}
      height={size}
    />
  );
}

const Canvas = styled.canvas`
  margin: 0;
  padding: 0;
`;
