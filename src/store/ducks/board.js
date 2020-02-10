import { generateInitCells } from '../../utils/Board';

const types = {
  
};

const actions = {
  
};

const initState = {
  cells: generateInitCells(),
};

function reducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default {
  types,
  actions,
  reducer,
};