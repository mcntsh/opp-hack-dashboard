import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchColleges } from '../../actions';

class CollegeList extends Component {
    state: {
        colleges: [],
    }

<<<<<<< Updated upstream
  renderSurveys = () => {
    return this.props.colleges.reverse().map(college => {
      return <div />;
    });
  };
=======
    componentDidMount() {
        this.props.fetchColleges();
    }
>>>>>>> Stashed changes

    renderColleges = () => {
        return this.props.colleges.map(college => {
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
