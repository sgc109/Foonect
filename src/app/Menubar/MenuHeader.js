import React from 'react';
import { Link } from 'react-router-dom';
import './MenuHeader.scss';

class MenuHeader extends React.Component {
    render() {
        const { logo, title } = this.props;
        const child = logo ? logo : title;

        return (
            <div className="MenuHeader">
                {child}
            </div>
        );
    }
}

export default MenuHeader;