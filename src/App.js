import React from 'react';
import './App.css';
import Menubar from './app/component/Menu/Menubar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './app/Router';
import Home from './app/page/Home';
import Join from './app/page/Join';
import Login from './app/page/Login';
import Mypage from './app/page/Mypage';
import FriendList from './app/page/FriendList';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  MenubarScreen = (props) => {
    return (
      <>
        <Menubar
          loggedIn={this.state.loggedIn}
        ></Menubar>
        <Route exact path='/' component={Home} />
        <Route path='/mypage' component={Mypage} />
        <Route path='/friends' component={FriendList} />
      </>
    );
  }

  handleLogin = () => {
    this.setState({
      loggedIn: true,
    });

  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/login' component={() => <Login handleLogin={this.handleLogin}></Login>} />
            <Route exact path='/join' component={Join} />
            <Route component={this.MenubarScreen} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
