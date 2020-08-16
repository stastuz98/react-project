import React from 'react';
import mystyle from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(item => <DialogItem name={item.name} id={item.id} />);
    let messageElements = props.messages.map(item => <Message message={item.message} />);

    return (
        <div className={mystyle.dialogs}>
            <div className={mystyle.dialog}>
                {dialogsElements}
            </div>
            <div className={mystyle.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;
