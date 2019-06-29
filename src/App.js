import React from 'react';
import './App.css';
import Menubar from './app/Menubar';
import Home from './app/page/Home';
import Join from './app/page/Join';
import Login from './app/page/Login';
import Mypage from './app/page/Mypage';
import FriendList from './app/page/FriendList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Menubar></Menubar>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/join' component={Join}></Route>
          <Route path='/mypage' component={Mypage}></Route>
          <Route path='/friends' component={FriendList}></Route>
        </Router>

      </div>
    );
  }
}

export default App;
