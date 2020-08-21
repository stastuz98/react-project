import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import mystyle from './components/Profile/Profile.module.css';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Navbar friends={props.state.navBar} />
        <div className={mystyle.profile}>
          <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts} />} />
          <Route path='/dialogs' render={() => <Dialogs
                                                  dialogs={props.state.messagesPage.dialogs}
                                                  messages={props.state.messagesPage.messages}
                                                  newMessage={props.state.messagesPage.newMessage}
                                                  addMessage={props.addMessage}
                                                  changeMessage={props.changeMessage}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
