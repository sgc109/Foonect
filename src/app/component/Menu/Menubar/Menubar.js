import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.scss';
import MenuHeader from '../MenuHeader';
import MenuItem from '../MenuItem';
import Searchbar from '../Searchbar';
import { menus } from '../menus';
// import SearchbarWrapper from '../../../container/SearchbarWrapper';

class Menubar extends React.Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <div className="Menubar">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <MenuHeader title={'Foonect'}></MenuHeader>
        </Link>
        <div className="globalMenus">
          {
            menus.map(menu => (
              (
                menu.showState !== 'logged_in' || loggedIn
                  ? (
                    <Link to={menu.link} key={menu.title} style={{ textDecoration: 'none', color: 'black' }}>
                      <MenuItem title={menu.title}>

                      </MenuItem>
                    </Link>
                  )
                  : null
              )
            ))
          }
        </div>
        <div className="userMenus">
          <Searchbar
            handlePlaceSeleceted={this.props.handlePlaceSeleceted}
          ></Searchbar>
          {
            loggedIn
              ? null
              : (
                <Link to={'/login/'} style={{ textDecoration: 'none', color: 'black', margin: '1%' }}>
                  <MenuItem title={'로그인/가입'}>

                  </MenuItem>
                </Link>
              )
          }
        </div>
      </div>
    );
  }
}

export default Menubar;