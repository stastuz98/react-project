export let addMessagePageReducer = (messagesPage) => {
    let newMessageBody = {
        id: 5,
        message: messagesPage.newMessageBody,
    };
    messagesPage.messages.push(newMessageBody);
    messagesPage.newMessageBody = '';
};

export let changeMessagePageReducer = (messagesPage, action) => {
    messagesPage.newMessageBody = action.textInTextarea;
};