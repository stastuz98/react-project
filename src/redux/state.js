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
    },
    profilePage: {
        posts: [
            { text: 'Я сегодня сходил', like: 14 },
            { text: 'я люблю react', like: 2 },
            { text: 'У меня родилась дочка', like: 19 },
        ],
    },
    navBar: [
        { name: 'Max-1' },
        { name: 'Max-2' },
        { name: 'Max-3' },
        { name: 'Max-4' },
    ]
}

export default state;
