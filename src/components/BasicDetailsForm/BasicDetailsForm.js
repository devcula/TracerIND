import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PHC from '../PHC/PHC';
import VillageSec from '../VillageSecretariat/VillageSec';
import Village from '../Village/Village';
import axios from 'axios';

import { authHeader } from '../../helpers';

import './BasicDetailsForm.css';
class BasicDetailsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adhaarFirst: "",
            adhaarSecond: "",
            adhaarThird: "",
            mandal: props.getValue('mandal'),
            phc: props.getValue('phc'),
            village_sec: props.getValue('village_sec'),
            village: props.getValue('village'),
            name: props.getValue('name'),
            surname: props.getValue('surname'),
            relation: props.getValue('relation'),
            gaurdian_name: props.getValue('gaurdian_name'),
            age: props.getValue('age'),
            gender: props.getValue('gender'),
            maritalstatus: props.getValue('maritalstatus'),
            phone: props.getValue('phone'),
            bloodgroup: props.getValue('bloodgroup'),
            PVTG: props.getValue('PVTG'),
            address: props.getValue('address'),
            deworming: props.getValue('deworming'),
            phcList: props.getValue('phcList'),
            villageList: props.getValue('villageList'),
            villageSecList: props.getValue('villageSecList'),
            phcLoading: false,
            villageSecLoading: false,
            villageLoading: false
        }
    }

    uri = process.env.REACT_APP_SERVER_URI;

    componentDidMount = () => {
        let adhaarNumber = this.props.getValue('adhaar');
        if (adhaarNumber) {
            this.setState({ adhaarFirst: adhaarNumber.substring(0, 4) });
            this.setState({ adhaarSecond: adhaarNumber.substring(4, 8) });
            this.setState({ adhaarThird: adhaarNumber.substring(8, 12) });
        }
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    fetchOrUpdatePHCList = event => {
        this.setState(
            {
                mandal: event.target.value,
                phcList: [],
                phc: "",
                villageSecList: [],
                village_sec: "",
                villageList: [],
                village: "",
                phcLoading: true,
                loading:true
            }
        );
        if (event.target.value) {
            console.log("Getting phcs");
            axios.post(this.uri + 'GetPHCData/'
                , {
                    mandal_id: event.target.value
                },
                {
                    headers: authHeader()
                })
                .then(response => {
                    this.setState({ phcList: response.data, phcLoading: false });
                })
                .catch(err => {
                    throw err;
                });
        }
    }

    fetchOrUpdateVillageSecList = (phc) => {
        this.setState(
            {
                phc: phc,
                villageSecList: [],
                village_sec: "",
                villageList: [],
                village: "",
                villageSecLoading: true
            }
        );
        if (phc) {
            console.log("Getting village secs");
            axios.post(this.uri + 'GetVillageSecData/',
                {
                    PHC_id: phc
                },
                {
                    headers: authHeader()
                })
                .then(response => {
                    this.setState({ villageSecList: response.data, villageSecLoading: false });
                })
                .catch(err => {
                    throw err;
                });
        }
    }

    fetchOrUpdateVillageList = (villageSec) => {
        this.setState({ villageList: [], village: "", village_sec: villageSec, villageLoading: true });
        if (villageSec) {
            console.log("Getting villages");
            axios.post(this.uri + 'GetVillageData/',
                {
                    villagesec_id: villageSec
                },
                {
                    headers: authHeader()
                })
                .then(response => {
                    this.setState({ villageList: response.data, villageLoading: false });
                })
                .catch(err => {
                    throw err;
                });
        }
    }

    validate = () => {
        //Conditions to check.. If valid, Send form name to switch to next form
        // console.log(this.state);
        let validIds = [];
        let invalidIds = [];
        try {
            //Adhaar fields validation
            let adhaarIds = ["adhaarFirst", "adhaarSecond", "adhaarThird"];
            let filled = false;
            for (let i = 0; i < adhaarIds.length; i++) {
                if (this.state[adhaarIds[i]] !== "") {
                    filled = true;
                    break;
                }
            }
            if (filled) {
                for (let i = 0; i < adhaarIds.length; i++) {
                    if (this.state[adhaarIds[i]].length < 4) {
                        invalidIds.push(adhaarIds[i]);
                    }
                    else {
                        validIds.push(adhaarIds[i]);
                    }
                }
            }
            //Other field validations
            Boolean(this.state.mandal) ? validIds.push('mandal') : invalidIds.push('mandal');
            Boolean(this.state.phc) ? validIds.push('phc') : invalidIds.push('phc');
            Boolean(this.state.village_sec) ? validIds.push('village_sec') : invalidIds.push('village_sec');
            Boolean(this.state.village) ? validIds.push('village') : invalidIds.push('village');
            Boolean(this.state.name) ? validIds.push('name') : invalidIds.push('name');
            Boolean(this.state.surname) ? validIds.push('surname') : invalidIds.push('surname');
            Boolean(this.state.relation) ? validIds.push('relation') : invalidIds.push('relation');
            Boolean(this.state.gaurdian_name) ? validIds.push('gaurdian_name') : invalidIds.push('gaurdian_name');
            Boolean(this.state.age) ? validIds.push('age') : invalidIds.push('age');
            Boolean(this.state.gender) ? validIds.push('gender') : invalidIds.push('gender');
            Boolean(this.state.maritalstatus) ? validIds.push('maritalstatus') : invalidIds.push('maritalstatus');
            Boolean(this.state.bloodgroup) ? validIds.push('bloodgroup') : invalidIds.push('bloodgroup');
            Boolean(this.state.PVTG) ? validIds.push('PVTG') : invalidIds.push('PVTG');
            if (this.state.phone === "" || this.state.phone.length !== 10) {
                invalidIds.push('phone');
            }
            else {
                validIds.push('phone');
            }
            for (let i = 0; i < validIds.length; i++) {
                document.getElementById(validIds[i]).style.border = "";
            }
            if (invalidIds.length > 0) {
                window.location.href = "#" + invalidIds[0];
                for (let i = 0; i < invalidIds.length; i++) {
                    document.getElementById(invalidIds[i]).style.border = "2px solid red";
                }
                document.getElementById(invalidIds[0]).focus();
                throw new Error();
            }
            else {
                window.location.href = "#";
            }
            //Still in try block? Means all fields valid. Now saving the data to parent component.
            this.saveData();
            this.props.changeData({ formName: "Observations" });
        }
        catch (err) {
            // console.log(false);
        }
    }

    saveData = async () => {
        let dataToSave = {
            adhaar: this.state.adhaarFirst + this.state.adhaarSecond + this.state.adhaarThird,
            mandal: this.state.mandal,
            phc: this.state.phc,
            village_sec: this.state.village_sec,
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
            PVTG: this.state.PVTG,
            address: this.state.address,
            children: this.state.children,
            deworming: this.state.deworming,
            phcList: this.state.phcList,
            villageList: this.state.villageList,
            villageSecList: this.state.villageSecList
        }

        await new Promise(resolve => this.props.changeData(dataToSave, () => resolve()));
    }

    loadNextForm = (formName) => {
        this.props.changeData({ formName: formName });
    }

    restrictDigits = length => event => {
        let strValue = event.target.value.toString();
        if (strValue.length > length) {
            event.target.value = Number(strValue.substring(0, length));
        }
        this.setState({ [event.target.id]: event.target.value.toString() });
        if (event.target.id.includes('adhaar')) {
            this.changeAdhaarFocus(event.target.id, event.target.value);
        }
    }

    updateState = (valueObj) => {
        this.setState(valueObj);
    }

    changeAdhaarFocus = (id, value) => {
        if (id === 'adhaarFirst' && value.length === 4) {
            document.getElementById('adhaarSecond').focus();
        }
        else if (id === 'adhaarSecond' && value.length === 4) {
            document.getElementById('adhaarThird').focus();
        }
    }

    render() {

        const styles = {
            center: {
                textAlign: "center"
            },
            paddingLeft: {
                paddingLeft: "10px"
            },
            left: {
                textAlign: "left"
            },
            right: {
                textAlign: "right"
            }
        }
        return (
            <Container>
                <Row>
                    <fieldset style={{ 'width': '100%', ...styles.center }}>
                        <legend>Basic Details</legend>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3} xs={12}>
                                        <Form.Label>Aadhar Number : </Form.Label>
                                    </Col>
                                    <Col sm={3} xs={4}>
                                        <Form.Control
                                            min="0"
                                            max="9999"
                                            type="number"
                                            onChange={this.restrictDigits(4)}
                                            placeholder="XXXX"
                                            id="adhaarFirst"
                                            value={this.state.adhaarFirst}
                                            className="adhaar-field"
                                        />
                                    </Col>
                                    <Col sm={3} xs={4}>
                                        <Form.Control
                                            min="0"
                                            max="9999"
                                            type="number"
                                            onChange={this.restrictDigits(4)}
                                            placeholder="XXXX"
                                            id="adhaarSecond"
                                            value={this.state.adhaarSecond}
                                            className="adhaar-field"
                                        />
                                    </Col>
                                    <Col sm={3} xs={4}>
                                        <Form.Control
                                            min="0"
                                            max="9999"
                                            type="number"
                                            onChange={this.restrictDigits(4)}
                                            placeholder="XXXX"
                                            id="adhaarThird"
                                            value={this.state.adhaarThird}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Mandal :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.fetchOrUpdatePHCList}
                                            id="mandal"
                                            value={this.state.mandal}
                                        >
                                            <option value="">Select Mandal</option>
                                            <option value="01">Chintoor</option>
                                            <option value="02">Yetapaka</option>
                                            <option value="03">Kunnavaram</option>
                                            <option value="04">V.R Puram</option>
                                        </Form.Control>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Label>PHC :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <PHC phcList={this.state.phcList}
                                            phcValue={this.state.phc}
                                            fetchVillageSec={this.fetchOrUpdateVillageSecList}
                                            loading={this.state.phcLoading}
                                            id="phc"
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Village Secretariat :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <VillageSec
                                            id="village_sec"
                                            villageSecValue={this.state.village_sec}
                                            villageSecList={this.state.villageSecList}
                                            loading={this.state.villageSecLoading}
                                            fetchVillages={this.fetchOrUpdateVillageList}
                                        />
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Label>Village :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Village
                                            updateValue={this.updateState}
                                            id="village"
                                            villageList={this.state.villageList}
                                            loading={this.state.villageLoading}
                                            villageValue={this.state.village}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>First Name :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            type="text"
                                            placeholder="First Name"
                                            id="name"
                                            onChange={this.handleChange('name')}
                                            value={this.state.name} />
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Label>Surname :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            type="text"
                                            placeholder="Surname"
                                            onChange={this.handleChange('surname')}
                                            id="surname"
                                            value={this.state.surname} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Row>
                                    <Col sm={3}>
                                        <Form.Label>S/o, D/o, W/o:</Form.Label>
                                    </Col>
                                    <Col sm={3} id="relation" style={styles.left}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="son"
                                                    id="sonOf"
                                                    label="Son of"
                                                    name="relation"
                                                    onChange={this.handleChange('relation')}
                                                    checked={this.state.relation === "son"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="daughter"
                                                    id="daughterOf"
                                                    label="Daughter of"
                                                    name="relation"
                                                    onChange={this.handleChange('relation')}
                                                    checked={this.state.relation === "daughter"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="wife"
                                                    id="wifeOf"
                                                    label="Wife of"
                                                    name="relation"
                                                    onChange={this.handleChange('relation')}
                                                    checked={this.state.relation === "wife"}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={3} style={{ display: this.state.relation ? 'block' : 'none' }}>
                                        <Form.Label>Guardian Name :</Form.Label>
                                    </Col>
                                    <Col sm={3} style={{ display: this.state.relation ? 'block' : 'none' }}>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            onChange={this.handleChange('gaurdian_name')}
                                            id="gaurdian_name"
                                            value={this.state.gaurdian_name}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="age">
                                    <Col sm={3}>
                                        <Form.Label>Age : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            min="0"
                                            max="99"
                                            type="number"
                                            placeholder="Enter age"
                                            onChange={this.restrictDigits(2)}
                                            value={this.state.age} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Row>
                                    <Col sm={3}>
                                        <Form.Label>Sex :</Form.Label>
                                    </Col>
                                    <Col sm={3} id="gender" style={styles.left}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="M"
                                                    id="male"
                                                    label="Male"
                                                    name="gender"
                                                    onChange={this.handleChange('gender')}
                                                    checked={this.state.gender === "M"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="F"
                                                    id="female"
                                                    label="Female"
                                                    name="gender"
                                                    onChange={this.handleChange('gender')}
                                                    checked={this.state.gender === "F"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="NB"
                                                    id="transgender"
                                                    label="Transgender"
                                                    name="gender"
                                                    onChange={this.handleChange('gender')}
                                                    checked={this.state.gender === "MB"}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Marital Status :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('maritalstatus')}
                                            id="maritalstatus"
                                            value={this.state.maritalstatus}
                                        >
                                            <option value="">Select</option>
                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                            <option value="separated">Separated</option>
                                            <option value="divorced">Divorced</option>
                                            <option value="widowed">Widowed</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Phone Number : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            min="0"
                                            max="9999999999"
                                            type="number"
                                            placeholder="Enter Contact number"
                                            id="phone"
                                            onChange={this.restrictDigits(10)}
                                            value={this.state.phone} />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="address">
                                    <Col sm={3}>
                                        <Form.Label>Address : </Form.Label>
                                    </Col>
                                    <Col sm={6}>
                                        <textarea
                                            placeholder="Enter address"
                                            value={this.state.address}
                                            onChange={this.handleChange('address')}
                                            className="form-control"
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="bloodgroup">
                                    <Col sm={3}>
                                        <Form.Label>Blood Group :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('bloodgroup')}
                                            value={this.state.bloodgroup}
                                        >
                                            <option value="">Choose...</option>
                                            <option value="o-">O-</option>
                                            <option value="o+">O+</option>
                                            <option value="a-">A-</option>
                                            <option value="a+">A+</option>
                                            <option value="b-">B-</option>
                                            <option value="b+">B+</option>
                                            <option value="ab-">AB-</option>
                                            <option value="ab+">AB+</option>
                                            <option value="N.A.">Not yet known</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Row>
                                    <Col sm={3}>
                                        <Form.Label>Deworming :</Form.Label>
                                    </Col>
                                    <Col sm={3} id="deworming" style={styles.left}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="true"
                                                    id="deworming_yes"
                                                    label="Yes"
                                                    name="deworming"
                                                    onChange={this.handleChange('deworming')}
                                                    checked={this.state.deworming === "true"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="false"
                                                    id="deworming_no"
                                                    label="No"
                                                    name="deworming"
                                                    onChange={this.handleChange('deworming')}
                                                    checked={this.state.deworming === "false"}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={12}>
                                <Row>
                                    <Col sm={3}>
                                        <Form.Label>PVTG :</Form.Label>
                                    </Col>
                                    <Col sm={3} id="PVTG" style={styles.left}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="ST"
                                                    id="PVTG_st"
                                                    label="ST"
                                                    name="PVTG"
                                                    onChange={this.handleChange('PVTG')}
                                                    checked={this.state.PVTG === "ST"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="NST"
                                                    id="PVTG_nst"
                                                    label="Non ST"
                                                    name="PVTG"
                                                    onChange={this.handleChange('PVTG')}
                                                    checked={this.state.PVTG === "NST"}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={12} style={styles.center}>
                                <Button variant="primary" className="cool-button" onClick={this.validate}>Next</Button>
                            </Col>
                        </Row>
                    </fieldset>
                </Row>
            </Container>
        )
    }
}

export default BasicDetailsForm;
