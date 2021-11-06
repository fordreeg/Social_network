import style from "./ProfileInfo.module.css";
import {Formik} from 'formik';
import React from "react";

const ProfileDataForm = ({profile, onSaveNewData, setEditMode}) => {
    
    return (
        <Formik
            initialValues={{
                fullName: profile.fullName,
                aboutMe: profile.aboutMe,
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                contacts: {
                    website: profile.contacts.website,
                    github: profile.contacts.github,
                    instagram: profile.contacts.instagram,
                },
            }}
            validateOnBlur
            onSubmit={onSaveNewData}
        >
            {({values,
                errors,
                handleChange,
                handleSubmit,
                handleBlur,
                status,
              }) => {
                return (
                    <form className={style.list} onSubmit={handleSubmit}>
                        <div className='divider'/>
                        <div className={style.item}>
                            <span>Full name:</span>
                            <input name='fullName' type="text" onBlur={handleBlur}
                                   value={values.fullName} onChange={handleChange}/>
                            {errors.login && <p>{errors.login}</p>}
                        </div>
                        <div className={style.item}>
                            <span>About me:</span>
                            <textarea name="aboutMe" onBlur={handleBlur}
                                      value={values.aboutMe} onChange={handleChange}/>
                        </div>
                        <div className={style.item}>
                            <span>Open to work:</span>
                            <label>
                                <input type="radio" name='lookingForAJob'
                                       value={true} onChange={handleChange}/>Yes
                            </label>
                            <label>
                                <input type="radio" name='lookingForAJob'
                                       value={false} onChange={handleChange}/>No
                            </label>
                        </div>
                        <div className={style.item}>
                            {values.lookingForAJob === 'true'
                                && <div>
                                        <span>My technical skills:</span>
                                        <textarea name="lookingForAJobDescription"
                                                  value={values.lookingForAJobDescription}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                        />
                                  </div>
                            }
                        </div>
                        <div className={style.item}>
                            <span>Website:</span>
                            <input name='contacts.website' type="text"
                                   onBlur={handleBlur}
                                   value={values.contacts.website} onChange={handleChange}/>
                        </div>
                        <div className={style.item}>
                            <span>Github:</span>
                            <input name='contacts.github' type="text"
                                   onBlur={handleBlur}
                                   value={values.contacts.github} onChange={handleChange}/>
                        </div>
                        <div className={style.item}>
                            <span>Instagram:</span>
                            <input name='contacts.instagram' type="text"
                                   onBlur={handleBlur}
                                   value={values.contacts.instagram} onChange={handleChange}/>
                        </div>
                        <div>{status}</div>
                        <button type='submit'>go</button>
                        <button onClick={() => {setEditMode(false)}}>cancel</button>
                    </form>
                )
            }}
        </Formik>
    )
}

export default ProfileDataForm;