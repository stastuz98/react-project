import { addMessageActionCreator, changeMessageActionCreator }
    from '../../redux/reducer/messagesPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
    return {
        changeMessage: (text) => {
            let action = changeMessageActionCreator(text);
            dispatch(action);
        },
        sendMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
    };
};

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageBody: state.messagesPage.newMessageBody,
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
