import React from 'react';
import styled from 'styled-components';

function renderCells(figure, color, w, h, debug) {
  const offsetX = 0; //Math.abs(figure.bounds.min.x);
  const offsetY = 0; // Math.abs(figure.bounds.min.y);

  const chains = [];
  const blocks = figure.blocks.map((block) => {
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

  if (debug) {
    figure.edges.forEach((edge) => {
      const block = figure.blocks[edge.block];
      edge.vectors.forEach((vector) => {
        chains.push(
          <Cell
            color="rgba(255,0,0,0.2)"
            x={offsetX + block.x + vector.x}
            y={offsetY + block.y + vector.y}
            w={w}
            h={h}
          />
        );
      });
    });
    figure.spaces.forEach((space) => {
      const block = figure.blocks[space.block];
      space.vectors.forEach((vector) => {
        chains.push(
          <Cell
            color="rgba(0,255,0,0.2)"
            x={offsetX + block.x + vector.x}
            y={offsetY + block.y + vector.y}
            w={w}
            h={h}
          />
        );
      });
    });
  }

  return [...blocks, ...chains];
}

export default function Figure(props) {
  const { figure, color, blockSize, onClick, debug } = props;
  const w = 7; // Math.abs(figure.bounds.min.x) + Math.abs(figure.bounds.max.x) + 1;
  const h = 7; // Math.abs(figure.bounds.min.y) + Math.abs(figure.bounds.max.y) + 1;
console.log(figure);
  return (
    <Wrapper w={w} h={h} blockSize={blockSize} onClick={onClick}>
      {renderCells(figure, color, w, h, debug)}
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
