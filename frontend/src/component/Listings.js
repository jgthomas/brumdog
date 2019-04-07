
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Listing from './Listing';

import './App.css';

class Listings extends Component {

    render() {
        return (
            <div style={listingsBoxStyle} className="content-box">
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

const listingsBoxStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(325px, 1fr))',
    gridAutoRows: '500px',
    gridGap: '30px'
}

Listings.propTypes = {
    pubs: PropTypes.array,
};

export default Listings;
