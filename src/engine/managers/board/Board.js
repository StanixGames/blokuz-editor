import store from '../../../store';
import { PLAYER_ONE, PLAYER_TWO } from '../../../const';
import game from '../../../store/ducks/game';
import board from '../../../store/ducks/board';

class BoardManager {
  engine = null;
  cells = null;
  previewFigure = null;
  
  constructor(engine) {
    this.engine = engine;
  }

  init = () => {
    this.storeUnsubscribe = store.subscribe(() => {
      this.handleStateChange(store.getState());
    });
  }

  handleStateChange = (state) => {
    this.state = state;
    const { cells } = state.board;
    if (this.cells !== cells) {
      this.cells = cells;
    }
  }

  getCells = () => {
    return this.cells;
  }

  getPreviewFigure = () => {
    return this.previewFigure;
  }

  destroy = () => {
    if (this.storeUnsubscribe) {
      this.storeUnsubscribe();
    }
  }
}

export default BoardManager;
