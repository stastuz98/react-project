const ADD_MESSAGE_BODY = 'ADD-MESSAGE-BODY';
const CHANGE_MESSAGE_BODY = 'CHANGE-MESSAGE-BODY';

let dialogsReducer = (messagesPage, action) => {
    switch(action.type) {
        case ADD_MESSAGE_BODY:
            let newMessageBody = {
                id: 5,
                message: messagesPage.newMessageBody,
            };
            messagesPage.messages.push(newMessageBody);
            messagesPage.newMessageBody = '';
            return messagesPage;
        case CHANGE_MESSAGE_BODY:
            messagesPage.newMessageBody = action.textInTextarea;
            return messagesPage;
        default:
            return messagesPage;
    };
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE_BODY });

export const changeMessageActionCreator = text =>
    ({ type: CHANGE_MESSAGE_BODY, textInTextarea: text, });

export default dialogsReducer;
