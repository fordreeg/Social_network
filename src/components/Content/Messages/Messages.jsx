import s from "./Messages.module.css";
import MessagesDialogs from "./MessagesDialogs/MessagesDialogs";
import MessagesDialogContainer from "./MessagesDialog/MessagesDialogContainer";

const Messages = (props) => {
    
    return (
        <div className={s.wrapper}>
            <MessagesDialogs
                messDialogs={props.messDialogs}
            />
            <MessagesDialogContainer
                store={props.store}
            />
        </div>
    )
};

export default Messages;