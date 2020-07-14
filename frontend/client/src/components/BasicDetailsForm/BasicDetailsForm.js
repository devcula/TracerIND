import React from 'react';

import {
    Grid,
    Box,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    Typography,
    TextField,
    Card,
    CardContent
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

class BasicDetailsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    validateAndNext = () => {
        //Conditions to check.. If valid, Send form name to switch to next form
        console.log(this.state);
        this.props.changeData(this.state);
        this.loadNextForm("TestDetails");
    }

    loadNextForm = (formName) => {
        this.props.changeData({ formName: formName });
    } 

    render() {
        const classes = useStyles();
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Basic User Details
                </Typography>
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Card>
                        <CardContent>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    onChange={this.handleChange('firstName')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
                                    onChange={this.handleChange('lastName')}
                                />
                            </Grid>
                            <Grid>
                                <Button variant="contained" color="primary" onClick={this.validateAndNext}>
                                    Next
                                </Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </React.Fragment>
        )
    }
}

export default BasicDetailsForm;