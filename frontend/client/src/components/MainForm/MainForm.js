import React from 'react';

import BasicDetailsForm from '../BasicDetailsForm/BasicDetailsForm';
import TestDetailsForm from '../TestDetailsForm/TestDetailsForm';
import HospitalDetailsForm from '../HospitalDetailsForm/HospitalDetailsForm';

import axios from 'axios';
import { uri } from '../../index';
import FormSuccess from '../FormSuccess/FormSuccess';

class MainForm extends React.Component {

    constructor() {
        super();
        this.state = {
            formName: "UserDetails",
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
        let dataToSend = {
            adhaar: this.state.adhaar,
            village: this.state.village,
            name: this.state.name,
            surname: this.state.surname,
            relation: this.state.relation,
            gaurdian_name: this.state.gaurdian_name,
            age: this.state.age,
            gender: this.state.gender,
            maritalstatus: this.state.maritalstatus,
            phone: this.state.phone,
            bloodgroup: this.state.bloodgroup,
            PVGT: this.state.PVGT,
            serumCreatinine: this.state.serumCreatinine,
            bloodUrea: this.state.bloodUrea,
            uricAcid: this.state.uricAcid,
            electrolytes_sodium: this.state.electrolytes_sodium,
            electrolytes_potassium: this.state.electrolytes_potassium,
            bun: this.state.bun,
            pedalEdema: this.state.pedalEdema,
            pedalType: this.state.pedalType,
            kidneystatus: this.state.kidneystatus,
            ailments: this.state.ailments,
            dialysis: this.state.dialysis,
            doctorreq: this.state.doctorreq,
            hospitalAdmit: this.state.hospitalAdmit,
            dateOfAdmit: this.state.dateOfAdmit,
            refered: this.state.refered,
            referredto: this.state.referredto,
            status: this.state.status,
            treatmentDone: this.state.treatmentDone,
            // dialysis: this.state.dialysis,
            discharge: this.state.discharge,
            dischargeStatus: this.state.dischargeStatus,
            deceased: this.state.deceased,
            deathDate: this.state.deathDate,
            placeOfDeath: this.state.placeOfDeath,
            causeOfDeath: this.state.causeOfDeath
        }

        axios.post(uri + 'AddPatient/', dataToSend).then(response => {
            if (response.data.pkid === this.state.pkid) {
                console.log(response);
                alert("Data saved");
            }
            // this.setState({formName: "Success"});
        })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        switch (this.state.formName) {
            case "UserDetails":
                console.log(this.state);
                return <BasicDetailsForm submit={this.submitForm} changeData={this.appendState} getValue={this.getValue} />
            case "TestDetails":
                console.log(this.state);
                return <TestDetailsForm submit={this.submitForm} changeData={this.appendState} getValue={this.getValue} />
            case "HospitalDetails":
                console.log(this.state);
                return <HospitalDetailsForm submit={this.submitForm} changeData={this.appendState} getValue={this.getValue} />
            case "Success":
                console.log(this.state);
                return <FormSuccess />
            default:
                return "";
        }
    }
}

export default MainForm;
