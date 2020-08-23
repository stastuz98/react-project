import { addMessagePageReducer, changeMessagePageReducer } from './reducer/messagesPageReducer';
import { addProfilePageReducer, changeProfilePageReducer } from './reducer/profilePageReducer';
const ADD_MESSAGE_BODY = 'ADD-MESSAGE';
const CHANGE_MESSAGE_BODY = 'CHANGE-MESSAGE';
const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

let store = {
    _state: {
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Stas' },
                { id: 2, name: 'Alex' },
                { id: 3, name: 'Nikita' },
                { id: 4, name: 'Vera' },
            ],
            messages: [
                { id: 1, message: 'qwerty' },
                { id: 2, message: '123' },
                { id: 3, message: 'рита' },
                { id: 4, message: 'нина' },
            ],
            newMessageBody: '',
        },
        profilePage: {
            posts: [
                { text: 'Я сегодня сходил', like: 14 },
                { text: 'Я люблю react', like: 2 },
                { text: 'У меня родилась дочка', like: 19 },
            ],
            newPostText: '',
        },
        navBar: [
            { name: 'Max-1' },
            { name: 'Max-2' },
            { name: 'Max-3' },
            { name: 'Max-4' },
        ]
    },

    _rerender() {
        console.log('State change!')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._rerender = observer;
    },

    dispatch(action) { //{type === 'ADD-MESSAGE-BODY'}
        switch (action.type) {
            case ADD_MESSAGE_BODY:
                addMessagePageReducer(this._state.messagesPage);
                break;
            case CHANGE_MESSAGE_BODY:
                changeMessagePageReducer(this._state.messagesPage, action);
                break;
            case ADD_POST:
                addProfilePageReducer(this._state.profilePage);
                break;
            case CHANGE_POST:
                changeProfilePageReducer(this._state.profilePage, action);
                break;
        };
        this._rerender();
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST })

export const changePostActionCreator = text =>
    ({ type: CHANGE_POST, textInTextarea: text, });

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE_BODY })

export const changeMessageActionCreator = text =>
    ({ type: CHANGE_MESSAGE_BODY, textInTextarea: text, });

export default store;
window.state = store.getState();
