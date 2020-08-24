import dialogsReducer from './reducer/messagesPageReducer';
import navBarReducer from './reducer/navBarReducer';
import profileReducer from './reducer/profilePageReducer';

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
        navBar: [
            { name: 'Max-1' },
            { name: 'Max-2' },
            { name: 'Max-3' },
            { name: 'Max-4' },
        ],
        profilePage: {
            posts: [
                { text: 'Я сегодня сходил', like: 14 },
                { text: 'Я люблю react', like: 2 },
                { text: 'У меня родилась дочка', like: 19 },
            ],
            newPostText: '',
        },
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

    dispatch(action) {
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.navBar = navBarReducer(this._state.navBar, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._rerender(this._state);
    }
};

export default store;

window.state = store.getState();
