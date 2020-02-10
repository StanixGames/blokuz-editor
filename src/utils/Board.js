const BOARD_SIZE = 14;

const createEmptyArray = () => new Array(BOARD_SIZE).fill(null);

export function generateInitCells() {
  return createEmptyArray().map(createEmptyArray);
}

export default null;
