import React from 'react';
import style from "./ProfilePosts.module.css";
import {Formik} from 'formik';
import * as yup from 'yup';

const ProfilePostsForm = (props) => {
    const validationSchema = yup.object().shape({
        textarea: yup.string()
            .required('Required')
            .min(2, 'Too Short!')
    });
    const onAddPost = (values) => {
        props.addPost(props.profile.fullName, props.profile.photos.large, values.textarea)
    };
    return (
        <Formik
            initialValues={{
                textarea: '',
            }}
            validateOnBlur
            onSubmit={onAddPost}
            validationSchema={validationSchema}
        >
            
            {({values,
                errors,
                handleChange,
                handleSubmit,}) => {
                return (
                    <form className={style.new__form} onSubmit={handleSubmit}>
                        <img className={style.new__img}
                             src={props.profile.photos.large} alt='avatar'/>
                        <div className={style.new__text}>
                            <textarea className={style.new__textarea}
                                      name="textarea"
                                      onChange={handleChange}
                                      placeholder="What's new?"
                                      value={values.textarea}
                            />
                            {errors.textarea && <p>{errors.textarea}</p>}
                            <button className={style.new__btn}
                                    type='submit'
                            >Publish</button>
                        </div>
                    </form>
                )
            }}
            
        </Formik>
    );
};

export default ProfilePostsForm;