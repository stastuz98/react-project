import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let rerender = () => {
  ReactDOM.render(
    <React.StrictMode><App state={store.getState()}
                           dispatch={store.dispatch.bind(store)}/>
                      </React.StrictMode>,
    document.getElementById('root')
  );
};

rerender();

store.subscribe(rerender);

serviceWorker.unregister();
