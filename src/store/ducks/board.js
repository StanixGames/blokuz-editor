import { generateInitCells } from '../../utils/Board';

const types = {
  BOARD_PLACE_FIGURE: 'BOARD_PLACE_FIGURE',
};

const actions = {
  placeFigure: (figure, centerX, centerY) =>
    ({ type: types.BOARD_PLACE_FIGURE, figure, centerX, centerY }),
};

const initState = {
  cells: generateInitCells(),
};

function patchCells(cells, chunk, centerX, centerY) {
  const newCells = cells.map((row) => row.map(it => it));
  // console.log(chunk);
  for (let y = 0; y < 5; y += 1) {
    for (let x = 0; x < 5; x += 1) {
      const boardX = centerX - 3 + x;
      const boardY = centerY - 3 + y;
      //TODO
      if (chunk[y][x] !== 0 && (boardX < 0 || boardY < 0 || boardX >= 14 || boardY >= 14)) {
        return;
      }
      newCells[boardX][boardY] = chunk[y][x];
    }
  }
  return newCells;
}

function reducer(state = initState, action) {
  switch (action.type) {
    case types.BOARD_PLACE_FIGURE: {
      return {
        ...state,
        cells: patchCells(state.cells, action.figure, action.centerX, action.centerY),
      };
    }
    default:
      return state;
  }
}

export default {
  types,
  actions,
  reducer,
};