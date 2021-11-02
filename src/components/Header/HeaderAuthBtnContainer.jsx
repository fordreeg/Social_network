import React from "react";
import HeaderAuthBtn from "./HeaderAuthBtn";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../Redux/authReducer";

class HeaderAuthBtnContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render () {
        return (
            <HeaderAuthBtn
                isLogin={this.props.isLogin}
                logout={this.props.logout}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderAuthBtnContainer);