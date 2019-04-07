
import React from 'react';
import PropTypes from 'prop-types';


function Listing(props) {
    const { name, imageName, rating, description } = props
    return (
        <div style={listingBoxStyle}>
            <h1 style={titleStyle}>{name}</h1>
            <img
                src={imageName}
                style={imageStyle}
                alt={imageAlt}
            />
            <p style={ratingStyle}>{dogPaw.repeat(rating)}</p>
            <p style={descriptionStyle}>{description}</p>
        </div>
    );
}

const listingBoxStyle = {
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
