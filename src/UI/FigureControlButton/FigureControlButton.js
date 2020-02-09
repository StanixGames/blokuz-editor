import styled from 'styled-components';

const ActionButton = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex: 1;
  min-width: 80px;
  max-width: 80px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 20px;
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
  margin: 10px 4px;
`;

export default ActionButton;

