import React, { Component } from 'react';

import Listings from './Listings';
//import PubPage from './PubPage';
import Rating from './Rating';

const getURL = "http://localhost:5000/load";

class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pubs: {},
            allPubs: -1,
            pubId: -1,
        };

        this.setPubId = this.setPubId.bind(this);

    }

    setPubId(id) {
        this.setState({pubId: id})
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
                <Listings setId={this.setPubId.bind(this)}
                          pubs={Object.values(this.state.pubs)} />
            </div>
        );
    }
}

export default Content;
