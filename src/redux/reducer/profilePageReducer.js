const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

let profileReducer = (profilePage, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                text: profilePage.newPostText,
                like: 0,
            };
            profilePage.posts.unshift(newPost);
            profilePage.newPostText = '';
            return profilePage;
        case CHANGE_POST:
            profilePage.newPostText = action.textInTextarea;
            return profilePage;
        default:
            return profilePage;
    };
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const changePostActionCreator = text =>
    ({ type: CHANGE_POST, textInTextarea: text, });

export default profileReducer;
