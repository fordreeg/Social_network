import React from "react";
import HeaderAuthBtn from "./HeaderAuthBtn";
import {connect} from "react-redux";
import {setAuthDataAC, toggleAuthAC} from "../../Redux/authReducer";
import AuthApi from "../../Api/AuthApi";

class HeaderAuthBtnContainer extends React.Component {
    componentDidMount() {
        AuthApi.login().then(response => {
                if(response.resultCode === 0) {
                    this.props.toggleAuthAC(true);
                    let {id, login, email} = response.data;
                    this.props.setAuthDataAC(id, login, email);
                } else {
                    this.props.toggleAuthAC(false);
                }
            });
            
    }
    render () {
        return (
            <HeaderAuthBtn
                isLogin={this.props.isLogin}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps, {setAuthDataAC, toggleAuthAC})(HeaderAuthBtnContainer);