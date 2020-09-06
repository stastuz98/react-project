const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

let profilePageExample = {
    posts: [
        { id: 1, text: 'Я сегодня сходил', like: 14 },
        { id: 2, text: 'Я люблю react', like: 2 },
        { id: 3, text: 'У меня родилась дочка', like: 19 },
    ],
    newPostText: '',
};

let profileReducer = (profilePage = profilePageExample, action) => {
    switch (action.type) {
        case ADD_POST:
            let postAdd = { text: profilePage.newPostText, like: 0, };
            return {
                ...profilePage,
                newPostText: '',
                posts: [postAdd, ...profilePage.posts],
            };
        case CHANGE_POST:
            return {
                ...profilePage,
                newPostText: action.textInTextarea,
            }
        default:
            return profilePage;
    };
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const changePostActionCreator = text =>
    ({ type: CHANGE_POST, textInTextarea: text, });

export default profileReducer;
