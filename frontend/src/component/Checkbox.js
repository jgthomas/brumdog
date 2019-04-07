
import React from 'react';
import PropTypes from 'prop-types';


const Checkbox = ({checked}) => (
    <div>
        <input type="checkbox" checked={checked} />
    </div>
);


Checkbox.defaultProps = {
    checked: false
}

Checkbox.propTypes = {
    checked: PropTypes.bool
}

export default Checkbox;
