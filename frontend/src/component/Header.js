
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.css';

class Header extends Component {
    render() {
        return (
          <div>
            <h1 className="page-title">{this.props.pageTitle}</h1>
            <p className="tagline">Drinking with a dog in brum</p>
          </div>
        );
    }
}

Header.propTypes = {
    pageTitle: PropTypes.string,
};

export default Header;
