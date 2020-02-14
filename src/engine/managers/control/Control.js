class ControlManager {
  engine = null;
  xPad = -1;
  yPad = -1;
  
  constructor(engine) {
    this.engine = engine;
  }

  init = () => {
    const boardElem = document.getElementById('board-canvas');
    boardElem.addEventListener('mousemove', (e) => {
      e.preventDefault();
      this.mouseMove(e);
    }, true);
    boardElem.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.mouseDown();
    });
  }

  mouseMove = (event) => {
    const boardCellSize = this.engine.rm.boardSize / this.engine.BOARD_CELLS;
    const boardElem = document.getElementById('board-canvas');
    var rect = boardElem.getBoundingClientRect();
    var x = event.clientX - rect.left; //x position within the element.
    var y = event.clientY - rect.top;  //y position within the element.
    this.xPad = Math.floor(x / boardCellSize);
    this.yPad = Math.floor(y / boardCellSize);

    this.engine.mouseMove(this.xPad, this.yPad);
  }

  mouseDown = (event) => {
    this.engine.mouseDown(this.xPad, this.yPad);
  }
  
  destroy = () => {
    const boardElem = document.getElementById('board-canvas');
    boardElem.removeEventListener('mousemove');
    boardElem.removeEventListener('mousedown');
  }
}

export default ControlManager;
