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
  engine = null;
  boardSize = 100;
  prevPreviewXPad = -1;
  prevPreviewYPad = -1;

  constructor(engine) {
    this.engine = engine;
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

    // Figures
    const figuresElem = createCanvas('figures', this.boardSize);
    containerElem.appendChild(figuresElem);

    // Grid
    const gridElem = createCanvas('grid', this.boardSize);
    containerElem.appendChild(gridElem);

    const gridCtx = gridElem.getContext("2d");
    const cellSize = this.boardSize / this.engine.BOARD_CELLS;

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

    this.boardSize = boardSize - 20;
  }

  renderPreviewFigure = (figure, xPad, yPad, canPlace) => {
    if (this.prevPreviewXPad === xPad && this.prevPreviewYPad === yPad) {
      return;
    }

    this.prevPreviewXPad = xPad;
    this.prevPreviewYPad = yPad;

    const previewElem = document.getElementById("preview");
    
    const context = previewElem.getContext("2d");
    const boardCellSize = this.boardSize / this.engine.BOARD_CELLS;

    context.fillStyle = canPlace ? figure.color : 'rgba(0,0,0,0.2)';
    context.clearRect(0, 0, previewElem.width, previewElem.height);

    let safeXPad = xPad;
    let safeYPad = yPad;

    if (xPad + figure.bounds.min.x < 0) {
      safeXPad = xPad - (xPad + figure.bounds.min.x);
    }
    if (xPad + figure.bounds.max.x > this.engine.BOARD_CELLS - 2) {
      safeXPad = xPad - ((xPad + figure.bounds.max.x) - this.engine.BOARD_CELLS) - 1;
    }
    if (yPad + figure.bounds.min.y < 0) {
      safeYPad = yPad - (yPad + figure.bounds.min.y);
    }
    if (yPad + figure.bounds.max.y > this.engine.BOARD_CELLS - 2) {
      safeYPad = yPad - ((yPad + figure.bounds.max.y) - this.engine.BOARD_CELLS) - 1;
    }

    figure.blocks.forEach((block) => {
      const xReal = ((safeXPad + block.x) * boardCellSize) + 1;
      const yReal = ((safeYPad + block.y) * boardCellSize) + 1;
      const size = boardCellSize - 2;
      context.fillRect(xReal, yReal, size, size);
    });
  }

  renderFigures = (cells, players) => {
    if (!cells || !players) {
      return;
    }

    const figuresElem = document.getElementById("figures");
    
    const context = figuresElem.getContext("2d");
    const boardCellSize = this.boardSize / this.engine.BOARD_CELLS;

    context.clearRect(0, 0, figuresElem.width, figuresElem.height);

    const colors = new Map();
    players.forEach((player) => {
      colors.set(player.mask, player.color);
    });

    for (let yPad = 0; yPad < this.engine.BOARD_CELLS; yPad += 1) {
      for (let xPad = 0; xPad < this.engine.BOARD_CELLS; xPad += 1) {
        const cellMask = cells[xPad][yPad];
        if (cellMask !== '0') {
          const x = (xPad * boardCellSize) + 1;
          const y = (yPad * boardCellSize) + 1;
          const size = boardCellSize - 2;
          context.fillStyle = colors.get(cellMask);
          context.fillRect(x, y, size, size);
        }
      } 
    }
  }

  clearPreviewFigure = () => {
    const previewElem = document.getElementById("preview");
    const context = previewElem.getContext("2d");
    context.clearRect(0, 0, previewElem.width, previewElem.height);
  }

  destroy = () => {
    window.removeEventListener('resize');
  }
}

export default RenderManager;
