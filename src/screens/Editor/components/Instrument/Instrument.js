import styled from 'styled-components';

const Instrument = styled.button`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex: 1;
  min-width: 60px;
  max-width: 60px;
  min-height: 60px;
  max-height: 60px;
  background-color: ${({ color }) => color || 'rgba(255,255,255,0.1)'};
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  font-size: 18px;
  box-sizing: border-box;
  &:hover {
    background-color: rgba(255,255,255,0.3);
    transition: 0.2s;
  }
  margin-bottom: 10px;
  margin-right: 10px;
  border: ${({ selected }) => selected ? '3px solid yellow' : '1px solid grey'};
  outline: none;
`;

export default Instrument;

