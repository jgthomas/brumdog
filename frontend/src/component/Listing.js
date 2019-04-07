
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

class Listing extends Component {

    render() {
        return (
          <div style={listingBoxStyle}>
             <h1 style={titleStyle}>{this.props.name}</h1>
             <img
                 src={this.props.imageName}
                 style={imageStyle}
                 alt={imageAlt}
             />
             <p style={ratingStyle}>{dogPaw.repeat(this.props.rating)}</p>
             <p style={descriptionStyle}>{this.props.description}</p>
          </div>
        );
    }
}

const listingBoxStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid slategrey'
}

const titleStyle = {
    textAlign: 'center',
    color: 'dodgerblue'
}

const imageStyle = {
    display: 'block',
    width: '80%',
    margin: 'auto',
    height: 'auto'
}

const ratingStyle = {
    fontWeight: 'bold',
    fontSize: '120%',
    fontFamily: 'Dingbats',
    textAlign: 'center',
    color: '#E45641'
}

const descriptionStyle = {
    width: '90%',
    margin: 'auto',
    color: 'dimgrey'
}

const dogPaw = "D";

const imageAlt = "Photo of pub";


Listing.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    imageName: PropTypes.string,
    description : PropTypes.string,
};

export default Listing;
