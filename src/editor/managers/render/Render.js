function createCanvas(newElemId, size) {
  const canvasElem = document.createElement('canvas');
  canvasElem.id = newElemId;
  canvasElem.width = size;
  canvasElem.height = size;
  canvasElem.style.width = `${size}px`;
  canvasElem.style.height = `${size}px`;
  canvasElem.style.position = 'absolute';
  canvasElem.style.left = '0px';
  canvasElem.style.top = '0px';

  return canvasElem;
}

class RenderManager {
  editor = null;
  boardSize = 100;
  prevPreviewXPad = -1;
  prevPreviewYPad = -1;
  colors = null;

  constructor(editor) {
    this.editor = editor;
    this.colors = {
      [editor.BLOCK_TYPE_BODY]: 'blue',
      [editor.BLOCK_TYPE_CHAIN]: 'green',
      [editor.BLOCK_TYPE_SPACE]: 'red',
    };
  }

  init = () => {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    const boardElem = document.getElementById('board');
    const containerElem = document.createElement('div');
    containerElem.id = 'board-canvas';
    containerElem.style.width = `${this.boardSize}px`;
    containerElem.style.height = `${this.boardSize}px`;
    containerElem.style.position = 'relative';
    containerElem.style.backgroundColor = '#F3F3F3';
    boardElem.appendChild(containerElem);

    // Figure
    const figuresElem = createCanvas('figure', this.boardSize);
    containerElem.appendChild(figuresElem);

    // Grid
    const gridElem = createCanvas('grid', this.boardSize);
    containerElem.appendChild(gridElem);

    const gridCtx = gridElem.getContext("2d");
    const cellSize = this.boardSize / this.editor.BOARD_CELLS;

    gridCtx.clearRect(0, 0, gridElem.width, gridElem.height);

    for (let x = cellSize; x <= this.boardSize; x += cellSize) {
      gridCtx.moveTo(x, 0);
      gridCtx.lineTo(x, this.boardSize);

      gridCtx.moveTo(0, x);
      gridCtx.lineTo(this.boardSize, x);
    }

    gridCtx.strokeStyle = "#D2D2D2";
    gridCtx.stroke();

    // preview
    const previewElem = createCanvas('preview', this.boardSize);
    containerElem.appendChild(previewElem);
  }

  resize = () => {
    const boardElem = document.getElementById('board');
    const boardContainerWidth = boardElem.offsetWidth;
    const boardContainerHeight = boardElem.offsetHeight;
    let boardSize = boardContainerHeight;

    if (boardContainerWidth < boardContainerHeight) {
      boardSize = boardContainerWidth;
    }

    this.boardSize = boardSize / 2;
  }

  renderPreview = (xPad, yPad) => {
    const previewElem = document.getElementById("preview");
    
    const context = previewElem.getContext("2d");
    const boardCellSize = this.boardSize / this.editor.BOARD_CELLS;

    context.fillStyle = 'rgba(0,0,0,0.2)';
    context.clearRect(0, 0, previewElem.width, previewElem.height);

    const size = boardCellSize - 2;
    const xReal = (xPad * boardCellSize) + 1;
    const yReal = (yPad * boardCellSize) + 1;
    context.fillRect(xReal, yReal, size, size);
  }

  renderFigure = (cells) => {
    if (!cells) {
      return;
    }

    const figureElem = document.getElementById("figure");
    
    const context = figureElem.getContext("2d");
    const boardCellSize = this.boardSize / this.editor.BOARD_CELLS;

    context.clearRect(0, 0, figureElem.width, figureElem.height);

    for (let yPad = 0; yPad < this.editor.BOARD_CELLS; yPad += 1) {
      for (let xPad = 0; xPad < this.editor.BOARD_CELLS; xPad += 1) {
        const cell = cells[xPad][yPad];
        if (cell !== '0') {
          const x = (xPad * boardCellSize) + 1;
          const y = (yPad * boardCellSize) + 1;
          const size = boardCellSize - 2;
          context.fillStyle = this.colors[cell];
          context.fillRect(x, y, size, size);
        }
      } 
    }
  }

  clearPreviewFigure = () => {
  }

  destroy = () => {
    window.removeEventListener('resize');
  }
}

export default RenderManager;
