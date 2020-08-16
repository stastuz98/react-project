import React from 'react';
import mystyle from './Post.module.css';

const myimg = 'https://bipbap.ru/wp-content/uploads/2016/11/11136.jpeg';

const Post = (props) => {
    return (
        <div className={mystyle.post}>
            <div>
                <img src={myimg}></img>
                {props.text}<br />
                <span>Лайки: {props.like}</span>
            </div><br />
        </div>
    );
}

export default Post;
