import React from 'react';
import Post from './Post/Post';
import mystyle from './MyPosts.module.css';

let textareaElement = React.createRef();

const MyPosts = (props) => {
    let postsElements = props.posts.map(item => <Post text={item.text} like={item.like} key={item.id} />)

    let changePostText = () => {
        let text = textareaElement.current.value;
        props.updateNewPostText(text)
    };

    let publishPost = () => {
        props.publishPost();
    }

    return (
        <div>
            <div><h3>My posts</h3></div>
            <textarea cols="60"
                rows="5"
                placeholder='Enter your post: '
                ref={textareaElement}
                value={props.newPostText}
                onChange={ changePostText }>
            </textarea>
            <div><button onClick={ publishPost }>Опубликовать</button></div>
            <div className={mystyle.posts}>{postsElements}</div>
        </div>
    );
}

export default MyPosts;
