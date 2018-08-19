import React, { Component, Fragment } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class CollegeView extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <Typography variant="display3" gutterBottom>
                    College
                </Typography>
                <Grid container justify="center" spacing={16}>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="display4">
                                Checklist
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="display4">
                                Deadlines
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="display4">
                                Resources
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}
