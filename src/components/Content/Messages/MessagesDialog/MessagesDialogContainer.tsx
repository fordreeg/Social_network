import { sendNewMessageACreator } from "../../../../Redux/messagesReducer";
import MessagesDialog from "./MessagesDialog";
import { connect } from "react-redux";
import { AppStateType } from "../../../../Redux/reduxStore";

const mapStateToProps = (state: AppStateType) => {
  return {
    name: state.messagesPage.messDialog.name,
    id: state.messagesPage.messDialog.id,
    messages: state.messagesPage.messDialog.messages,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendNewMessage: (message: string) => {
      dispatch(sendNewMessageACreator(message));
    },
  };
};

const MessagesDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesDialog);

export default MessagesDialogContainer;
