import style from "./Messages.module.css";
import MessagesDialogs from "./MessagesDialogs/MessagesDialogs";
import MessagesDialogContainer from "./MessagesDialog/MessagesDialogContainer";

const Messages = (props) => {
    
    return (
        <div className={style.wrapper}>
            <MessagesDialogs
                messDialogs={props.messDialogs}
            />
            <MessagesDialogContainer/>
        </div>
    )
};

export default Messages;