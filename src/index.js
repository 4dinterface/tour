import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import DetailPage from './components/Detail/DetailPage';

import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { Router, Route, Switch} from 'react-router';
import {createHashHistory, createBrowserHistory} from 'history';

//const history = createHashHistory();


let store =createStore(reducer);
var history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/detail" component={DetailPage} />
        <Route path="/"  component={App} />
      </Switch>
    </Router>    
  </Provider>,
  document.getElementById('root')
);