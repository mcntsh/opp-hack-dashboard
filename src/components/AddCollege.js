import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import gql from 'graphql-tag';

const styles = theme => ({
  container: {
    top: 25,
    height: 0,
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

class AddCollege extends React.Component {
  state = {
    name: '',
    type: '',
    registrationDeadline: '',
    checklist: [],
    counter: 0,
    checklistData: []
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeType = event => {
    this.setState({ type: event.target.value });
  };

  handleChangeDate = event => {
    this.setState({ registrationDeadline: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div
          style={{
            padding: 20
          }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">
              Enter College/School Name
            </InputLabel>
            <Input
              style={{
                width: 800
              }}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">School Type</InputLabel>
            <Input
              style={{
                width: 300
              }}
              value={this.state.type}
              onChange={this.handleChangeType}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Registration Deadline</InputLabel>
            <Input
              style={{
                width: 300
              }}
              value={this.state.registrationDeadline}
              onChange={this.handleChangeDate}
            />
          </FormControl>
          <Grid container spacing={24}>
            {this.getChecklistItems()}
          </Grid>
          <Button
            style={{
              top: 25
            }}
            onClick={() => {
              let temp1 = this.state.checklist;
              let temp2 = this.state.checklistData;
              temp1.push(this.state.counter);
              temp2.push({
                name: '',
                deadline: ''
              });
              this.setState({
                checklist: temp1,
                counter: this.state.counter + 1,
                checklistData: temp2
              });
            }}
            variant="fab"
            color="primary"
            aria-label="AddCheckListItem"
            className={classes.button}
          >
            <AddIcon />
          </Button>
          <Button
            style={{
              top: 25
            }}
            onClick={() => {
              let temp1 = this.state.checklist;
              let temp2 = this.state.checklistData;
              temp1.pop();
              temp2.pop();
              this.setState({
                checklist: temp1,
                counter: this.state.counter - 1,
                checklistData: temp2
              });
            }}
            variant="fab"
            color="secondary"
            aria-label="AddCheckListItem"
            className={classes.button}
          >
            <DeleteIcon />
          </Button>

          <Button
            onClick={() => {
              this.submitForm();
            }}
            style={{
              top: 25,
              marginLeft: 450
            }}
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            <SaveIcon />
            Add School
          </Button>
        </div>
      </div>
    );
  }

  submitForm() {
    axios
      .post('https://f-connect.herokuapp.com/graphql', {
        query: `
      mutation addSchool($name: String!, $registrationDeadline: String!){
        addSchool(name:$name, registrationDeadline:$registrationDeadline){
          users{
            firstName
          }
        }
      }
      `,
        variables: {
          name: this.state.name,
          registrationDeadline: this.state.registrationDeadline,
          type: this.state.type
        }
      })
      .then(res => {
        console.log('adding Checklists');
        let requests = [];
        if (this.state.checklistData.length === 0) {
          console.log('added Checklists');
          this.setState({
            name: '',
            type: '',
            registrationDeadline: '',
            checklist: [],
            counter: 0,
            checklistData: []
          });
        }
        this.state.checklistData.forEach(checklist => {
          console.log;
          requests.push(
            axios.post('https://f-connect.herokuapp.com/graphql', {
              query: `
          mutation addSchoolEvent($name: String, $deadline: String, $schoolName: String){
            addSchoolEvent(name:$name, deadline:$deadline, schoolName: $schoolName){
              users{
                firstName
              }
            }
          }
          `,
              variables: {
                name: checklist.name,
                deadline: checklist.deadline,
                schoolName: this.state.name
              }
            })
          );

          axios.all(requests).then(res => {
            this.setState({
              name: '',
              type: '',
              registrationDeadline: '',
              checklist: [],
              counter: 0,
              checklistData: []
            });
          });
        });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  handleChecklistName = (checklist, event) => {
    console.log(checklist, event);
    let temp = this.state.checklistData;
    temp[checklist].name = event.target.value;
    this.setState({ checklistData: temp });
  };

  handleChecklistDate = (checklist, event) => {
    console.log(checklist, event);
    let temp = this.state.checklistData;
    temp[checklist].deadline = event.target.value;
    this.setState({ checklistData: temp });
  };

  getChecklistItems() {
    const { classes } = this.props;
    return this.state.checklist.map(checklist => {
      return (
        <Grid item xs>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Enter Checklist Item</InputLabel>
            <Input
              style={{
                width: 500
              }}
              value={this.state.checklistData[checklist].name}
              onChange={this.handleChecklistName.bind(this, checklist)}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Enter Date</InputLabel>
            <Input
              style={{
                width: 250
              }}
              value={this.state.checklistData[checklist].deadline}
              onChange={this.handleChecklistDate.bind(this, checklist)}
            />
          </FormControl>
        </Grid>
      );
    });
  }
}

AddCollege.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddCollege);
