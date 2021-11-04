import style from "./Messages.module.css";
import MessagesDialogs from "./MessagesDialogs/MessagesDialogs";
import MessagesDialogContainer from "./MessagesDialog/MessagesDialogContainer";

const Messages = ({messDialogs, ...props}) => {
    
    return (
        <div className={style.wrapper}>
            <MessagesDialogs
                messDialogs={messDialogs}
            />
            <MessagesDialogContainer/>
        </div>
    )
};

export default Messages;