import React, { Component } from "react";

import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";


import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

import Home from "./containers/Home.container";
import Series from "./containers/Series.container";
import Movies from "./containers/Movies.container";
import Content from "./components/content";



import "./App.css";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {

};

export const store = createStore(
  rootReducer(history),
  initialState,
  compose(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history)
    )
  )
);

sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Content>
              <Route exact path="/" component={Home} />
              <Route path="/series" component={Series} />
              <Route path="/movies" component={Movies} />
            </Content>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
