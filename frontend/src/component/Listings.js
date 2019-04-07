
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Listing from './Listing';
import { device } from './device';


const ListingsWrapper = styled.div`
    width: 95%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    grid-auto-rows: 500px;
    grid-gap: 30px;

    @media only screen and ${device.laptopLarge} {
      width: 70%;
    }

    @media only screen and ${device.laptopHuge} {
      width: 60%
    }

    @media only screen and ${device.desktopLarge} {
      width: 50%;
    }

    @media only screen and ${device.desktopHuge} {
      width: 40%;
    }
`;


const Listings = (props) => (
    <ListingsWrapper>
        {props.pubs.map( pub => {
            return <Listing
                name={pub.name}
                rating={pub.rating}
                imageName={pub.imageName}
                description={pub.description}
                key={pub.id}
            />;
        })}
    </ListingsWrapper>
);


Listings.propTypes = {
    pubs: PropTypes.array,
};

export default Listings;
