import { createStore, combineReducers, compose } from 'redux';
import game from './ducks/game';

const reducers = {
  game: game.reducer,
};

const store = createStore(
  combineReducers(reducers),
  compose(
    // applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
  )
);

export default store;