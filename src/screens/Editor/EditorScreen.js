import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import editor from '../../editor';
import Instrument from './components/Instrument';

export default function EditorScreen() {
  const [ mode, setMode ] = useState(null);
  
  const setEditMode = useCallback((mode) => {
    setMode(mode);
    editor.setMode(mode);
  }, [ setMode ]);

  useEffect(() => {
    editor.init();
    setEditMode(editor.MODE_DRAW);

    return () => {
      editor.destroy();
    }
  }, []);
  const startDrawModeHandler = useCallback(
    () => setEditMode(editor.MODE_DRAW),
    [ setMode ]
  );
  const startChainModeHandler = useCallback(
    () => setEditMode(editor.MODE_CHAIN),
    [ setMode ]
  );
  const startSpaceModeHandler = useCallback(
    () => setEditMode(editor.MODE_SPACE),
    [ setMode ]
  );

  return (
    <Wrapper>
      <LeftPanel>
        <Section>
          <TitleLabel>Instruments</TitleLabel>
        </Section>
          <InstrumentsContainer>
            <Instrument
              color="blue"
              onClick={startDrawModeHandler}
              selected={mode === editor.MODE_DRAW}
            />
            <Instrument
              color="rgba(0,255,0,0.4)"
              onClick={startChainModeHandler}
              selected={mode === editor.MODE_CHAIN}
            />
            <Instrument
              color="rgba(255,0,0,0.4)"
              onClick={startSpaceModeHandler}
              selected={mode === editor.MODE_SPACE}
            />
          </InstrumentsContainer>
      </LeftPanel>
      <BoardPanel id="board" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: #1b6152;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;

const LeftPanel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 4px;
`;

const BoardPanel = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  margin: 4px;
  background-color: rgba(255,255,255,0.1);
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;

const TitleLabel = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 22px;
  color: rgba(255,255,255,0.8);
`;

const InstrumentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 10px;
`;
