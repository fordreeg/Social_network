import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../../Redux/authReducer";

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        captcha: state.auth.captcha,
    }
};

const LoginContainer = connect(mapStateToProps, {login})(Login);


export default LoginContainer;