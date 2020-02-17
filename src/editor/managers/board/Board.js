const copyCells = (cells) => cells.map((row) => [ ...row ]);

class BoardManager {
  editor = null;
  cells = null;
  setCells = null;
  
  constructor(editor) {
    this.editor = editor;
  }

  init = () => {
    this.cells = this.generateInitCells();
  }

  clearCells = () => {
    this.cells = this.generateInitCells();
    return this.cells;
  }

  generateInitCells = () => {
    const size = this.editor.BOARD_CELLS;
    const blockMask = this.editor.BLOCK_TYPE_NOTHING;
    return new Array(size)
      .fill(
        blockMask,
        // id: Math.random(), // TODO: change it
      )
      .map(() =>
        new Array(size).fill(
          blockMask,
          // id: Math.random() // TODO: change it
        )
      );
  }

  // setCellsState = (cellsState) => {
  //   const [ cells, setCells ] = cellsState;
  //   this.cells = cells;
  //   this.setCells = setCells;
  // }

  placeBlock = (xPad, yPad, mode, meta) => {
    // console.log(this.cells, this.setCells);
    if (!this.cells
      || xPad < 0 
      || yPad < 0 
      || xPad > this.cells.length - 1 
      || yPad > this.cells[0].length - 1
    ) {
      return;
    }

    const nextCells = copyCells(this.cells);

    if (mode === this.editor.MODE_DRAW) {
      nextCells[xPad][yPad] = this.editor.BLOCK_TYPE_BODY;
      //   mask: ,
      //   // id: nextCells[xPad][yPad].id,
      // };
    } else if (mode === this.editor.MODE_CHAIN) {
      nextCells[xPad][yPad] = this.editor.BLOCK_TYPE_CHAIN;
      //   // meta,
      // }
    } else if (mode === this.editor.MODE_SPACE) {
      nextCells[xPad][yPad] = this.editor.BLOCK_TYPE_SPACE;
    } else if (mode === this.editor.MODE_CLEAR) {
      nextCells[xPad][yPad] = this.editor.BLOCK_TYPE_NOTHING;
      // };
    }
    this.cells = nextCells;
    return this.cells;
  }

  getCells = () => {
    return this.cells;
  }

  destroy = () => {
    this.cells = null;
  }
}

export default BoardManager;
