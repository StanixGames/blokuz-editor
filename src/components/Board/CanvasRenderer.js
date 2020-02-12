import React from 'react';
import { to2DArray } from '../../utils/Figure';
import { isCanPlaceOnBoard } from '../../utils/Board';
import styles from './styles';

const BOARD_CELLS = 14;

class CanvasRenderer {
  boardSize = 100;
  canvasElem = null;
  figure = null;
  color = 'gray';
  prevXPad = -1;
  prevYPad = -1;
  cells = null;
  placeFigureHandler = null;

  recalculate = () => {
    const boardElem = document.getElementById('board');
    const boardContainerWidth = boardElem.offsetWidth;
    const boardContainerHeight = boardElem.offsetHeight;
    let boardSize = boardContainerHeight;

    if (boardContainerWidth < boardContainerHeight) {
      boardSize = boardContainerWidth;
    }

    boardSize -= 20;

    // const cellSize = (boardSize - 28) / 14;

    // setBoardSize(boardSize - 20);
    // setCellSize(cellSize);

    this.boardSize = boardSize;
    // canvasRenderer.renderGrid();
  }

  init = () => {
    
  }

  cleanUp = () => {
    
  }

  setBoardSize = (boardSize) => {
    this.boardSize = boardSize;
  }

  setFigure = (figure) => {
    this.figure = figure;
  }

  setCells = (cells) => {
    this.cells = cells;
    this.renderFigures();
  }

  setColor = (color) => {
    this.color = color;
  }

  onPlaceFigure = (placeFigureHandler) => {
    this.placeFigureHandler = placeFigureHandler;
  }

  mouseMove = (e) => {
    const boardCellSize = this.boardSize / BOARD_CELLS;
    const boardElem = document.getElementById('preview');
    var rect = boardElem.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    const xPad = Math.ceil(x / boardCellSize);
    const yPad = Math.ceil(y / boardCellSize);
    // console.log(xPad, yPad);

    this.prevXPad = xPad;
    this.prevYPad = yPad;

    this.renderPreviewFigure(xPad, yPad);
  }

  mouseDown = () => {
    if (!this.figure || !this.cells || !this.placeFigureHandler) {
      return;
    }

    const { schema } = this.figure;
    const schema2D = to2DArray(schema);

    if (!isCanPlaceOnBoard(this.cells, schema2D, this.prevXPad, this.prevYPad)) {
      return;
    }
    this.placeFigureHandler(schema2D, this.prevXPad, this.prevYPad);
    // const previewElem = document.getElementById("figures");
    
    // const context = previewElem.getContext("2d");
    // const boardCellSize = this.boardSize / BOARD_CELLS;

    // context.fillStyle = this.color;


    // for (let i = 0; i < schema.length; i += 1) {
    //   if (schema[i] !== '0') {
    //     const xOffset = i % 5;
    //     const yOffset = Math.floor(i / 5);
    //     const x = ((this.prevXPad + xOffset - 3) * boardCellSize) + 1;
    //     const y = ((this.prevYPad + yOffset - 3) * boardCellSize) + 1;
    //     const size = boardCellSize - 2;
    //     context.fillRect(x, y, size, size);
    //   }
    // }
  }

  renderGrid = () => {
    const canvasElem = document.getElementById("canvas");
    
    const context = canvasElem.getContext("2d");
    const boardCellSize = this.boardSize / BOARD_CELLS;

    context.clearRect(0, 0, canvasElem.width, canvasElem.height);

    for (let x = boardCellSize; x <= this.boardSize; x += boardCellSize) {
      context.moveTo(x, 0);
      context.lineTo(x, this.boardSize);

      context.moveTo(0, x);
      context.lineTo(this.boardSize, x);
    }

    context.strokeStyle = "#D2D2D2";
    context.stroke();
  }

  renderFigures = () => {
    if (!this.cells) {
      return;
    }

    const figuresElem = document.getElementById("figures");
    
    const context = figuresElem.getContext("2d");
    const boardCellSize = this.boardSize / BOARD_CELLS;

    for (let yPad = 0; yPad < BOARD_CELLS; yPad += 1) {
      for (let xPad = 0; xPad < BOARD_CELLS; xPad += 1) {
        const cellMask = this.cells[xPad][yPad];
        if (cellMask !== '0') {
          const x = (xPad * boardCellSize) + 1;
          const y = (yPad * boardCellSize) + 1;
          const size = boardCellSize - 2;
          context.fillStyle = this.color;
          context.fillRect(x, y, size, size);
        }
      } 
    }
  }

  renderPreviewFigure = (xPad, yPad) => {
    if (!this.figure) {
      return;
    }

    const previewElem = document.getElementById("preview");
    
    const context = previewElem.getContext("2d");
    const boardCellSize = this.boardSize / BOARD_CELLS;

    context.fillStyle = this.color;
    context.clearRect(0, 0, previewElem.width, previewElem.height);

    const { schema } = this.figure;
    const schema2D = to2DArray(schema);

    schema2D.forEach((row, y) => {
      row.forEach((f, x) => {
        if (f !== '0') {
          const xReal = ((xPad + x - 3) * boardCellSize) + 1;
          const yReal = ((yPad + y - 3) * boardCellSize) + 1;
          const size = boardCellSize - 2;
          context.fillRect(xReal, yReal, size, size);
        }
      });
    });
  }

  render() {
    requestAnimationFrame(this.renderGrid);

    return (
      <div style={{
        width: this.boardSize,
        height: this.boardSize,
        position: 'relative',
      }}>
        <canvas
          id="canvas"
          width={this.boardSize}
          height={this.boardSize}
          style={styles.canvas}
        />
        <canvas
          id="figures"
          width={this.boardSize}
          height={this.boardSize}
          style={styles.figures}
        />
        <canvas
          id="preview"
          width={this.boardSize}
          height={this.boardSize}
          style={styles.preview}
        />
      </div>
    );
  }
}

export default new CanvasRenderer();
