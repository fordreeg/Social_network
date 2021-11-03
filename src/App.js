import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Navigation from "./components/Navigation/Navigation";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default connect(mapStateToProps, {initializeApp})(App);
