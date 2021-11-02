import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../../Redux/authReducer";

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe, setSubmitting, setFieldError, setStatus) => {
            dispatch(login(email, password, rememberMe, setSubmitting, setFieldError, setStatus));
        },
    }
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);


export default LoginContainer;