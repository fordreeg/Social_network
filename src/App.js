import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Navigation from "./components/Navigation/Navigation";
import {Component} from "react";
import {connect} from "react-redux";
import {getAuthUserData,} from "./Redux/authReducer";

class App extends Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return (
            <main className='app'>
                <Header/>
                <div className="container">
                    <div className="app__wrapper">
                        <Navigation/>
                        <Content/>
                    </div>
                </div>
            </main>
        )
    }
}


export default connect(null, {getAuthUserData})(App);
