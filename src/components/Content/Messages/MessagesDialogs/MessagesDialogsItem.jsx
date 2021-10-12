import s from "./MessagesDialogs.module.css";
import {NavLink} from "react-router-dom";

const MessagesDialogsItem = (props) => {

    return (
        <li className={s.item}>
            <NavLink to={'/Messages/' + props.id} className={s.link}>
                <div>
                    <img src={props.avatar} alt="avatar" className={s.avatar}/>
                    <div className={s.name}>{props.name}</div>
                </div>
                <span className={s.numMessages}>{props.count}</span>
            </NavLink>
        </li>
    )
}

export default MessagesDialogsItem;