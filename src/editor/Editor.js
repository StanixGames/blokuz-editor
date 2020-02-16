import RenderManager from './managers/render';
import ControlManager from './managers/control';
import BoardManager from './managers/board';
import { generateFigureFromMatrix } from '../utils/Figure';

class Engine {
  BOARD_CELLS = 7;
  MODE_DRAW = 'MODE_DRAW';
  MODE_CHAIN = 'MODE_CHAIN';
  MODE_SPACE = 'MODE_SPACE';
  MODE_CLEAR = 'MODE_CLEAR';
  BLOCK_TYPE_NOTHING = '0';
  BLOCK_TYPE_BODY = '1';
  BLOCK_TYPE_CHAIN = '2';
  BLOCK_TYPE_SPACE = '3';

  rm = null;
  cm = null;
  bm = null;
  mode = null;
  chainedBlockId = null;

  constructor() {
    this.rm = new RenderManager(this);
    this.cm = new ControlManager(this);
    this.bm = new BoardManager(this);
  }

  init = () => {
    this.rm.init();
    this.cm.init();
    this.bm.init();
  }

  mouseMove = (xPad, yPad) => {
    if (this.mode) {
      this.rm.renderPreview(xPad, yPad);
    }
  }

  mouseDown = (xPad, yPad) => {
    if (!this.mode) {
      return;
    }

    let nextCells = this.bm.getCells();

    // if (this.mode === this.MODE_CHAIN) {
    //   if (!this.chainedBlockId) {
    //     const block = this.bm.getCells()[xPad][yPad];
    //     this.chainedBlockId = block.id;
    //   } else {
    //     const meta = {
    //       chainedBlockId: this.chainedBlockId,
    //     };
    //     this.chainedBlockId = null;
    //     nextCells = this.bm.placeBlock(xPad, yPad, this.mode, meta);
    //     this.rm.renderFigure(nextCells);
    //   }
    // } else {
      // }
      // const offset = Math.floor(this.BOARD_CELLS / 2);
      // console.log(xPad - offset, yPad - offset);

    nextCells = this.bm.placeBlock(xPad, yPad, this.mode);
    this.rm.renderFigure(nextCells);
    this.printOutput(nextCells, xPad, yPad);
  }

  setMode = (mode) => {
    this.mode = mode;
  }

  printOutput = (cells, xPad, yPad) => {
    const figure = generateFigureFromMatrix(cells, xPad, yPad);
    const textareaElem = document.getElementById('figure-output');
    textareaElem.innerText = JSON.stringify(figure);
  }

  startDrawMode = () => {
    this.mode = this.MODE_DRAW;
  }

  startChainMode = () => {
    this.mode = this.MODE_CHAIN;
  }

  startSpaceMode = () => {
    this.mode = this.MODE_SPACE;
  }

  // generateInitCells = () => {
  //   console.log('generate call')
  //   return this.bm.generateInitCells(this.BOARD_CELLS);
  // }

  destroy = () => {
    this.cm.destroy();
    this.rm.destroy();
    this.bm.destroy();
  }
}

export default new Engine();
