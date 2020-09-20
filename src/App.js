import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import mystyle from './components/Profile/Profile.module.css';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Navbar navBar={props.store.getState().navBar} />
        <div className={mystyle.profile}>
          <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users' render={() => <UsersContainer store={props.store}/>} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
