
import React from 'react';
import PropTypes from 'prop-types';


const CheckBox = ({checked}) => (
    <div>
        <input type="checkbox" checked={checked} />
    </div>
);


CheckBox.defaultProps = {
    checked: false
}

CheckBox.propTypes = {
    checked: PropTypes.bool
}

export default CheckBox;
