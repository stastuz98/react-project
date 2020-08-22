import React from 'react';
import mystyle from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let textareaElement = React.createRef();

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(item => <DialogItem name={item.name} id={item.id} />);
    let messageElements = props.messages.map(item => <Message message={item.message} />);

    {/*отправление сообщения в state*/}
    let changeMessage = () => {
        let text = textareaElement.current.value;
        props.changeMessage(text);
    };

    return (
        <div className={mystyle.dialogs}>
            <div className={mystyle.dialog}>
                {dialogsElements}
            </div>
            <div className={mystyle.messages}>
                {messageElements}
                <textarea cols="60"
                          rows="5"
                          ref={textareaElement}
                          value={props.newMessage}
                          onChange={changeMessage}>
                </textarea>
                <div>
                    <button onClick={props.addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
