import rerender from '../render';

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

{/*Добавление сообщения в диалог*/}
export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newMessage,
    };
    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessage = '';
    rerender(state);
};

export let changeMessage = textInTextarea => {
    state.messagesPage.newMessage = textInTextarea;
    rerender(state);
}

export default state;
