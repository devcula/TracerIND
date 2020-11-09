import React from 'react';

import BasicDetailsForm from '../BasicDetailsForm/BasicDetailsForm';
import TestDetailsForm from '../TestDetailsForm/TestDetailsForm';
import HospitalDetailsForm from '../HospitalDetailsForm/HospitalDetailsForm';
import ObservationsForm from '../ObservationsForm/ObservationsForm';
import BloodProfile from '../BloodProfile/BloodProfile';

import axios from 'axios';
import { uri } from '../../index';
import FormSuccess from '../FormSuccess/FormSuccess';

import { authenticationService } from '../../services';
import { authHeader } from '../../helpers';

const CryptoJS = require('crypto-js');

class MainForm extends React.Component {

    constructor() {
        super();
        this.state = {
            formName: "BasicDetails",
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

    getEncryptedAdhaar = () => {
        if (!this.state.adhaar) {
            return '';
        } else {
            let decrypted =
                this.state.adhaar;
            let encryptedText = CryptoJS.AES.encrypt(
                decrypted,
                process.env.REACT_APP_CIPHER_KEY,
            ).toString();
            // console.log(decrypted);
            // console.log(encryptedText);
            return encryptedText;
        }
    };

    submitForm = () => {
        let opdCheck = false
        let dialysisCheck = false
        let doctorreqCheck = false
        if (this.state.kidneystatus === "abnormal") {
            if (this.state.dialysis === 'true') {
                dialysisCheck = true
            }
        }
        else if (this.state.kidneystatus === "good") {
            dialysisCheck = false
        }

        if (this.state.kidneystatus === "abnormal") {

            if (this.state.doctorreq === 'true') {
                doctorreqCheck = true
            }
        }
        else if (this.state.kidneystatus === "good") {
            doctorreqCheck = false
        }

        if (this.state.kidneystatus === 'good' || this.state.doctorreq === 'false') {
            opdCheck = false
        }
        else if (this.state.kidneystatus === 'abnormal' && this.state.doctorreq === 'true') {
            opdCheck = true
        }
        let dataToSend = {
            pkid: this.state.pkid,
            adhaar: this.getEncryptedAdhaar(),
            mandal: this.state.mandal,
            phc: this.state.phc,
            villagesec: this.state.village_sec,
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
            address: this.state.address,
            PVTG: this.state.PVTG,
            pedalEdema: this.state.pedalEdema ? this.state.pedalEdema : "",
            pedal_profile:
                this.state.pedalEdema === 'N'
                    ? {}
                    : {
                        pedaltype: this.state.pedaltype,
                        dateoftesting: this.state.dateoftesting,
                        serumCreatinine: this.state.serumCreatinine
                            ? this.state.serumCreatinine
                            : 0,
                        bloodUrea: this.state.bloodUrea ? this.state.bloodUrea : 0,
                        uricAcid: this.state.uricAcid ? this.state.uricAcid : 0,
                        electrolytes_sodium: this.state.electrolytes_sodium
                            ? this.state.electrolytes_sodium
                            : 0,
                        electrolytes_potassium: this.state.electrolytes_potassium
                            ? this.state.electrolytes_potassium
                            : 0,
                        bun: this.state.bun ? this.state.bun : 0,
                    },
            // dateoftesting: this.state.dateoftesting ? this.state.dateoftesting : "",
            // serumCreatinine: this.state.serumCreatinine ? this.state.serumCreatinine : 0,
            // bloodUrea: this.state.bloodUrea ? this.state.bloodUrea : 0,
            // uricAcid: this.state.uricAcid ? this.state.uricAcid : 0,
            // electrolytes_sodium: this.state.electrolytes_sodium ? this.state.electrolytes_sodium : 0,
            // electrolytes_potassium: this.state.electrolytes_potassium ? this.state.electrolytes_potassium : 0,
            // bun: this.state.bun ? this.state.bun : 0,
            // pedaltype: this.state.pedalEdema === 'N' ? "" : this.state.pedaltype,
            // kidneystatus: this.state.kidneystatus !== undefined ? this.state.kidneystatus : "",
            // ailments: this.state.kidneystatus === "good" ? "" : this.state.ailments,
            dialysis: dialysisCheck,
            KidneyProfile: {
                kidneystatus:
                    this.state.kidneystatus !== undefined ? this.state.kidneystatus : '',
                ailments: this.state.kidneystatus === 'good' ? '' : this.state.ailments,
                dialysis: dialysisCheck,
            },
            doctorreq: doctorreqCheck,
            hospitalAdmit: this.state.hospitalAdmit !== undefined ? this.state.hospitalAdmit : "",
            dateOfAdmit: this.state.dateOfAdmit !== undefined ? this.state.dateOfAdmit : "",
            refered: this.state.refered ? this.state.refered : false,
            referredto: this.state.referred === "yes" ? this.state.referredto : "",
            ref_status: this.state.referred === "yes" ? this.state.status : "",
            treatmentDone: this.state.referred === "yes" ? this.state.treatmentDone : "",
            discharge: this.state.referred === "no" ? this.state.discharge : "",
            dischargeStatus: this.state.referred === "no" ? this.state.dischargeStatus : "",
            deceased: this.state.referred === "no" ? this.state.deceased : false,
            DetailsDeath:
                this.state.deceased === 'no'
                    ? {}
                    : {
                        deathDate:
                            this.state.deceased === 'yes' ? this.state.deathDate : '',
                        placeOfDeath:
                            this.state.deceased === 'yes' ? this.state.placeOfDeath : '',
                        causeOfDeath:
                            this.state.deceased === 'yes' ? this.state.causeOfDeath : '',
                    },
            // deathDate: this.state.deceased === "yes" ? this.state.deathDate : "",
            // placeOfDeath: this.state.deceased === "yes" ? this.state.placeOfDeath : "",
            // causeOfDeath: this.state.deceased === "yes" ? this.state.causeOfDeath : "",
            deworming: this.state.deworming ? this.state.deworming : false,
            type_data: ['dev', 'dev2'].indexOf(authenticationService.currentUserValue.username) !== -1 ? "Development" : "Production",
            opd: opdCheck,
            weight: this.state.weight ? this.state.weight : 0.0,
            height: this.state.height ? this.state.height : 0.0,
            BasicVitals: {
                Temperature: this.state.temperature,
                BP: this.state.bloodpressure,
                HR: this.state.heartrate,
                Pulse: this.state.pulserate,
                RespRate: this.state.respiratoryrate
            },
            BasicSymptoms: {
                Fever: this.state.fever,
                Cold: this.state.cold,
                Cough: this.state.cough,
                Fatigue: this.state.fatigue,
                Aches: this.state.aches,
                Diarrohea: this.state.diarrohea,
                Bleeding: this.state.bleeding,
                Infection: this.state.infection,
                others: this.state.otherSymptoms
            },
            report: {},
            patient_status: "Closed",
            habits: {
                smoking: this.state.smoking,
                drinking: this.state.drinking
            },
            AnemiaProfile: {
                dateOfBloodTest: this.state.dateOfBloodTest,
                wbc_count: this.state.wbc ? this.state.wbc : 0.0,
                hb: this.state.haemoglobin ? this.state.haemoglobin : 0.0,
                diffrential_count: {
                    monocytes: this.state.monocytes ? this.state.monocytes : null,
                    lymphocytes: this.state.lymphocytes ? this.state.lymphocytes : null,
                    eosinophils: this.state.eosinophils ? this.state.eosinophils : null,
                    neutrophils: this.state.neutrophils ? this.state.neutrophils : null,
                },
                plat_count: this.state.platelet ? this.state.platelet : 0.0,
                pcv: this.state.pcv,
                rbc: this.state.rbc,
                mcv: this.state.mcv,
                mch: this.state.mch,
                mchc: this.state.mchc,
                rdw: this.state.rdw,
            },
            // hb: this.state.haemoglobin ? this.state.haemoglobin : 0.0,
            // wbc_count: this.state.wbc ? this.state.wbc : 0.0,
            // diffrential_count: {
            //     monocytes: this.state.monocytes ? this.state.monocytes : null,
            //     lymphocytes: this.state.lymphocytes ? this.state.lymphocytes : null,
            //     eosinophils: this.state.eosinophils ? this.state.eosinophils : null
            // },
            // plat_count: this.state.platelet ? this.state.platelet : 0.0,
        }
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
            case "BasicDetails":
                return <BasicDetailsForm submit={this.submitForm} changeData={this.appendState} getValue={this.getValue} />
            case "TestDetails":
                return <TestDetailsForm submit={this.submitForm} changeData={this.appendState} getValue={this.getValue} />
            case "HospitalDetails":
                return <HospitalDetailsForm submit={this.submitForm} changeData={this.appendState} getValue={this.getValue} />
            case "Observations":
                return <ObservationsForm submit={this.submitForm} changeData={this.appendState} getValue={this.getValue} />
            case "BloodProfile":
                return <BloodProfile submit={this.submitForm} changeData={this.appendState} getValue={this.getValue} />
            case "Success":
                return <FormSuccess />
            default:
                return "";
        }
    }
}

export default MainForm;
