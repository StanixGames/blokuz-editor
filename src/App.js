import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import MainScreen from './screens/Main';
import GameScreen from './screens/Game';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/game">
            <GameScreen />
          </Route>
          <Route exact path="/">
            <MainScreen />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
