import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.scss';

class Menubar extends React.Component {
    render() {
        return (
            <div className="Menubar">
                <ul>
                    <li>
                        <Link to='/login/'>to login</Link>
                    </li>
                    <li>
                        <Link to='/join/'>to join</Link>
                    </li>
                    <li>
                        <Link to='/mypage/'>to mypage</Link>
                    </li>
                    <li>
                        <Link to='/friends/'>to friend list</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menubar;