
import React from 'react';

import './App.css';


function Rating(props) {
    return (
        <div style={ratingBoxStyle}>
            <p style={tagLineStyle}>{tagLine}</p>
            <div style={ratingStyle}>
                <div style={ratingIconStyle}>
                    <p>D</p>
                    <p>DD</p>
                    <p>DDD</p>
                </div>
                <div style={ratingWordStyle}>
                    <p>tolerated</p>
                    <p>welcomed</p>
                    <p>loved</p>
                </div>
            </div>
        </div>
    );
}

const ratingBoxStyle = {
    width: '90%',
    margin: 'auto',
    marginTop: '3em',
    textAlign: 'center',
    color: '#E45641',
    fontWeight: 'bold'
}

const tagLineStyle = {
    fontWeight: 'normal'
}

const ratingStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1em'
}

const ratingIconStyle = {
    textAlign: 'right',
    marginRight: '1%',
    fontSize: '120%',
    fontFamily: 'Dingbats'
}

const ratingWordStyle = {
    textAlign: 'left',
    fontSize: '110%',
    fontWeight: 'normal'
}

const tagLine = "Our paw scale of dog friendliness";

export default Rating;
