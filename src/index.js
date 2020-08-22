import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, changeMessage, subscribe} from './redux/state'


let rerender = () => {
  ReactDOM.render(
    <React.StrictMode><App state={state} addMessage={addMessage} changeMessage={changeMessage}/></React.StrictMode>,
    document.getElementById('root')
  );
}
rerender();

subscribe(rerender);

serviceWorker.unregister();
