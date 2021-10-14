import s from "./Messages.module.css";
import MessagesDialogs from "./MessagesDialogs/MessagesDialogs";
import MessagesDialog from "./MessagesDialog/MessagesDialog";

const Messages = (props) => {
    
    return (
        <div className={s.wrapper}>
            <MessagesDialogs
                messDialogs={props.messDialogs}
            />
            <MessagesDialog
                id={props.messDialog.id}
                name={props.messDialog.name}
                messages={props.messDialog.messages}
                newMessageText={props.newMessageText}
                dispatch={props.dispatch}
            />
        </div>
    )
};

export default Messages;