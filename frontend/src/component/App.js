
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import RatingsGuide from './RatingsGuide';

import './App.css';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Header pageTitle="BrumDog" />
            <Route exact path="/" render={props => (
                <React.Fragment>
                <Content />
                </React.Fragment>
            )} />
            <Route path="/ratings_guide" component={RatingsGuide} />
          </div>
        </Router>
    );
  }
}


export default App;
