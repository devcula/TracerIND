import React from 'react';

import BasicDetailsForm from '../BasicDetailsForm/BasicDetailsForm';
import TestDetailsForm from '../TestDetailsForm/TestDetailsForm';

class MainForm extends React.Component {

    constructor(){
        super();
        this.state = {
            formName : "UserDetails",
            pkid: this.generatePkid(16)
        }
    }

    generatePkid = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    appendState = childState => {
        this.setState(childState);
    }

    getValue = (key) => {
        return this.state[key] === undefined ? "" : this.state[key];
    }

    submitForm = () => {
        
    }

    render() {
        switch(this.state.formName){
            case "UserDetails":
                console.log(this.state);
                return <BasicDetailsForm changeData={this.appendState} getValue={this.getValue} />
            case "TestDetails":
                console.log(this.state);
                return <TestDetailsForm changeData={this.appendState} getValue={this.getValue} />
            default:
                return "";
        }
    }
}

export default MainForm;