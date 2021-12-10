import style from "./MessagesDialogMessage.module.css";

type PropsType = {
  id: number;
  name: string;
  text: string;
  time: string;
  avatar: string;
  key: number;
};

const MessagesDialogMessage = ({
  id,
  avatar,
  name,
  text,
  time,
  ...props
}: PropsType) => {
  return (
    <li className={style.item}>
      <a href={"/" + id}>
        <img src={avatar} alt="avatar" className={style.avatar} />
      </a>
      <div>
        <a href={"/" + id} className={style.name}>
          {name}
        </a>
        <div className={style.message}>{text}</div>
      </div>
      <div className={style.time}>{time}</div>
    </li>
  );
};

export default MessagesDialogMessage;
