import React from 'react';

import { Grid } from '@material-ui/core';

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

    validateAndNext= () => {
        //Conditions to check.. If valid, Send form name to switch to next form
        console.log(this.state);
        this.props.changeData(this.state);
        this.loadNextForm("TestDetails");
    }

    loadNextForm = (formName) => {
        this.props.changeData({formName: formName});
    }

    render() {
        return (
            <Grid container alignItems="center" justify="center">
                <div>Basic Details Form</div>
                <div>
                    <input type="text" id="firstName" onChange={this.handleChange('firstName')} />
                    <input type="text" id="lastName" onChange={this.handleChange('lastName')} />
                    <button onClick={this.validateAndNext}>Next</button>
                </div>
            </Grid>
        )
    }
}

export default BasicDetailsForm;