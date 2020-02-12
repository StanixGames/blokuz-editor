const BOARD_SIZE = 14;

const createEmptyArray = () => new Array(BOARD_SIZE).fill('0');

export function generateInitCells() {
  return createEmptyArray().map(createEmptyArray);
}

export function isCanPlaceOnBoard(cells, schema2D, centerX, centerY) {
  if (centerX < 3 || centerY < 3 || centerX > BOARD_SIZE - 2 || centerY > BOARD_SIZE - 2) {
    return false;
  }
  for (let y = 0; y < 5; y += 1) {
    for (let x = 0; x < 5; x += 1) {
      const boardX = centerX - 3 + x;
      const boardY = centerY - 3 + y;

      if (cells[boardX][boardY] !== '0' && schema2D[y][x] !== '0') {
        return false;
      }
    }
  }
  // for (let y = 0; y < 5; y += 1) {
  //   for (let x = 0; x < 5; x += 1) {
  //     const boardX = centerX - 2 + x;
  //     const boardY = centerY - 2 + y;
  //     if (schema2D[x][y] !== '0' && cells[boardX][boardY] !== '0') {
  //       return false;
  //     }
  //   }
  // }
  return true;
}

export default null;
