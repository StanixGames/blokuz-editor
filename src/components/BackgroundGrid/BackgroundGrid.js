import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';

function createCanvas(newElemId, width, height) {
  const canvasElem = document.createElement('canvas');
  canvasElem.id = newElemId;
  canvasElem.width = width;
  canvasElem.height = height;
  canvasElem.style.width = `${width}px`;
  canvasElem.style.height = `${height}px`;
  canvasElem.style.position = 'absolute';
  canvasElem.style.left = '0px';
  canvasElem.style.top = '0px';

  return canvasElem;
}

function renderGrid(wrapperId) {
  const wrapperElem = document.getElementById(wrapperId);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const canvasElem = createCanvas(`${wrapperId}-canvas`, width, height);
  wrapperElem.appendChild(canvasElem);
  const blocksElem = createCanvas(`${wrapperId}-blocks`, width, height);
  blocksElem.style.opacity = '0.1';
  wrapperElem.appendChild(blocksElem);

  const gridCtx = canvasElem.getContext("2d");
  const cellSize = 50;

  gridCtx.clearRect(0, 0, canvasElem.width, canvasElem.height);

  for (let y = cellSize; y <= height; y += cellSize) {
    gridCtx.moveTo(0, y);
    gridCtx.lineTo(width, y);
  }

  for (let x = cellSize; x <= width; x += cellSize) {
    gridCtx.moveTo(x, 0);
    gridCtx.lineTo(x, height);
  }

  gridCtx.strokeStyle = "#D2D2D2";
  gridCtx.stroke();
}

let modeCounter = 0;

function putRandomBlocks(wrapperId) {
  const canvasElem = document.getElementById(`${wrapperId}-blocks`);
  const ctx = canvasElem.getContext("2d");
  const cellSize = 50;
  const maxXPad = Math.ceil(canvasElem.width / cellSize);
  const maxYPad = Math.ceil(canvasElem.height / cellSize);

  let counter = 0;
  let method = 'fillRect';
  if (modeCounter > 5) {
    method = 'clearRect';
    if (modeCounter > 10) {
      modeCounter = 0;
    }
  }
  while (counter < 50) {
    const xPad = Math.floor(Math.random() * maxXPad);
    const yPad = Math.floor(Math.random() * maxYPad);
    const color = Math.random() > 0.5 ? 'red' : 'blue';
    const xReal = xPad * cellSize;
    const yReal = yPad * cellSize;
    ctx.fillStyle = color;
    ctx[method](xReal, yReal, cellSize, cellSize);

    counter += 1;
  }

  modeCounter += 1;
}

export default function BackgroundGrid({ children }) {
  const wrapperId = 'bg-grid';

  useEffect(
    () => {
      renderGrid(wrapperId);
      const drawer = setInterval(
        () => putRandomBlocks(wrapperId),
        1000
      );
      
      return () => {
        clearInterval(drawer);
      }
    },
    []
  );
  return (
    <>
      <Container id={wrapperId} />
      <Container>{children}</Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

