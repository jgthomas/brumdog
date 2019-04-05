
import React, { Component } from 'react';

import './App.css';
import './Rating.css';


class Rating extends Component {
    render() {
        return (
            <div className="content-box rating-box">
                <div className="rating-text">
                    <div className="rating-icons">
                        <p className="dog-paw">D</p>
                        <p className="dog-paw">DD</p>
                        <p className="dog-paw">DDD</p>
                    </div>
                    <div className="rating-description">
                        <p>tolerated</p>
                        <p>welcomed</p>
                        <p>loved</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rating;
