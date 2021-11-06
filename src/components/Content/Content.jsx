import style from './Content.module.css'
import { Suspense, lazy } from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";

const ProfileContainer = lazy(() => import('./Profile/ProfileContainer'));
const MessagesContainer = lazy(() => import('./Messages/MessagesContainer'));
const UsersContainer = lazy(() => import('./Users/UsersContainer'));
const LoginContainer = lazy(() => import('./Login/LoginContainer'));

const Content = (props) => {
    return (
        <div className={style.wrapper}>
            <Suspense fallback={<Preloader/>}>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to={'/profile'}/>
                    </Route>
                    <Route exact path='/profile/:userId?'>
                        <ProfileContainer/>
                    </Route>
                    <Route exact path='/messages'>
                        <MessagesContainer/>
                    </Route>
                    <Route exact path='/users'>
                        <UsersContainer/>
                    </Route>
                    <Route path='/login'>
                        <LoginContainer/>
                    </Route>
                    <Route>
                        <div>404 error</div>
                    </Route>
                </Switch>
            </Suspense>
        </div>
    )
};

export default Content;