import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.scss';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import { menus } from './menus';

class Menubar extends React.Component {
    render() {
        const { loggedIn } = this.props;
        return (
            <div className="Menubar">
                <Link to="/">
                    <MenuHeader title={'Foonect'}></MenuHeader>
                </Link>
                <div className="globalMenus">
                    {
                        menus.map(menu => (
                            (
                                menu.showState !== 'logged_in' || loggedIn
                                    ? (
                                        <Link to={menu.link} key={menu.title}>
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
                    {
                        loggedIn
                            ? null
                            : (
                                <Link to={'/login/'}>
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