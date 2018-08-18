import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchColleges } from '../../actions';

class CollegeList extends Component {
  componentDidMount() {
    this.props.fetchColleges();
  }

  renderSurveys = () => {
    return this.props.colleges.reverse().map(college => {
      return (
          <div></div>
      );
    });
  };

  render() {
    return <div>{this.renderColleges()}</div>;
  }
}

function mapStateToProps({ colleges }) {
  return { colleges };
}

export default connect(
    mapStateToProps,
    { fetchColleges }
)(CollegeList);
