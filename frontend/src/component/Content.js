
import React, { Component } from 'react';

import Rating from './Rating';
import Listings from './Listings';

const getURL = "http://localhost:5000/load";

class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pubs: {},
        };
    }

    componentDidMount() {
        fetch(getURL)
            .then(response => response.json())
            .then(data => this.setState( { pubs: data } ));
    }

    render() {
        return (
            <div>
                <Rating />
                <Listings pubs={Object.values(this.state.pubs)} />
            </div>
        );
    }
}

export default Content;
