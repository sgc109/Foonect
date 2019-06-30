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
      address: '',
      latLng: { lat: 37.4786502, lng: 126.9650535 },
    };
  }

  handlePlaceSeleceted({ address, latLng }) {
    this.setState({
      address: address,
      latLng: latLng,
    });
  }

  MenubarScreen = (props) => {
    const places = [
      { lat: 37.4786502, lng: 126.9650535 },
      { lat: 37.4886502, lng: 126.9750535 },
    ];

    return (
      <>
        <Menubar
          handlePlaceSeleceted={this.handlePlaceSeleceted.bind(this)}
          loggedIn={this.state.loggedIn}
        ></Menubar>
        <Route exact path='/' component={() => <Home places={places} address={this.state.address} latLng={this.state.latLng}></Home>} />
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
