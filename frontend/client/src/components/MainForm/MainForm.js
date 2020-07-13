import React from 'react';

import BasicDetailsForm from '../BasicDetailsForm/BasicDetailsForm';
import TestDetailsForm from '../TestDetailsForm/TestDetailsForm';

class MainForm extends React.Component {

    constructor(){
        super();
        this.state = {
            formName : "UserDetails",
        }
    }

    appendState = childState => {
        this.setState(childState);
    }

    render() {
        switch(this.state.formName){
            case "UserDetails":
                console.log(this.state);
                return <BasicDetailsForm changeData={this.appendState} />
            case "TestDetails":
                console.log(this.state);
                return <TestDetailsForm changeData={this.appendState}/>
            default:
                return "";
        }
    }
}

export default MainForm;