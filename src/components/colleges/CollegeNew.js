import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitCollege } from '../../actions';
import CollegeForm from './CollegeForm';

class CollegeNew extends Component {
  state = {
    showReview: false
  };

  render() {
    return <CollegeForm onSubmit={() => {}} />;
  }
}

export default connect(
  {},
  { submitCollege }
)(CollegeNew);
