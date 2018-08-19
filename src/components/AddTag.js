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

class AddTag extends React.Component {
  state = {
    name: ''
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
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
              Enter Search Phrase to Crawl
            </InputLabel>
            <Input
              style={{
                width: 800
              }}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormControl>
          <Button
            onClick={() => {
              this.submitForm();
            }}
            style={{
              top: 25,
              marginLeft: 600
            }}
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            <SaveIcon />
            Add Phrase
          </Button>
        </div>
      </div>
    );
  }

  submitForm() {
    axios
      .post('https://f-connect.herokuapp.com/graphql', {
        query: `
      mutation addResourceTag($name: String!){
        addResourceTag(name:$name){
          users{
            firstName
          }
        }
      }
      `,
        variables: {
          name: this.state.name
        }
      })
      .then(res => {
        this.setState({
          name: '',
          type: '',
          registrationDeadline: '',
          checklist: [],
          counter: 0,
          checklistData: []
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

AddTag.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddTag);
