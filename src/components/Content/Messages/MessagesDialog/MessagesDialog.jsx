import style from "./MessagesDialog.module.css";
import MessagesDialogMessage from "./MessagesDialogMessage/MessagesDialogMessage";
import {Formik} from 'formik';

const MessagesDialog = (props) => {
    
    const messagesDialogMessage = props.messages
        .map(elem => {
            return (
                <MessagesDialogMessage
                    avatar={elem.avatar}
                    name={elem.name}
                    text={elem.text}
                    time={elem.time}
                    id={props.id}
                    key={props.id}
                />
            )
        });

    return (
        <div className={style.wrapper}>
            <div className={style.title}><a href={'/' + props.id}>{props.name}</a></div>
            <div className={style.divider}/>
            <ul className={style.dialog}>
                {messagesDialogMessage}
            </ul>
            <MessagesDialogForm sendNewMessage={props.sendNewMessage}/>
        </div>
    )
}


const MessagesDialogForm = (props) => {
    
    const onSendNewMessage = (values) => {
        props.sendNewMessage(values.textarea);
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