import React from 'react';
import mystyle from './Message.module.css';

const Message = (props) => {
    return (
        <div className={mystyle.messagesItem}>
            {props.message}
        </div>
    );
};

export default Message;
