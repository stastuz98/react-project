import {createStore, combineReducers} from 'redux';
import dialogsReducer from './reducer/messagesPageReducer';
import navBarReducer from './reducer/navBarReducer';
import profileReducer from './reducer/profilePageReducer';
import usersReducer from './reducer/usersReducer';

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    navBar: navBarReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
