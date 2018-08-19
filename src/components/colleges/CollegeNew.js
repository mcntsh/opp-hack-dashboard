import React, { Component } from 'react';
import CollegeForm from './CollegeForm';

import { reduxForm } from 'redux-form';

class CollegeNew extends Component {
  state = {
    showReview: false
  };

  render() {
    return <CollegeForm onSubmit={() => {}} />;
  }
}

export default reduxForm({
  form: 'collegeForm'
})(CollegeForm);
