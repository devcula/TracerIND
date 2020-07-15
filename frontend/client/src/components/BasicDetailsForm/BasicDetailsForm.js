import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
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
            PVGT: props.getValue('PVGT'),
        }
    }

    componentDidMount = () => {
        let adhaarNumber = this.props.getValue('adhaar');
        if(adhaarNumber){
            this.setState({adhaarFirst: adhaarNumber.substring(0,4)});
            this.setState({adhaarSecond: adhaarNumber.substring(4,8)});
            this.setState({adhaarThird: adhaarNumber.substring(8,12)});
        }
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    validate = () => {
        //Conditions to check.. If valid, Send form name to switch to next form
        console.log(this.state);
        let validIds = [];
        let invalidIds = [];
        try{
            //Adhaar fields validation
            let adhaarIds = ["adhaarFirst", "adhaarSecond", "adhaarThird"];
            let filled = false;
            for(let i = 0; i < adhaarIds.length; i++){
                if(this.state[adhaarIds[i]] !== ""){
                    filled = true;
                    break;
                }
            }
            if(filled){
                for(let i = 0; i < adhaarIds.length; i++){
                    if(this.state[adhaarIds[i]].length < 4){
                        // throw new Error();
                        invalidIds.push(adhaarIds[i]);
                    }
                    else{
                        validIds.push(adhaarIds[i]);
                    }
                }
            }
            Boolean(this.state.mandal) ? validIds.push('mandal') : invalidIds.push('mandal');
            Boolean(this.state.phc) ? validIds.push('phc') : invalidIds.push('phc');
            Boolean(this.state.village_sec) ? validIds.push('village_sec') : invalidIds.push('village_sec');
            Boolean(this.state.village) ? validIds.push('village') : invalidIds.push('village');
            Boolean(this.state.name) ? validIds.push('name') : invalidIds.push('name');
            Boolean(this.state.surname) ? validIds.push('surname') : invalidIds.push('surname');
            // Boolean(this.state.relation) ? validIds.push('relation') : invalidIds.push('relation');
            Boolean(this.state.gaurdian_name) ? validIds.push('gaurdian_name') : invalidIds.push('gaurdian_name');
            Boolean(this.state.age) ? validIds.push('age') : invalidIds.push('age');
            Boolean(this.state.gender) ? validIds.push('gender') : invalidIds.push('gender');
            Boolean(this.state.maritalstatus) ? validIds.push('maritalstatus') : invalidIds.push('maritalstatus');
            Boolean(this.state.bloodgroup) ? validIds.push('bloodgroup') : invalidIds.push('bloodgroup');
            Boolean(this.state.PVGT) ? validIds.push('PVGT') : invalidIds.push('PVGT');
            // for (let i = 0; i < validIds.length; i++) {
            //     document.getElementById(validIds[i]).style.border = "";
            // }
            if(invalidIds.length > 0){
                // window.location.href = "#" + invalidIds[0];
                // for(let i = 0; i < invalidIds.length; i++){
                //     document.getElementById(invalidIds[i]).style.border = "1px solid red";
                // }
                throw new Error();
            }
            //Still in try block? Means all fields valid. Now saving the data to parent component.
            this.saveData();
            this.props.changeData({formName: "TestDetails"});
        }
        catch(err){
            console.log(false);
        }
    }

    saveData = () => {
        let dataToSave = {
            adhaar: this.state.adhaarFirst + this.state.adhaarSecond + this.state.adhaarThird,
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
        }
        this.props.changeData(dataToSave);
    }

    loadNextForm = (formName) => {
        this.props.changeData({ formName: formName });
    }

    validateAdhaarSection = event => {
        let strValue = event.target.value.toString();
        if(strValue.length > 4){
            event.target.value = Number(strValue.substring(0,4));
        }
        this.setState({[event.target.id] : event.target.value.toString()});
    }

    render() {
        const styles = {
            center: {
                textAlign: "center"
            },
            paddingLeft: {
                paddingLeft: "10px"
            }
        }
        return (
            <Container>
                <Row>
                    <fieldset style={{ 'width': '100%' }}>
                        <legend>Basic Details</legend>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Aadhar Number : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control 
                                        min="0" 
                                        max="9999" 
                                        type="number" 
                                        onChange={this.validateAdhaarSection} 
                                        placeholder="XXXX" 
                                        id="adhaarFirst" 
                                        value={this.state.adhaarFirst} 
                                        />
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control 
                                        min="0" 
                                        max="9999" 
                                        type="number" 
                                        onChange={this.validateAdhaarSection} 
                                        placeholder="XXXX" 
                                        id="adhaarSecond" 
                                        value={this.state.adhaarSecond}
                                        />
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control 
                                        min="0" 
                                        max="9999" 
                                        type="number" 
                                        onChange={this.validateAdhaarSection} 
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
                                <Form.Group as={Row} controlId="mandal">
                                    <Col sm={3}>
                                        <Form.Label>Mandal :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('mandal')}
                                            value={this.state.mandal}>
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="phc">
                                    <Col sm={3}>
                                        <Form.Label>PHC :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('phc')}
                                            value={this.state.phc} >
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="village_sec">
                                    <Col sm={3}>
                                        <Form.Label>Village Secretariat :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('village_sec')}
                                            value={this.state.village_sec}>
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="village">
                                    <Col sm={3}>
                                        <Form.Label>Village :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('village')}
                                            value={this.state.village}>
                                            <option value="">Choose...</option>
                                            <option>...</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="name">
                                    <Col sm={3}>
                                        <Form.Label>First Name :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            type="text"
                                            placeholder="First Name"
                                            onChange={this.handleChange('name')}
                                            value={this.state.name} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="surname">
                                    <Col sm={3}>
                                        <Form.Label>Surname :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            type="text"
                                            placeholder="Surname"
                                            onChange={this.handleChange('surname')}
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
                                    <Col sm={3}>
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
                                    <Col sm={6} style={{ display: this.state.relation ? 'block' : 'none' }}>
                                        <Form.Group as={Row} controlId="gaurdian_name">
                                            <Col sm={3}>
                                                <Form.Label>Name :</Form.Label>
                                            </Col>
                                            <Col sm={9}>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    onChange={this.handleChange('gaurdian_name')}
                                                    value={this.state.gaurdian_name} />
                                            </Col>
                                        </Form.Group>
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
                                            onChange={this.handleChange('age')}
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
                                    <Col sm={3}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="male"
                                                    id="male"
                                                    label="Male"
                                                    name="gender"
                                                    onChange={this.handleChange('gender')}
                                                    checked={this.state.gender === "male"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="female"
                                                    id="female"
                                                    label="Female"
                                                    name="gender"
                                                    onChange={this.handleChange('gender')}
                                                    checked={this.state.gender === "female"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="transgender"
                                                    id="transgender"
                                                    label="Transgender"
                                                    name="gender"
                                                    onChange={this.handleChange('gender')}
                                                    checked={this.state.gender === "transgender"}
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
                                        <Form.Label>Marital Status :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="single"
                                                    id="single"
                                                    label="Single"
                                                    name="maritalstatus"
                                                    onChange={this.handleChange('maritalstatus')}
                                                    checked={this.state.maritalstatus === "single"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="married"
                                                    id="married"
                                                    label="Married"
                                                    name="maritalstatus"
                                                    onChange={this.handleChange('maritalstatus')}
                                                    checked={this.state.maritalstatus === "married"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="separated"
                                                    id="separated"
                                                    label="Separated"
                                                    name="maritalstatus"
                                                    onChange={this.handleChange('maritalstatus')}
                                                    checked={this.state.maritalstatus === "separated"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="divorced"
                                                    id="divorced"
                                                    label="Divorced"
                                                    name="maritalstatus"
                                                    onChange={this.handleChange('maritalstatus')}
                                                    checked={this.state.maritalstatus === "divorced"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="widowed"
                                                    id="widowed"
                                                    label="Widowed"
                                                    name="maritalstatus"
                                                    onChange={this.handleChange('maritalstatus')}
                                                    checked={this.state.maritalstatus === "widowed"}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row} controlId="phone">
                                    <Col sm={3}>
                                        <Form.Label>Phone Number : </Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            min="0"
                                            max="9999999999"
                                            type="number"
                                            placeholder="Enter Contact number"
                                            onChange={this.handleChange('phone')}
                                            value={this.state.phone} />
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
                                        <Form.Label>PVTG :</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="yes"
                                                    id="pvgt_yes"
                                                    label="Yes"
                                                    name="PVGT"
                                                    onChange={this.handleChange('PVGT')}
                                                    checked={this.state.PVGT === "yes"}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Check
                                                    type='radio'
                                                    value="no"
                                                    id="pvgt_no"
                                                    label="No"
                                                    name="PVGT"
                                                    onChange={this.handleChange('PVGT')}
                                                    checked={this.state.PVGT === "no"}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm={12} style={styles.center}>
                                <Button variant="primary" onClick={this.validate}>Save and Continue</Button>
                            </Col>
                        </Row>
                    </fieldset>
                </Row>
            </Container>
        )
    }
}

export default BasicDetailsForm;
