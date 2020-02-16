import { generateInitCells } from '../../utils/Board';

const types = {
  BOARD_PLACE_FIGURE: 'BOARD_PLACE_FIGURE',
};

const actions = {
  placeFigure: (figure, padX, padY) =>
    ({ type: types.BOARD_PLACE_FIGURE, figure, padX, padY }),
};

const initState = {
  cells: generateInitCells(),
};

function patchCells(cells, figure, padX, padY) {
  const newCells = cells.map((row) => row.map(it => it));

  figure.blocks.forEach((block) => {
    newCells[padX + block.x][padY + block.y] = figure.mask;
  });

  return newCells;
}

function reducer(state = initState, action) {
  switch (action.type) {
    case types.BOARD_PLACE_FIGURE: {
      return {
        ...state,
        cells: patchCells(state.cells, action.figure, action.padX, action.padY),
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