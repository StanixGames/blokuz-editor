import { generateInitFigures } from '../../utils/Figure';
import { PLAYER_ONE, PLAYER_TWO } from '../../const';

const types = {
  PLAYER_SET_INIT: 'PLAYER_SET_INIT',
  PLAYER_SET_TURN: 'PLAYER_SET_TURN',
  FIGURE_SET_ACTIVE: 'FIGURE_SET_ACTIVE',
  FIGURE_SET_SCHEMA: 'FIGURE_SET_SCHEMA',
  FIGURE_USE: 'FIGURE_USE',
};

const actions = {
  setInitPlayer: (player, name, color, mask) =>
    ({ type: types.PLAYER_SET_INIT, player, name, color, mask }),
  setTurn: (player) => ({ type: types.PLAYER_SET_TURN, player }),
  setActiveFigure: (figure) => ({ type: types.FIGURE_SET_ACTIVE, figure }),
  setFigureSchema: (player, figureId, newSchema) =>
    ({ type: types.FIGURE_SET_SCHEMA, player, figureId, newSchema }),
  useFigure: (player, figureId) => ({ type: types.FIGURE_USE, player, figureId }),
};

const initState = {
  turn: PLAYER_ONE,
  activeFigure: null,
  [PLAYER_ONE]: null,
  [PLAYER_TWO]: null,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case types.FIGURE_USE: {
      const newFigures = state[action.player].figures.map((figure) => {
        if (figure.id === action.figureId) {
          return {
            bounds: {
              min: { x: 0, y: 0 },
              max: { x: 0, y: 0 },
            },
            blocks: []
          }
        }
        return figure;
      });

      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          figures: newFigures,
        },
      };
    }
    case types.PLAYER_SET_INIT: {
      return {
        ...state,
        [action.player]: {
          color: action.color,
          name: action.name,
          mask: action.mask,
          figures: generateInitFigures(action.mask),
        },
      };
    }
    case types.PLAYER_SET_TURN: {
      return {
        ...state,
        turn: action.player,
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