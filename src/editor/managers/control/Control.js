class ControlManager {
  editor = null;
  xPad = -1;
  yPad = -1;
  
  constructor(editor) {
    this.editor = editor;
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
    const boardCellSize = this.editor.rm.boardSize / this.editor.BOARD_CELLS;
    const boardElem = document.getElementById('board-canvas');
    var rect = boardElem.getBoundingClientRect();
    var x = event.clientX - rect.left; //x position within the element.
    var y = event.clientY - rect.top;  //y position within the element.
    this.xPad = Math.floor(x / boardCellSize);
    this.yPad = Math.floor(y / boardCellSize);

    this.editor.mouseMove(this.xPad, this.yPad);
  }

  mouseDown = (event) => {
    this.editor.mouseDown(this.xPad, this.yPad);
  }
  
  destroy = () => {
    const boardElem = document.getElementById('board-canvas');
    boardElem.removeEventListener('mousemove');
    boardElem.removeEventListener('mousedown');
  }
}

export default ControlManager;
