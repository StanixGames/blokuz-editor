import { generateInitFigures } from '../../utils/Figure';
import { PLAYER_ONE, PLAYER_TWO } from '../../const';

const types = {
  PLAYER_SET_TURN: 'PLAYER_SET_TURN',
  FIGURE_SET_ACTIVE: 'FIGURE_SET_ACTIVE',
  FIGURE_SET_SCHEMA: 'FIGURE_SET_SCHEMA',
};

const actions = {
  setTurn: (player) => ({ type: types.PLAYER_SET_TURN, player }),
  setActiveFigure: (figure) => ({ type: types.FIGURE_SET_ACTIVE, figure }),
  setFigureSchema: (player, figureId, newSchema) =>
    ({ type: types.FIGURE_SET_SCHEMA, player, figureId, newSchema }),
};

const initState = {
  turn: PLAYER_ONE,
  activeFigure: null,
  player1: {
    name: 'Player 1',
    color: '#5eba1c',
    figures: generateInitFigures('3'),
  },
  player2: {
    name: 'Player 2',
    color: '#1c95ba',
    figures: generateInitFigures('2'),
  },
};

function reducer(state = initState, action) {
  switch (action.type) {
    case types.PLAYER_SET_TURN: {
      return {
        ...state,
        turn: action.turn,
      };
    }
    case types.FIGURE_SET_ACTIVE: {
      return {
        ...state,
        activeFigure: action.figure,
      };
    }
    case types.FIGURE_SET_SCHEMA: {
      const player = action.player === PLAYER_ONE ? 'player1' : 'player2';
      const newFigures = [];
      let targetFigure = null;
      let targetFigureIndex = 0;
      state[player].figures.forEach((figure, index) => {
        if (figure.id !== action.figureId) {
          newFigures.push(figure);
        } else {
          targetFigureIndex = index;
          targetFigure = {
            ...figure,
            schema: action.newSchema,
          };
        }
      });
      newFigures.splice(targetFigureIndex, 0, targetFigure);

      return {
        ...state,
        [player]: {
          ...state[player],
          figures: newFigures,
        },
      }
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