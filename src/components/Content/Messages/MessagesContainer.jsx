import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";
import WithAuthRedirect from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

class MessagesContainer extends React.Component {
    render () {
        return <Messages {...this.props}/>
    }
}

const mapStateToProps = (state) => (
    {
        messDialogs: state.messagesPage.messDialogs
    }
);


export default compose(
    WithAuthRedirect,
    connect(mapStateToProps))(MessagesContainer);
