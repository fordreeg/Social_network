import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../../Redux/authReducer";
import { AppStateType } from "../../../Redux/reduxStore";

const mapStateToProps = (state: AppStateType) => {
  return {
    isLogin: state.auth.isLogin,
    captcha: state.auth.captcha,
  };
};

const LoginContainer = connect(mapStateToProps, { login })(Login);

export default LoginContainer;
