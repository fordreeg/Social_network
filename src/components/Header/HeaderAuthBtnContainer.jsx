import React from "react";
import HeaderAuthBtn from "./HeaderAuthBtn";
import {connect} from "react-redux";
import {signIn} from "../../Redux/authReducer";

class HeaderAuthBtnContainer extends React.Component {
    componentDidMount() {
        this.props.signIn()
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

export default connect(mapStateToProps, {signIn})(HeaderAuthBtnContainer);