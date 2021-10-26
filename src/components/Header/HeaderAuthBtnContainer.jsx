import React from "react";
import HeaderAuthBtn from "./HeaderAuthBtn";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAuthDataAC, toggleAuthAC} from "../../Redux/authReducer";

class HeaderAuthBtnContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials: true,
        }).then(response => {
                if(response.data.resultCode === 0) {
                    this.props.toggleAuthAC(true);
                    let {id, login, email} = response.data.data;
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