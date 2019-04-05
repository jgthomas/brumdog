
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import './Listing.css';

class Listing extends Component {

    render() {
        return (
          <div className="listing-box">
             <h1 className="content-title listing-title">{this.props.name}</h1>
             <img src={this.props.imageName} alt="Pub Front"/>
             <p className="rating dog-paw">{"D".repeat(this.props.rating)}</p>
          </div>
        );
    }
}

Listing.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    imageName: PropTypes.string,
    setId: PropTypes.func,
};

export default Listing;
