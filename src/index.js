import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import rerender from './render';

rerender(state);

serviceWorker.unregister();
