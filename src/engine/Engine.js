import RenderManager from './managers/render';
import ControlManager from './managers/control';

class Engine {
  BOARD_CELLS = 14;

  rm = null;
  cm = null;

  constructor() {
    this.rm = new RenderManager(this);
    this.cm = new ControlManager(this);
  }

  initGame = () => {
    this.rm.init();
    this.cm.init();
  }

  mouseMove = (xPad, yPad) => {
    const figure = {
      color: 'red',
      bounds: {
        min: { x: -2, y: -2 },
        max: { x: 0, y: 2 },
      },
      schema: [
        { mask: '1', x: -2, y: -2 },
        { mask: '1', x: 0, y: 1 },
        { mask: '1', x: 0, y: 2 },
      ],
    };

    this.rm.renderPreviewFigure(figure, xPad, yPad);
  }

  destroyGame = () => {
    this.cm.destroy();
    this.rm.destroy();
  }
}

export default new Engine();
