import styled from 'styled-components';

const ActionButton = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex: 1;
  color: #fff;
  min-width: 200px;
  max-width: 200px;
  min-height: 60px;
  max-height: 60px;
  border-radius: 30px;
  background-color: #1f5078;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: #08243b;
    transition: 0.2s;
  }
  margin-bottom: 10px;
`;

export default ActionButton;

