import style from "./MessagesDialogs.module.css";
import MessagesDialogsItem from "./MessagesDialogsItem";

const MessagesDialogs = ({messDialogs, ...props}) => {
    
    let messagesDialogs = messDialogs
        .map( elem => {
            return (
                <MessagesDialogsItem
                    key={elem.id}
                    id={elem.id}
                    name={elem.name}
                    count={elem.count}
                    avatar={elem.avatar}/>
            )
        })
    
    return (
        <ul className={style.list}>
            <li className={style.title}><h2>My messages</h2></li>
            {messagesDialogs}
        </ul>
    )
}

export default MessagesDialogs;