import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, changeMessage} from './redux/state'

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode><App state={state} addMessage={addMessage} changeMessage={changeMessage}/></React.StrictMode>,
    document.getElementById('root')
  );
}

export default rerender;