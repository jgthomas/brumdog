
import React, { Component } from 'react';

import Listings from './Listings';

const getURL = "http://192.168.0.16:5000/load";


class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pubs: {},
        };
    }

    componentDidMount() {
        fetch(getURL, { method: 'GET', mode: 'cors' })
            .then(response => response.json())
            .then(data => this.setState( { pubs: data } ));
    }

    pubsArray() {
        return Object.values(this.state.pubs);
    }

    pubsByRating(rating) {
        return this.pubsArray().filter(pub => pub.rating >= rating);
    }

    render() {
        return (
            <div>
                <Listings pubs={this.pubsByRating(1)} />
            </div>
        );
    }
}


export default Content;
