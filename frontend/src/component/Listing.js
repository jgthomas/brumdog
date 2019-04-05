import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Listing.css';
import './App.css';

class Listing extends Component {

    render() {
        const setPubId = this.props.setId;
        return (
          <div className="listing-box">
             <h1 className="content-title listing-title">{this.props.name}</h1>
             <img src={this.props.imageName} alt="Pub Front"/>
             <p className="rating dog-paw">{"D".repeat(this.props.rating)}</p>
             <div className="navigation-button">
                 <button onClick={() => setPubId(this.props.pubId)}>More</button>
             </div>
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
