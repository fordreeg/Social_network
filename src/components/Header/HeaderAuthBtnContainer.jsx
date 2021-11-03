import React from "react";
import HeaderAuthBtn from "./HeaderAuthBtn";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";

class HeaderAuthBtnContainer extends React.Component {
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

export default connect(mapStateToProps, {logout})(HeaderAuthBtnContainer);