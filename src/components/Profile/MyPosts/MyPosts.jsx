import React from 'react';
import Post from './Post/Post';
import mystyle from './MyPosts.module.css';
import { addPostActionCreator, changePostActionCreator } from './../../../redux/state';

//добавить в пропсы dispatch и ещё что-то

let textareaElement = React.createRef();

const MyPosts = (props) => {
    let postsElements = props.posts.map(item => <Post text={item.text} like={item.like} />)

    let changePostText = () => {
        debugger;
        let text = textareaElement.current.value;
        let action = changePostActionCreator(text);
        props.dispatch(action);
    };

    let publishPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    };

    return (
        <div>
            <div>
                <h3>My posts</h3>
            </div>
            <textarea cols="60"
                rows="5"
                placeholder='Enter your post: '
                ref={textareaElement}
                value={props.newPostText}
                onChange={changePostText}>
            </textarea>
            <div>
                <button onClick={publishPost}>Опубликовать</button>
            </div>
            <div className={mystyle.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
