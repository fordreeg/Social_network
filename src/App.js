import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
        <main className='app'>
            <Header/>
            <div className="container">
                <div className="app__wrapper">
                    <Navigation/>
                    <Content
                        profile={props.state.profilePage}
                        messages={props.state.messagesPage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                        newPostText={props.state.profilePage.newPostText}
                        sendNewMessage={props.sendNewMessage}
                        newMessageText={props.state.messagesPage.newMessageText}
                        updateNewMessageText={props.updateNewMessageText}
                    />
                </div>
            </div>
        </main>
    </BrowserRouter>
  )
};


export default App;
