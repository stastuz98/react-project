import React from 'react';
import Post from './Post/Post'
import mystyle from './MyPosts.module.css'

const MyPosts = (props) => {
    let postsElements = props.posts.map(item => <Post text={item.text} like={item.like} />)
    return (
        <div>
            <div>
                <h3>My posts</h3>
            </div>
            <textarea cols="60" rows="5"></textarea>
            <div><button>Опубликовать</button></div>
            <div className={mystyle.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
