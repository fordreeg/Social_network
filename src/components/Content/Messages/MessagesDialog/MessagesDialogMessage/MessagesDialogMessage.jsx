import s from "./MessagesDialogMessage.module.css";

const MessagesDialogMessage = (props) => {
    return (
        <li className={s.item}>
            <a href={'/' + props.id}><img src={props.avatar} alt="avatar" className={s.avatar}/></a>
            <div>
                <a href={'/' + props.id} className={s.name}>{props.name}</a>
                <div className={s.message}>{props.text}</div>
            </div>
            <div className={s.time}>{props.time}</div>
        </li>
    )
}

export default MessagesDialogMessage;