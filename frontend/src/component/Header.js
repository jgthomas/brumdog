
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = (props) => (
    <div style={titleBlockStyle}>
      <h1 style={titleStyle}>{props.pageTitle}</h1>
      <p style={tagLineStyle}>{tagLine}</p>
      <nav style={navLinkBlockStyle}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/ratings_guide" style={navLinkStyle}>Our ratings</Link>
      </nav>
    </div>
);

const titleBlockStyle = {
    color: 'dodgerblue',
    textAlign: 'center'
}

const titleStyle = {
    fontSize: '3em'
}

const tagLineStyle = {
    fontStyle: 'italic',
    fontSize: '1.15em',
    marginBottom: '0.5em'
}

const navLinkBlockStyle = {
    width: '40%',
    margin: 'auto',
    marginTop: '3em',
    display: 'flex',
    justifyContent: 'space-around'
}

const navLinkStyle = {
    color: 'dodgerblue',
    outline: 'none',
    textDecoration: 'none'
}

const tagLine = "Drinking with a dog in brum";


Header.propTypes = {
    pageTitle: PropTypes.string,
};

export default Header;
