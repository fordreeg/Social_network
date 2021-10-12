import s from "./MessagesDialogs.module.css";
import MessagesDialogsItem from "./MessagesDialogsItem";

const MessagesDialogs = (props) => {
    
    let messDialogs = props.messDialogs
        .map( elem => {
            return (
                <MessagesDialogsItem
                    id={elem.id}
                    name={elem.name}
                    count={elem.count}
                    avatar={elem.avatar}/>
            )
        })
    
    return (
        <ul className={s.list}>
            <li className={s.title}><h2>My messages</h2></li>
            {messDialogs}
        </ul>
    )
}

export default MessagesDialogs;