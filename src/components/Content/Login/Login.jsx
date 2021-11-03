import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const validationSchema = yup.object().shape({
        login: yup.string()
            .typeError('Должно содержать буквы, цифры и символы')
            .required('Required')
            .min(2, 'Too Short!')
            .max(50, 'Too Long!'),
        password: yup.string()
            .typeError('Должно содержать буквы, цифры и символы')
            .required('Required')
            .min(2, 'Too Short')
            .max(50, 'Too Long'),
    })
    
    const onSubmitForm = (values, {setSubmitting, setStatus, resetForm}) => {
        props.login(values.login, values.password, values.rememberMe, setStatus);
        resetForm();
        setSubmitting(false);
    };
    
    if(props.isLogin) {
        return <Redirect to={'/profile'}/>
    }
    
    return (
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                    rememberMe: false,
                }}
                validateOnBlur
                onSubmit={onSubmitForm}
                validationSchema={validationSchema}
            >
                {({values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isValid,
                  handleSubmit,
                  status,
                  }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="text"
                                        name={'login'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.login}
                                        placeholder='Login'
                                />
                                {touched.login && errors.login && <p>{errors.login}</p>}
                            </div>
                            <div>
                                <input type="password"
                                       name={'password'}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.password}
                                       placeholder='Password'
                                />
                                {touched.password && errors.password && <p>{errors.password}</p>}
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id='rememberMe'
                                    name='rememberMe'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.rememberMe}
                                />
                                <label htmlFor="rememberMe">Remember me</label>
                            </div>
                            <div>
                                {status}
                            </div>
                            <button
                                disabled={!isValid }
                                type='submit'
                            >Sign In</button>
                        </form>
                    )
                }}
            </Formik>
    );
};

export default Login;