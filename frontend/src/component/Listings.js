
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Listing from './Listing';

import './App.css';
import './Listings.css';

class Listings extends Component {

    render() {
        return (
            <div className="content-box listings-box">
                {this.props.pubs.map( pub => {
                    return <Listing
                        name={pub.name}
                        rating={pub.rating}
                        imageName={pub.imageName}
                        description={pub.description}
                        key={pub.id}
                    />;
                })}
            </div>
        );
    }
}

Listings.propTypes = {
    pubs: PropTypes.array,
};

export default Listings;
