import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Reducer from './Components/Redux/Reducers/Reducer';
import { composeWithDevTools } from "redux-devtools-extension";
export const history = createHistory()

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
