import RenderManager from './managers/render';
import ControlManager from './managers/control';
import BoardManager from './managers/board';

class Engine {
  BOARD_CELLS = 7;
  MODE_DRAW = 'MODE_DRAW';
  MODE_CHAIN = 'MODE_CHAIN';
  MODE_SPACE = 'MODE_SPACE';

  rm = null;
  cm = null;
  bm = null;
  mode = null;

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
    const offset = Math.floor(this.BOARD_CELLS / 2);
    console.log(xPad - offset, yPad - offset);
  }

  setMode = (mode) => {
    this.mode = mode;
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

  destroy = () => {
    this.cm.destroy();
    this.rm.destroy();
    this.bm.destroy();
  }
}

export default new Engine();
