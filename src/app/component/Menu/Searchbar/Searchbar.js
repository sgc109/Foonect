import React from 'react';
import { Link } from 'react-router-dom';
import './Searchbar.scss';

class Searchbar extends React.Component {
    render() {
        return (
            <input
                className="Searchbar"
                type="text"
                placeholder="맛집을 검색해주세요"
                onClick={this.props.handleSearch}
            />
        );
    }
}

export default Searchbar;