import React from 'react';

import BasicDetailsForm from '../BasicDetailsForm/BasicDetailsForm';
import TestDetailsForm from '../TestDetailsForm/TestDetailsForm';
import HospitalDetailsForm from '../HospitalDetailsForm/HospitalDetailsForm';

import axios from 'axios';
import { uri } from '../../index';
import FormSuccess from '../FormSuccess/FormSuccess';

import { authenticationService } from '../../services';
import { authHeader } from '../../helpers';

class MainForm extends React.Component {

    constructor() {
        super();
        this.state = {
            formName: "UserDetails",
            pkid: this.generatePkid(32)
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

    appendState = (childState, callback) => {
        if (callback) {
            this.setState(childState, callback());
        }
        else {
            this.setState(childState);
        }
    }

    getValue = (key) => {
        return this.state[key] === undefined ? "" : this.state[key];
    }

    submitForm = () => {
        // console.log("Inside submit form");
        console.log(this.state.pedalEdema)
        console.log(this.state.pedaltype)
        console.log(this.state.dateoftesting)
        console.log(this.state.pedaltype)
        console.log(this.state.name)
        let  dataToSend = {
            pkid: this.state.pkid,
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
            dateoftesting: this.state.dateoftesting ? this.state.dateoftesting : "",
            serumCreatinine: this.state.serumCreatinine ? this.state.serumCreatinine : 0,
            bloodUrea: this.state.bloodUrea ? this.state.bloodUrea : 0,
            uricAcid: this.state.uricAcid ? this.state.uricAcid : 0,
            electrolytes_sodium: this.state.electrolytes_sodium ? this.state.electrolytes_sodium : 0,
            electrolytes_potassium: this.state.electrolytes_potassium ? this.state.electrolytes_potassium : 0,
            bun: this.state.bun ? this.state.bun : 0,
            pedalEdema: this.state.pedalEdema ? this.state.pedalEdema : "",
           // pedaltype: this.state.pedaltype ? this.state.pedaltype : "",
            pedaltype: this.state.pedalEdema === 'N' ? "" : this.state.pedaltype,
            kidneystatus: this.state.kidneystatus !== undefined ? this.state.kidneystatus : "",
            ailments: this.state.ailments !== undefined ? this.state.ailments : "",
            dialysis: this.state.dialysis ? this.state.dialysis : false,
            doctorreq: this.state.doctorreq ? this.state.doctorreq : false,
            hospitalAdmit: this.state.hospitalAdmit !== undefined ? this.state.hospitalAdmit : "",
            dateOfAdmit: this.state.dateOfAdmit !== undefined ? this.state.dateOfAdmit : "",
            refered: this.state.refered ? this.state.refered : false,
            referredto: this.state.referredto !== undefined ? this.state.referredto : "",
            status: this.state.status !== undefined ? this.state.status : "",
            treatmentDone: this.state.treatmentDone !== undefined ? this.state.treatmentDone : "",
            discharge: this.state.discharge !== undefined ? this.state.discharge : "",
            dischargeStatus: this.state.dischargeStatus !== undefined ? this.state.dischargeStatus : "",
            deceased: this.state.deceased ? this.state.deceased : false,
            deathDate: this.state.deathDate !== undefined ? this.state.deathDate : "",
            placeOfDeath: this.state.placeOfDeath !== undefined ? this.state.placeOfDeath : "",
            causeOfDeath: this.state.causeOfDeath !== undefined ? this.state.causeOfDeath : "",
            deworming: this.state.deworming ? this.state.deworming : false,
            type_data: authenticationService.currentUserValue.firstName === 'test' ? "Development" : "Production",
            opd: this.state.opd ? this.state.opd : false
        }
        console.log(this.state.pedaltype)
        axios.post(uri + 'AddPatient/',
            dataToSend,
            {
                headers: authHeader()
            }).then(response => {
                    console.log(dataToSend);
                    // console.log("Sending data");
                    // console.log(response);
                    if (response.data.pkid === this.state.pkid) {
                        this.setState({}, this.setState({ formName: "Success" }));
                    }
                    else {
                        alert("Failed to save.. Please Try again");
                        // this.setState({ formName: "Success" });
                    }
                })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        switch (this.state.formName) {
            case "UserDetails":
                // console.log(this.state);
                return <BasicDetailsForm submit={this.submitForm} changeData={this.appendState} getValue={this.getValue} />
            case "TestDetails":
                // console.log(this.state);
                return <TestDetailsForm submit={this.submitForm} changeData={this.appendState} getValue={this.getValue} />
            case "HospitalDetails":
                // console.log(this.state);
                return <HospitalDetailsForm submit={this.submitForm} changeData={this.appendState} getValue={this.getValue} />
            case "Success":
                // console.log(this.state);
                return <FormSuccess />
            default:
                return "";
        }
    }
}

export default MainForm;
