import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchColleges } from '../../actions';
import { Link } from 'react-router-dom';

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

  componentDidMount() {
      this.props.fetchColleges();
  }

    schoolTypeName = {
        COLLEGE: 'College',
        HIGH_SCHOOL: 'High School',
        MIDDLE_SCHOOL: 'Middle School',
        OTHER: 'Miscellaneous'
    }

    schoolTypeIcon = {
        COLLEGE: <SchoolIcon/>,
        HIGH_SCHOOL: <MoodIcon/>,
        MIDDLE_SCHOOL: <MoodIcon/>,
        OTHER: <MoodIcon/>,
    }

    render() {
        return (
            <List>
                { this.props.colleges.map(college => ( 
                    <ListItem>
                        <Avatar>
                            {this.schoolTypeIcon[college.type]}
                        </Avatar>
                        <ListItemText primary={college.name} secondary={this.schoolTypeName[college.type]}/>
                        <ListItemSecondaryAction>
                            <IconButton component={Link} to={`/colleges/${college.name}`} aria-label="Delete">
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )) }
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
