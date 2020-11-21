import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './PatientHealthStat.css';

class PatientHealthStat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            diseaseType: props.getValue('diseaseType'),
            diseaseTypeSelected: props.getValue('diseaseTypeSelected'),
            diseaseCondition: props.getValue('diseaseCondition'),
            onsetYears: props.getValue('onsetYears'),
            onsetMonths: props.getValue('onsetMonths'),
            treatmentProvidedAt: props.getValue('treatmentProvidedAt'),
            currentLocation: props.getValue('currentLocation'),
            presentPatientStatus: props.getValue('presentPatientStatus'),
            patientCategorizedAs: props.getValue('patientCategorizedAs'),
            btn: "Submit",
            loading:false,
        }
    }
    validate = () => {
        this.props.changeData({ formName: "HospitalDetails" });
    }
    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }
    saveData = async () => {
        await new Promise(resolve => this.props.changeData(this.state, () => resolve()))
    }

    handleCheckboxChange = input => event => {
        this.setState({[input]: document.getElementById(input).checked});
    }

    validateAndSubmit = async () => {
    //Conditions to check.. If valid, Send form name to switch to next form
    // console.log(this.state);
    // this.props.changeData(this.state);
    this.setState({btn:"Submitting"});
    this.setState({loading:true})
   await new Promise(resolve => this.props.changeData(this.state, () => resolve()))
    // this.loadNextForm("HospitalDetails");
   this.props.submit();
    }

    previous = () => {
        this.saveData();
        this.props.changeData({ formName: "HospitalDetails" });
    }

    loadNextForm = (formName) => {
        this.props.changeData({ formName: formName });
    }
    render() {
        const {loading} = this.state;
        const {btn } = this.state;
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
            const diseaseList = [
      {
        label: 'Anaemia',
        value: 'anaemia',
      },
      {
        label: 'Cancer',
        value: 'cancer',
      },
      {
        label: 'Diabetes',
        value: 'diabetes',
      },
      {
        label: 'Heart Related',
        value: 'heart_related',
      },
      {
        label: 'Kidney Related',
        value: 'kidney_related',
      },
      {
        label: 'Lung Related',
        value: 'lung_related',
      },
      {
        label: 'Liver Related',
        value: 'liver_related',
      },
      {
        label: 'Pedal Edema',
        value: 'pedal_enema',
      },
      {
        label: 'Paralysis',
        value: 'paralysis',
      },
      {
        label: 'Thalessemia',
        value: 'thalessemia',
      },
      {
        label: 'Other',
        value: 'other',
      },
    ];
    const hospitalList = [
      {
        label: 'PHC/Tulasipaka',
        value: 'PHC/Tulasipaka',
      },
      {
        label: 'PHC/E.D Pally',
        value: 'PHC/E.D Pally',
      },
      {
        label: 'PHC/Laxmipuram',
        value: 'PHC/Laxmipuram',
      },
      {
        label: 'PHC/Gowridevipeta',
        value: 'PHC/Gowridevipeta',
      },
      {
        label: 'PHC/Kuturu',
        value: 'PHC/Kuturu',
      },
      {
        label: 'PHC/Rekhapally',
        value: 'PHC/Rekhapally',
      },
      {
        label: 'PHC/Jeediguppa',
        value: 'PHC/Jeediguppa',
      },
      {
        label: 'AH/Chintoor',
        value: 'AH/Chintoor',
      },
      {
        label: 'AH/Rampachodavaram',
        value: 'AH/Rampachodavaram',
      },
      {
        label: 'AH/Bhadrachalam',
        value: 'AH/Bhadrachalam',
      },
      {
        label: 'DH/Rajamundry',
        value: 'DH/Rajamundry',
      },
      {
        label: 'GGH/Kakinada',
        value: 'GGH/Kakinada',
      },
      {
        label: 'Other',
        value: 'other',
      },
    ];
    const patientCategorizedAsList = [
      {
        label: 'Healthy',
        value: 'healthy',
      },
      {
        label: 'With Mild Illness',
        value: 'mild_illness',
      },
      {
        label: 'Moderately ill',
        value: 'moderately_ill',
      },
      {
        label: 'Severely ill',
        value: 'severely_ill',
      },
    ];

        return (
            <Container>
                <Row>
                    <fieldset style={{ 'width': '100%', ...styles.center }}>
                        <legend>Patient Health Status</legend>
        
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Disease/Disorder type</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Control
                                            as="select"
                                            onChange={this.handleChange('diseaseType')}
                                            value={this.state.diseaseType} >
                                            <option value="">Choose...</option>
                                            {diseaseList.map((disease, i) => {
                                                return (
                                                <option value={disease.value} key={i}>{disease.label}</option>
                                                );
                                              })}
                                        </Form.Control>

                                    </Col>
                                       <Col sm={3}>
                                        <Form.Label>Specify Disease Conditions</Form.Label>
                                    </Col>

                                    <Col sm={3}>

                                        <Form.Control 
                                                              placeholder="Specify Disease Conditions"
                                                              rows="3"
                                                              type="text"
                                                              onChange={this.handleChange('diseaseCondition')}
                                                              value={this.state.diseaseCondition}
                                                          />
                            
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                 
                                    <Col sm={3}>
                                        <Form.Label>Onset of Disease/Disorder</Form.Label>
                                    </Col>
                                    
                                   <Row>
                    
                                    <Col sm={3}>
                                     <Form.Control
                                    placeholder="Years"
                                    rows="3"
                                    type="text"
                                    onChange={this.handleChange('onsetYears')}
                                    value={this.state.onsetYears}
                                />
                                     
                                    </Col>
                                    <Col sm={3}>
                                     <Form.Control  
                                          placeholder="Months"
                                          rows="3"
                                          type="text"
                                          onChange={this.handleChange('onsetMonths')}
                                          value={this.state.onsetMonths}
                                      />
                                     
                                    </Col>
                                   </Row>
                                    
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Treatment Provided At</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                          <Form.Control
                                            as="select"
                                            onChange={this.handleChange('treatmentProvidedAt')}
                                            value={this.state.treatmentProvidedAt} >
                                            <option value="">Choose...</option>
                                            <option value="PHC/Tulasipaka">PHC/Tulasipaka</option>
                                            {hospitalList.map((hospital, i) => {
                                                return (
                                                <option value={hospital.value} key={i}>{hospital.label}</option>
                                                );
                                              })}
                                        </Form.Control>
                        
                                    </Col>
                                    <Col sm={3}>
                                        <Form.Label>Current Location</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                    <Form.Control
                                            placeholder="Enter current location"
                                            type="text"
                                            id="name"
                                            onChange={this.handleChange('currentLocation')}
                                            value={this.state.currentLocation} />
                                    
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Group as={Row}>
                                    <Col sm={3}>
                                        <Form.Label>Present Patient Status</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                     <Form.Control 
                                        placeholder="Enter present patient status"
                                        rows="3"
                                        type="text"
                                        onChange={this.handleChange('presentPatientStatus')}
                                        value={this.state.presentPatientStatus}
                                    />

                                    </Col>
                                    <Col sm={3}>
                                        <Form.Label>Presently Categorised As</Form.Label>
                                    </Col>
                                    <Col sm={3}>
                                     <Form.Control
                                            as="select"
                                            onChange={this.handleChange('patientCategorizedAs')}
                                            value={this.state.patientCategorizedAs} >
                                            <option value="">Choose...</option>
                                            {patientCategorizedAsList.map((patientCategory, i) => {
                                                return (
                                                <option value={patientCategory.value} key={i}>{patientCategory.label}</option>
                                                );
                                              })}
                                        </Form.Control>

                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6} xs={6} style={styles.right}>
                                <Button variant="primary"
                                    onClick={this.previous}
                                    className="cool-button"
                                >Previous</Button>
                            </Col>
                                <Col sm={6} xs={6} style={styles.left}>
                                <Button variant="primary" className="cool-button" onClick={this.validateAndSubmit}>{loading && <i className="spinner-border spinner-border-sm"  role="status"></i>} {btn}</Button>
                            </Col>

                        </Row>
                        <br />
                    </fieldset>
                </Row>
            </Container>
        )
    }

}

export default PatientHealthStat;
