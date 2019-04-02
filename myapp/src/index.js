import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/routers';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,  HashRouter} from 'react-router-dom';//HasRouter
import './index.scss'
import FRouter from './router/routers';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducer from "./reducers/index";
const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render( 
  <HashRouter>    
    <Provider store={store}>
    <FRouter/>
    </Provider>
  </HashRouter>
, document.getElementById('root'));

serviceWorker.unregister();
