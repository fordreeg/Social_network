import style from "./MessagesDialogs.module.css";
import {NavLink} from "react-router-dom";

const MessagesDialogsItem = (props) => {

    return (
        <li className={style.item}>
            <NavLink to={'/Messages/' + props.id} className={style.link}>
                <div>
                    <img src={props.avatar} alt="avatar" className={style.avatar}/>
                    <div className={style.name}>{props.name}</div>
                </div>
                <span className={style.numMessages}>{props.count}</span>
            </NavLink>
        </li>
    )
}

export default MessagesDialogsItem;