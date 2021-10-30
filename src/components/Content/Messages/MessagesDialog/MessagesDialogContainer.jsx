import {sendNewMessageACreator, updateNewMessageTextACreator} from "../../../../Redux/messagesReducer";
import MessagesDialog from "./MessagesDialog";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        name: state.messagesPage.messDialog.name,
        id: state.messagesPage.messDialog.id,
        messages: state.messagesPage.messDialog.messages,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextACreator(text))
        },
        sendNewMessage: (e) => {
            e.preventDefault();
            dispatch(sendNewMessageACreator());
        },
    }
};


const MessagesDialogContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesDialog);

export default MessagesDialogContainer;