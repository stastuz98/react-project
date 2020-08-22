let rerender = () => {
    console.log('State change!')
}

let state = {
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
        newMessage: 'change',
    },
    profilePage: {
        posts: [
            { text: 'Я сегодня сходил', like: 14 },
            { text: 'Я люблю react', like: 2 },
            { text: 'У меня родилась дочка', like: 19 },
        ],
    },
    navBar: [
        { name: 'Max-1' },
        { name: 'Max-2' },
        { name: 'Max-3' },
        { name: 'Max-4' },
    ]
};

window.state = state;

{/*Добавление сообщения в диалог*/}
export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newMessage,
    };
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessage = '';
    rerender();
};

export const changeMessage = textInTextarea => {
    state.messagesPage.newMessage = textInTextarea;
    rerender();
}

export const subscribe = (observer) => {
    rerender = observer;
};

export default state;
