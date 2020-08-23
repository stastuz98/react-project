import React from 'react';
import mystyle from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator, changeMessageActionCreator} from './../../redux/state';


let textareaElement = React.createRef();

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(item => <DialogItem name={item.name} id={item.id} />);
    let messageElements = props.messages.map(item => <Message message={item.message} />);
   
    {/*отправление сообщения в state*/}
    let changeMessage = () => {
        let text = textareaElement.current.value;
        let action = changeMessageActionCreator(text);
        props.dispatch(action);
    };

    let sendMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
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
