import React from 'react';
import mystyle from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let textareaElement = React.createRef();

const Dialogs = (props) => {
    {/*отправление сообщения в state*/ }
    let changeMessage = () => {
        let text = textareaElement.current.value;
        props.changeMessage(text);
    };

    let sendMessage = () => {
        props.sendMessage();
    };

    let dialogsElements = props.messagesPage.dialogs.map(item => <DialogItem name={item.name} id={item.id} key={item.id} />);
    let messageElements = props.messagesPage.messages.map(item => <Message message={item.message} key={item.id} />);

    return (
        <div className={mystyle.dialogs}>
            <div className={mystyle.dialog}>
                {dialogsElements}
            </div>
            <div className={mystyle.messages}>
                {messageElements}
                <textarea cols="60"
                    rows="5"
                    placeholder='Enter your message: '
                    ref={textareaElement}
                    value={props.newMessageBody}
                    onChange={changeMessage}>
                </textarea>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
