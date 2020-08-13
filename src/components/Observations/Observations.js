import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Observations.css';

class Observations extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          weight: props.getValue('weight'),
          height: props.getValue('height'),
          temperature: props.getValue('temperature'),
          bloodpressure: props.getValue('bloodpressure'),
          heartrate: props.getValue('heartrate'),
          pulserate:   props.getValue('pulserate'),
          respiratoryrate: props.getValue('respiratoryrate'),
          bpm: props.getValue('bpm'),
          fever: props.getValue('fever'),
          aches: props.getValue('aches'),
          cold: props.getValue('cold'),
          cough: props.getValue('cough'),
          diarrhea: props.getValue('diarrhea'),
          bleeding: props.getValue('bleeding'),
          infection: props.getValue('infection'),

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

    validateAndNext = async () => {
        //Conditions to check.. If valid, Send form name to switch to next form
        // console.log(this.state);
        await new Promise(resolve => this.props.changeData(this.state, () => resolve()))
        this.loadNextForm("HospitalDetails");
    }


    previous = () => {
        this.saveData();
        this.props.changeData({ formName: "TestDetails" });
    }

    loadNextForm = (formName) => {
        this.props.changeData({ formName: formName });
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

        return(
          <Container>
              <Row>
                    <fieldset style={{ 'width': '100%', ...styles.center }}>
                      <legend>Observations By Doctor</legend>
                      <Row>
                          <Form.Group as={Row}>
                              <Col className="section-heading">
                                  <h3>Basic Vitals</h3>
                              </Col>
                          </Form.Group>
                      </Row>



          <Row>
              <Col sm={12}>
                  <Form.Group as={Row}>
                      <Col sm={3}>
                          <Form.Label>Weight :</Form.Label>
                      </Col>
                      <Col sm={3}>
                      <Form.Control
                          rows="3"
                          type="text"
                          placeholder="Weight in kgs"
                          onChange={this.handleChange('weight')}
                          value={this.state.weight}
                          id="weight"

                      />
                      </Col>
                      <Col sm={3}>
                          <Form.Label>Height :</Form.Label>
                      </Col>
                      <Col sm={3}>
                      <Form.Control
                          className="my-1 mr-sm-2"
                          rows="3"
                          type="text"
                          placeholder="Height in cms"
                          onChange={this.handleChange('height')}
                          value={this.state.weight}
                          id="height"

                      />

                      </Col>
                  </Form.Group>
              </Col>
          </Row>
          <Row>
              <Col sm={12}>
                  <Form.Group as={Row}>
                      <Col sm={3}>
                          <Form.Label>Temperature :</Form.Label>
                      </Col>
                      <Col sm={3}>
                      <Form.Control
                          rows="3"
                          type="text"
                          placeholder="° Farhenheit"
                          onChange={this.handleChange('temperature')}
                          value={this.state.temperature}
                          id="temperature"

                      />
                      </Col>
                      <Col sm={3}>
                          <Form.Label>Blood Pressure :</Form.Label>
                      </Col>
                      <Col sm={3}>
                      <Form.Control
                          className="my-1 mr-sm-2"
                          rows="3"
                          type="text"
                          placeholder="mm Hg"
                          onChange={this.handleChange('bloodpressure')}
                          value={this.state.bloodpressure}
                          id="bloodpressure"

                      />

                      </Col>
                  </Form.Group>
              </Col>
          </Row>
          <Row>
              <Col sm={12}>
                  <Form.Group as={Row}>
                      <Col sm={3}>
                          <Form.Label>Heart Rate</Form.Label>
                      </Col>
                      <Col sm={3}>
                      <Form.Control
                          rows="3"
                          type="text"
                          placeholder="bpm"
                          onChange={this.handleChange('heartrate')}
                          value={this.state.heartrate}
                          id="heartrate"

                      />
                      </Col>
                      <Col sm={3}>
                          <Form.Label>Pulse Rate:</Form.Label>
                      </Col>
                      <Col sm={3}>
                      <Form.Control
                          className="my-1 mr-sm-2"
                          rows="3"
                          type="text"
                          placeholder="bpm"
                          onChange={this.handleChange('pulserate')}
                          value={this.state.pulserate}
                          id="pulserate"

                      />

                      </Col>
                  </Form.Group>
              </Col>
          </Row>
          <Row>
              <Col sm={12}>
                  <Form.Group as={Row}>
                      <Col sm={3}>
                          <Form.Label>Respiratory Rate :</Form.Label>
                      </Col>
                      <Col sm={3}>
                      <Form.Control
                          rows="3"
                          type="text"
                          placeholder="bpm"
                          onChange={this.handleChange('respiratoryrate')}
                          value={this.state.respiratoryrate}
                          id="respiratoryrate"/>
                      </Col>
                  </Form.Group>
              </Col>
          </Row>

          <Row>
              <Form.Group as={Row}>
                  <Col className="section-heading">
                      <h3>Basic Sypmtoms</h3>
                  </Col>
              </Form.Group>

          </Row>
          <Row>
              <Col sm={12}>
                  <Form.Group as={Row} className="observations">
                  <Col sm={2}>
                      <Form.Label>Fever :</Form.Label>
                  </Col>
                      <Col sm={1}>
                      <Form.Check
                      type="checkbox"
                      id="fever"
                      name="fever"
                      onChange={this.handleChange('fever')}
                      value={this.state.fever}
                        />
                      </Col>
                      <Col sm={2}>
                          <Form.Label>Cold :</Form.Label>
                      </Col>
                          <Col sm={1}>
                          <Form.Check
                          type="checkbox"
                          id="cold"
                          name="cold"
                          onChange={this.handleChange('cold')}
                          value={this.state.cold}
                            />
                          </Col>
                          <Col sm={2}>
                              <Form.Label>Cough :</Form.Label>
                          </Col>
                              <Col sm={1}>
                              <Form.Check
                              type="checkbox"
                              id="cough"
                              name="cough"
                              placeholder="bpm"
                              onChange={this.handleChange('cough')}
                              value={this.state.cold}
                                />
                              </Col>
                              <Col sm={2}>
                                  <Form.Label>Fatigue : </Form.Label>
                              </Col>
                                  <Col sm={1}>
                                  <Form.Check
                                  type="checkbox"
                                  id="fatigue"
                                  name="fatigue"
                                  placeholder="bpm"
                                  onChange={this.handleChange('fatigue')}
                                  value={this.state.fatigue}
                                    />
                                  </Col>


                  </Form.Group>
              </Col>
          </Row>
          <Row>
              <Col sm={12}>
                  <Form.Group as={Row} className="observations">
                  <Col sm={2}>
                      <Form.Label>Aches & Pains :</Form.Label>
                  </Col>
                      <Col sm={1}>
                      <Form.Check
                      type="checkbox"
                      id="aches"
                      name="aches"
                      onChange={this.handleChange('aches')}
                      value={this.state.aches}
                        />
                      </Col>
                      <Col sm={2}>
                          <Form.Label>Diarrhea :</Form.Label>
                      </Col>
                          <Col sm={1}>
                          <Form.Check
                          type="checkbox"
                          id ="diarrhea"
                          name="diarrhea"
                          onChange={this.handleChange('diarrhea')}
                          value={this.state.diarrhea}
                            />
                          </Col>
                          <Col sm={2}>
                              <Form.Label>Bleeding :</Form.Label>
                          </Col>
                              <Col sm={1}>
                              <Form.Check
                              id="bleeding"
                              name="bleeding"
                              type="checkbox"
                              placeholder="bpm"
                              onChange={this.handleChange('bleeding')}
                              value={this.state.bleeding}
                                />
                              </Col>
                              <Col sm={2}>
                                  <Form.Label>Infection :</Form.Label>
                              </Col>
                                  <Col sm={1}>
                                  <Form.Check
                                  type="checkbox"
                                  id="infection"
                                  name="bleeding"
                                  onChange={this.handleChange('infection')}
                                  value={this.state.infection}
                                    />
                                  </Col>


                  </Form.Group>
              </Col>
          </Row>
          <br />
          <Row>
              <Col sm={6} xs={6} style={styles.right}>
                  <Button variant="primary"
                      onClick={this.previous}
                      className="cool-button"
                  >Previous</Button>
              </Col>
              <Col sm={6} xs={6} style={styles.left}>
                  <Button variant="primary"
                      onClick={this.validateAndNext}
                      className="cool-button"
                  >Next</Button>
              </Col>
          </Row>


<br/>

                      </fieldset>

              </Row>
            </Container>
        )
      }

}

export default Observations;
