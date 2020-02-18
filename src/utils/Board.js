const BOARD_SIZE = 14;

const createEmptyArray = () => new Array(BOARD_SIZE).fill('0');

export function generateInitCells() {
  const cells = createEmptyArray().map(createEmptyArray);
  cells[0][0] = 'a';
  cells[cells.length - 1][cells[0].length - 1] = 'b';
  return cells;
}

export function isCanPlaceOnBoard(cells, figure, padX, padY, player) {
  const getCellSafety = (x, y) => {
    if (x < 0 || x > cells.length - 1 || y < 0 || y > cells[0].length) {
      return null;
    }
    return cells[x][y];
  }

  const { mask } = figure;

  for (let i = 0; i < figure.blocks.length; i += 1) {
    const block = figure.blocks[i];
    const xx = padX + block.x;
    const yy = padY + block.y;
    const cellMask = getCellSafety(xx, yy);
    if (cellMask === '0') {
      // TODO
    } else {
      return false;
    }
  }

  for (let i = 0; i < figure.spaces.length; i += 1) {
    const space = figure.spaces[i];
    const cellMask = getCellSafety(padX + space.x, padY + space.y);
    if (cellMask === mask) {
      // Can't place near to own color
      return false;
    }
  }

  let atLeastOnEdgeConnected = false;

  for (let i = 0; i < figure.chains.length; i += 1) {
    const chain = figure.chains[i];
    const xx = padX + chain.x;
    const yy = padY + chain.y;
    const cellMask = getCellSafety(xx, yy);

    if (cellMask === mask) {
      atLeastOnEdgeConnected = true;
      break;
    }
  }

  return atLeastOnEdgeConnected;
}

export default null;
