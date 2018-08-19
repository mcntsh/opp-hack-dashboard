import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import { fetchCollege } from '../../actions';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  container: {
    marginTop: theme.spacing.unit * 4
  }
});

class CollegeView extends Component {
  componentDidMount() {}

  render() {
    const { classes } = this.props;

    return (
      <div class={classes.root}>
        <Typography variant="display1" gutterBottom>
          College
        </Typography>
        <Divider />
        <div class={classes.container}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography variant="title">Checklist</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="title">Deadlines</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="title">Resources</Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ college }) {
  return { college };
}

export default connect(
  mapStateToProps,
  { fetchCollege }
)(withStyles(styles)(CollegeView));
