class ControlManager {
  engine = null;
  
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
    const xPad = Math.ceil(x / boardCellSize);
    const yPad = Math.ceil(y / boardCellSize);

    this.engine.mouseMove(xPad, yPad);
  }

  mouseDown = (event) => {
    console.log(event);
  }
  
  destroy = () => {
    const boardElem = document.getElementById('board-canvas');
    boardElem.removeEventListener('mousemove');
    boardElem.removeEventListener('mousedown');
  }
}

export default ControlManager;
