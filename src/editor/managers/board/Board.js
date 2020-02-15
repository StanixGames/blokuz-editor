const generateCells = (size) => new Array(size).fill('0').map(() =>
  new Array(size).fill('0')
);

class BoardManager {
  editor = null;
  cells = null;
  
  constructor(editor) {
    this.editor = editor;
    this.cells = generateCells(editor.BOARD_CELLS); 
  }

  init = () => {
    
  }

  getCells = () => {
    return this.cells;
  }

  destroy = () => {
    this.cells = null;
  }
}

export default BoardManager;
