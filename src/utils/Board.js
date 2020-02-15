const BOARD_SIZE = 14;

const createEmptyArray = () => new Array(BOARD_SIZE).fill('0');

export function generateInitCells() {
  const cells = createEmptyArray().map(createEmptyArray);
  cells[0][0] = 'a';
  cells[cells.length - 1][cells[0].length - 1] = 'b';
  return cells;
}

export function isCanPlaceOnBoard(cells, figure, padX, padY) {
  const getCellSafety = (x, y) => {
    if (x < 0 || x > cells.length - 1 || y < 0 || y > cells[0].length) {
      return null;
    }
    return cells[x][y];
  }

  if (padX + figure.bounds.min.x < 0 || padX + figure.bounds.max.x > BOARD_SIZE - 1) {
    return false;
  }
  if (padY + figure.bounds.min.y < 0 || padY + figure.bounds.max.y > BOARD_SIZE - 1) {
    return false;
  }

  let canPlace = true;

  figure.blocks.forEach((block) => {
    const { x, y } = block;

    if (getCellSafety(padX + x, padY + y) !== '0') {
      canPlace = false;
    }
  });

  let atLeastOnEdgeConnected = false;

  figure.edges.forEach((edge) => {
    const { mask, x, y } = figure.blocks[edge.block];
    
    edge.vectors.forEach((vector) => {
      const cell = getCellSafety(padX + x + vector.x, padY + y + vector.y);
      if (cell === mask) {
        atLeastOnEdgeConnected = true;
      }
    });
  });

  figure.spaces.forEach((space) => {
    const { mask, x, y } = figure.blocks[space.block];

    space.vectors.forEach((vector) => {
      const cell = getCellSafety(padX + x + vector.x, padY + y + vector.y);
      if (cell === mask) {
        canPlace = false;
      }
    });
  });

  if (!atLeastOnEdgeConnected) {
    canPlace = false;
  }

  return canPlace;
}

export default null;
