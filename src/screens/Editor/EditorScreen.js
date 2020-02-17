import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import editor from '../../editor';
import Instrument from './components/Instrument';
import FigureControlButton from '../../UI/FigureControlButton';

export default function EditorScreen() {
  const [ mode, setMode ] = useState(null);
  // const cellsState = useState(initCells);
  
  const setEditMode = useCallback((mode) => {
    setMode(mode);
    editor.setMode(mode);
    // editor.setCellsState(cellsState);
  }, [ setMode ]);

  useEffect(() => {
    editor.init();
    // editor.setCellsState(cellsState);
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
  const startClearModeHandler = useCallback(
    () => setEditMode(editor.MODE_CLEAR),
    [ setMode ]
  );
  const copyJSONHandler = useCallback(
    () => {
      const outputElem = document.getElementById("figure-output");
      outputElem.select();
      outputElem.setSelectionRange(0, 99999); /*For mobile devices*/
      document.execCommand("copy");
      alert('Copied Figure JSOn to clipboard.');
    },
    []
  );
  const clearJSONHandler = useCallback(
    () => editor.clearCanvas(),
    [ editor ]
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
          <Instrument
            color="rgba(255,255,255,0.8)"
            onClick={startClearModeHandler}
            selected={mode === editor.MODE_CLEAR}
          />
        </InstrumentsContainer>
        <Section>
          <TitleLabel>Figure output</TitleLabel>
        </Section>
        <TextArea id="figure-output" readOnly />
        <ActionButtonsContainer>
          <FigureControlButton onClick={copyJSONHandler}>
            Copy
          </FigureControlButton>
          <FigureControlButton onClick={clearJSONHandler}>
            Clear
          </FigureControlButton>
        </ActionButtonsContainer>
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
  width: 50vw;
  flex-direction: column;
  margin: 4px;
  max-width: 500px;
  padding-left: 15px;
  padding-right: 15px;
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
  margin-bottom: 30px;
`;

const TextArea = styled.textarea`
  background-color: rgba(255,255,255,0.2);
  padding: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border: none;
  overflow: scroll;
  resize: none;
  height: 30vh;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
  padding-top: 10px;
`;