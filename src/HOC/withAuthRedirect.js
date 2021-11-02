import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => (
    {isLogin: state.auth.isLogin}
);


export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isLogin) return <Redirect to={'/login'}/>
            
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};

export default WithAuthRedirect;