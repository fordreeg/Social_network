import {sendNewMessageACreator, updateNewMessageTextACreator} from "../../../../Redux/messagesReducer";
import MessagesDialog from "./MessagesDialog";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        name: state.messagesPage.messDialog.name,
        id: state.messagesPage.messDialog.id,
        messages: state.messagesPage.messDialog.messages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextACreator(text))
        },
        sendNewMessage: (e) => {
            e.preventDefault();
            let date = new Date(),
                hours = date.getHours(),
                minutes = date.getMinutes() + 1,
                day = date.getDate(),
                month = date.getMonth() + 1,
                year = String(date.getFullYear()).slice(2),
                datePost = `${hours}:${minutes} ${day}.${month}.${year}`;
            dispatch(sendNewMessageACreator(datePost));
        },
    }
};

const MessagesDialogContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesDialog);

export default MessagesDialogContainer;