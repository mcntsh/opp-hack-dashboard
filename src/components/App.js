import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Dashboard from './Dashboard';
import { CollegeList, CollegeNew } from './colleges';

class App extends Component {
    componentDidMount() {
        // Fetch top-level stuff
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <div className="container">
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/colleges" component={CollegeList} />
                        <Route path="/colleges/new" component={CollegeNew} />
                    </div>
                </Router>
            </div>
        );
    }
}

App.propTypes = {
    fetchUser: PropTypes.func.isRequired
};

export default connect(
    null,
    actions
)(App);
