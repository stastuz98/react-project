import React from 'react';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <textarea cols="60" rows="5"></textarea>
            <button>Опубликовать</button>
            <Post text='Тварь ебаная!' like='20'/>
            <Post text='Мусора пидарасы' like='12'/>
            <Post text='Ебнисся.' like='15'/>
        </div>
    );
}

export default MyPosts;
