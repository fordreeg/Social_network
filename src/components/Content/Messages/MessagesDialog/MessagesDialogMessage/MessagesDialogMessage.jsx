import style from "./MessagesDialogMessage.module.css";

const MessagesDialogMessage = (props) => {
    return (
        <li className={style.item}>
            <a href={'/' + props.id}><img src={props.avatar} alt="avatar" className={style.avatar}/></a>
            <div>
                <a href={'/' + props.id} className={style.name}>{props.name}</a>
                <div className={style.message}>{props.text}</div>
            </div>
            <div className={style.time}>{props.time}</div>
        </li>
    )
}

export default MessagesDialogMessage;