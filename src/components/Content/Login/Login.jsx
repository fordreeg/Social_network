import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';

const Login = () => {
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
            .max(50, 'Too Long')
    })
    return (
        <div>
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                }}
                validateOnBlur
                onSubmit={(values) => {console.log(values)}}
                validationSchema={validationSchema}
            >
                {({values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isValid,
                  handleSubmit,
                  dirty}) => {
                    return (
                        <form>
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
                            <button disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    >Sign In</button>
                        </form>
                    )
                }}
            </Formik>
        </div>
    );
};

export default Login;