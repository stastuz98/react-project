const ADD_MESSAGE_BODY = 'ADD-MESSAGE-BODY';
const CHANGE_MESSAGE_BODY = 'CHANGE-MESSAGE-BODY';

let messagesPageExample = {
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
};

let dialogsReducer = (messagesPage = messagesPageExample, action) => {
    switch (action.type) {
        case ADD_MESSAGE_BODY:
            let messageAdd = { id: 5, message: messagesPage.newMessageBody, };
            return {
                ...messagesPage,
                newMessageBody: '',
                messages: [...messagesPage.messages, messageAdd],
            };
        case CHANGE_MESSAGE_BODY:
            return {
                ...messagesPage,
                newMessageBody: action.textInTextarea,
            };
        default:
            return messagesPage;
    };
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE_BODY });

export const changeMessageActionCreator = text =>
    ({ type: CHANGE_MESSAGE_BODY, textInTextarea: text, });

export default dialogsReducer;
