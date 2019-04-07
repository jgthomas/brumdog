
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
    render() {
        return (
          <div style={titleBlockStyle}>
            <h1 style={titleStyle}>{this.props.pageTitle}</h1>
            <p style={tagLineStyle}>Drinking with a dog in brum</p>
          </div>
        );
    }
}

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

Header.propTypes = {
    pageTitle: PropTypes.string,
};

export default Header;
