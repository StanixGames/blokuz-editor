import React, { useEffect } from 'react';
import styled from 'styled-components';

function renderGrid(wrapperId) {
  const wrapperElem = document.getElementById(wrapperId);
  const canvasElem = document.createElement('canvas');
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvasElem.id = `${wrapperId}-canvas`;
  canvasElem.width = width;
  canvasElem.height = height;
  canvasElem.style.width = `${width}px`;
  canvasElem.style.height = `${height}px`;
  canvasElem.style.position = 'absolute';
  canvasElem.style.left = '0px';
  canvasElem.style.top = '0px';
  wrapperElem.appendChild(canvasElem);

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

export default function BackgroundGrid({ children }) {
  const wrapperId = 'bg-grid';

  useEffect(
    () => renderGrid(wrapperId),
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

