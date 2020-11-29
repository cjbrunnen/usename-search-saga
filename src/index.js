import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import styled from "styled-components";

import rootSaga from "./sagas";

import Search from "./Search";
import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const Main = styled.div`
  color: #023047;
  height: 100vh;
  padding: 20px 0;
  width: 100vw;
`;
const action = (type, payload) => store.dispatch({ type, payload });

function render() {
  ReactDOM.render(
    <Main>
      <Search value={store.getState()} action={action} />
    </Main>,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
