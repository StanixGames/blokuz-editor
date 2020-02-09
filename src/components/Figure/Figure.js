import React from 'react';
import styled from 'styled-components';

function renderCells(schema, color) {
  const cells = schema.split('');
  return cells.map((cell) => (
    <Cell color={color} hide={cell === '0'} />
  ));
}

export default function Figure(props) {
  const { schema, color, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      {renderCells(schema, color)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  flex-wrap: wrap;
`;

const Cell = styled.div`
  display: block;
  width: 20%;
  height: 20%;
  ${({ hide, color }) => !hide
    ? `
      background-color: ${color};
      border: 1px solid rgba(0,0,0,0.4);
      box-sizing: border-box;
    `
    : `
      background-color: transparent;
    `
    }
`;
