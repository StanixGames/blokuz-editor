import React from 'react';
import styled from 'styled-components';

function renderCells(figure, color, w, h) {
  const offsetX = Math.abs(figure.bounds.min.x);
  const offsetY = Math.abs(figure.bounds.min.y);

  return figure.blocks.map((block) => {
    return (
      <Cell
        color={color}
        x={offsetX + block.x}
        y={offsetY + block.y}
        w={w}
        h={h}
      />
    );
  });
}

export default function Figure(props) {
  const { figure, color, blockSize, onClick } = props;
  const w = Math.abs(figure.bounds.min.x) + Math.abs(figure.bounds.max.x) + 1;
  const h = Math.abs(figure.bounds.min.y) + Math.abs(figure.bounds.max.y) + 1;

  return (
    <Wrapper w={w} h={h} blockSize={blockSize} onClick={onClick}>
      {renderCells(figure, color, w, h)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
  ${({ w, h, blockSize }) => (`
    width: ${w * blockSize}px;
    height: ${h * blockSize}px;
  `)}
  position: relative;
`;

const Cell = styled.div`
  display: block;
  position: absolute;
  ${({ x, y, color, w, h }) => (`
    width: ${100 / w}%;
    height: ${100 / h}%;
    background-color: ${color};
    border: 1px solid rgba(0,0,0,0.4);
    box-sizing: border-box;
    left: ${x * 100 / w}%;
    top: ${y * 100 / h}%;
  `)}
`;
