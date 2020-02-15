import StoreManager from './managers/store';
import RenderManager from './managers/render';
import ControlManager from './managers/control';
import BoardManager from './managers/board';
import { isCanPlaceOnBoard } from '../utils/Board';

class Engine {
  BOARD_CELLS = 14;

  sm = null;
  rm = null;
  cm = null;
  bm = null;

  constructor() {
    this.sm = new StoreManager(this);
    this.rm = new RenderManager(this);
    this.cm = new ControlManager(this);
    this.bm = new BoardManager(this);
  }

  initGame = () => {
    this.sm.init();
    this.rm.init();
    this.cm.init();
    this.bm.init();
  }

  mouseMove = (xPad, yPad) => {
    const figure = this.sm.activeFigure;
    const canPlace = this.canPlaceOnBoard(xPad, yPad);
    if (figure) {
      this.rm.renderPreviewFigure(figure, xPad, yPad, canPlace);
    }
  }

  mouseDown = (xPad, yPad) => {
    if (this.canPlaceOnBoard(xPad, yPad)) {
      this.sm.playerUseFigure();
      this.sm.placeOnBoard(xPad, yPad);
      this.sm.clearActiveFigure();
      this.sm.activateNextPlayer();
      this.rm.clearPreviewFigure();
      
      const cells = this.sm.getCells();
      const players = this.sm.getPlayers();
      this.rm.renderFigures(cells, players);
    }
  }

  canPlaceOnBoard = (xPad, yPad) => {
    const figure = this.sm.getActiveFigure();
    const cells = this.sm.getCells();

    if (!figure) {
      return false;
    }
    return isCanPlaceOnBoard(cells, figure, xPad, yPad);
  }

  changeActiveFigure = (method) => {
    if (method === 'flipX') {
      this.sm.flipXActiveFigure();
    } else if (method === 'flipY') {
      this.sm.flipYActiveFigure();
    } else if (method === 'rotate') {
      this.sm.rotateActiveFigure();
    }
  }

  destroyGame = () => {
    this.cm.destroy();
    this.rm.destroy();
    this.sm.destroy();
    this.bm.destroy();
  }
}

export default new Engine();
