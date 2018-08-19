import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class CollegeForm extends Component {
  renderFields = () => {};

  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.handleSubmit(this.props.onCollegeSubmit)}>
          <Link to="/surveys" className="">
            Cancel
          </Link>
          <button type="submit" className="">
            Next
          </button>
        </form>
      </Fragment>
    );
  }
}
