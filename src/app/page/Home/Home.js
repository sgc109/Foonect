import React from 'react';
import FoodMap from '../../component/FoodMap';

class Home extends React.Component {
    render() {
        return (
            <FoodMap
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCf28VeAyKgLze6IG4nJh6EdF9o1ppxAUI&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default Home;