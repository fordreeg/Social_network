import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Navigation from "./components/Navigation/Navigation";

const App = (props) => {
  return (
      <main className='app'>
          <Header/>
          <div className="container">
              <div className="app__wrapper">
                  <Navigation/>
                  <Content
                      profile={props.state.profilePage}
                      messages={props.state.messagesPage}
                      dispatch={props.dispatch}
                  />
              </div>
          </div>
      </main>
  )
};


export default App;
