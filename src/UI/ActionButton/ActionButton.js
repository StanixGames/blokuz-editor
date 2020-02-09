import styled from 'styled-components';

const ActionButton = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex: 1;
  min-width: 200px;
  max-width: 200px;
  min-height: 60px;
  max-height: 60px;
  border-radius: 30px;
  background-color: rgba(255,255,255,0.2);
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    background-color: rgba(255,255,255,0.4);
    transition: 0.2s;
  }
`;

export default ActionButton;

