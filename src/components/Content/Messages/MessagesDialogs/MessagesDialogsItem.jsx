import style from "./MessagesDialogs.module.css";
import {NavLink} from "react-router-dom";

const MessagesDialogsItem = ({id, avatar, name, count, ...props}) => {

    return (
        <li className={style.item}>
            <NavLink to={'/Messages/' + id} className={style.link}>
                <div>
                    <img src={avatar} alt="avatar" className={style.avatar}/>
                    <div className={style.name}>{name}</div>
                </div>
                <span className={style.numMessages}>{count}</span>
            </NavLink>
        </li>
    )
}

export default MessagesDialogsItem;