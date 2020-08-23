export let addProfilePageReducer = (profilePage) => {
    let newPost = {
        text: profilePage.newPostText,
        like: 0,
    };
    profilePage.posts.unshift(newPost);
    profilePage.newPostText = '';
};

export let changeProfilePageReducer = (profilePage, action) => {
    profilePage.newPostText = action.textInTextarea;
};