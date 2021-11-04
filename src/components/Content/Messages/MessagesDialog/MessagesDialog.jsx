import style from "./MessagesDialog.module.css";
import MessagesDialogMessage from "./MessagesDialogMessage/MessagesDialogMessage";
import {Formik} from 'formik';

const MessagesDialog = ({messages, id, name, sendNewMessage, ...props}) => {
    
    const messagesDialogMessage = messages
        .map(elem => {
            return (
                <MessagesDialogMessage
                    avatar={elem.avatar}
                    name={elem.name}
                    text={elem.text}
                    time={elem.time}
                    id={id}
                    key={id}
                />
            )
        });

    return (
        <div className={style.wrapper}>
            <div className={style.title}><a href={'/' + id}>{name}</a></div>
            <div className={style.divider}/>
            <ul className={style.dialog}>
                {messagesDialogMessage}
            </ul>
            <MessagesDialogForm sendNewMessage={sendNewMessage}/>
        </div>
    )
}


const MessagesDialogForm = ({sendNewMessage, ...props}) => {
    
    const onSendNewMessage = (values) => {
        sendNewMessage(values.textarea);
    };
    
    return (
        <Formik
            initialValues={{
                textarea: '',
            }}
            validateOnBlur
            onSubmit={onSendNewMessage}
        >
            {({
                values,
                handleChange,
                handleSubmit,
              }) => {
                return (
                    <form className={style.form} onSubmit={handleSubmit}>
                        <div>
                            1
                        </div>
                        <div>
                            <textarea
                                className={style.textarea}
                                required
                                onChange={handleChange}
                                name="textarea"
                                placeholder="Write a message..."
                                value={values.textarea}
                            />
                        </div>
                        <div>
                            <button className={style.btn} type='submit'/>
                        </div>
                    </form>
                )
            }}
        </Formik>
    );
};


export default MessagesDialog;