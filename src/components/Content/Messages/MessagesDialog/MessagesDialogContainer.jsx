import {sendNewMessageACreator} from "../../../../Redux/messagesReducer";
import MessagesDialog from "./MessagesDialog";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        name: state.messagesPage.messDialog.name,
        id: state.messagesPage.messDialog.id,
        messages: state.messagesPage.messDialog.messages,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: (message) => {
            dispatch(sendNewMessageACreator(message));
        },
    }
};


const MessagesDialogContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesDialog);

export default MessagesDialogContainer;