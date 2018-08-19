import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchColleges } from '../../actions';
import { Link } from 'react-router-dom';

import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import SchoolIcon from '@material-ui/icons/School';
import MoodIcon from '@material-ui/icons/Mood';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

class CollegeList extends Component {
  state = {
    schools: []
  };
  componentDidMount() {
    axios
      .post('https://f-connect.herokuapp.com/graphql', {
        query: `
          query {

    schools(limit: 100) {
            name,
            type
          }
          }
                `
      })
      .then(res => {
        this.setState({ schools: res.data.data.schools });
      });
  }

  schoolTypeName = {
    COLLEGE: 'College',
    HIGH_SCHOOL: 'High School',
    MIDDLE_SCHOOL: 'Middle School',
    OTHER: 'Miscellaneous'
  };

  schoolTypeIcon = {
    COLLEGE: <SchoolIcon />,
    HIGH_SCHOOL: <MoodIcon />,
    MIDDLE_SCHOOL: <MoodIcon />,
    OTHER: <MoodIcon />
  };

  render() {
    return (
      <List>
        {this.state.schools.map((college, key) => (
          <ListItem key={key}>
            <Avatar>{this.schoolTypeIcon[college.type]}</Avatar>
            <ListItemText
              primary={college.name}
              secondary={this.schoolTypeName[college.type]}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

function mapStateToProps({ colleges }) {
  return { colleges };
}

export default connect(
  mapStateToProps,
  { fetchColleges }
)(CollegeList);
