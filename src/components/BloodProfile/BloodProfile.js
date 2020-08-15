import React from 'react';

import { Row,Col, Container, Form, Button} from 'react-bootstrap';
import './BloodProfile.css';
class BloodProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
            temperature: props.getValue('wbc'),
            bloodpressure: props.getValue('monocytes'),
            heartrate: props.getValue('lymphocytes'),
            pulserate: props.getValue('eosinophils'),
            heartrate: props.getValue('haemoglobin'),
            pulserate: props.getValue('platelet'),


        }
    }
   

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }
   
    saveData = async () => {
        await new Promise(resolve => this.props.changeData(this.state, () => resolve()))
    }
    

render() 
{
    
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
                    <legend>Blood Details</legend>
                    <Row>
<Col sm={12}>
    <Form.Group as={Row}>
       
        <Col sm={3}>
            <Form.Label>Total WBC :</Form.Label>
        </Col>
        <Col sm={3}>
        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="WBC in (K/microL)"
                                            onChange={this.handleChange('wbc')}
                                            value={this.state.wbc}
                                            id="wbc"

                                        />
         
        </Col>
    </Form.Group>
  </Col>
  </Row>
  <Row>
  <Col sm={12}>
    <Form.Group as={Row}>
        <Col sm={3}>
        <Form.Label>Monocytes:</Form.Label>
        </Col>
        <Col sm={3}>
        <Form.Control
                                            className="my-1 mr-sm-2"
                                            rows="3"
                                            type="number"
                                            placeholder="%"
                                            onChange={this.handleChange('monocytes')}
                                            value={this.state.monocytes}
                                            id="monocytes"
                                        />
            
        </Col>
        <Col sm={3}>
            <Form.Label>lymphocytes :</Form.Label>
        </Col>
        <Col sm={3}>
        <Form.Control
                                            className="my-1 mr-sm-2"
                                            rows="3"
                                            type="number"
                                            placeholder="%"
                                            onChange={this.handleChange('lymphocytes')}
                                            value={this.state.lymphocytes}
                                            id="lymphocytes"/>
          
        </Col>

        <Col sm={3}>
            <Form.Label>eosinophils :</Form.Label>
        </Col>
        <Col sm={3}>
        <Form.Control
             
             className="my-1 mr-sm-2"
             rows="3"
             type="number"
             placeholder="%"
             onChange={this.handleChange('eosinophils')}
             value={this.state.eosinophils}
             id="eosinophils"/>
                                       
        </Col>
    </Form.Group>
</Col>
</Row>
<Row>
<Col sm={12}>
    <Form.Group as={Row}>
       
        <Col sm={3}>
            <Form.Label>Haemoglobin :</Form.Label>
        </Col>
        <Col sm={3}>
        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="Haemoglobin in (g/dL)"
                                            onChange={this.handleChange('haemoglobin')}
                                            value={this.state.haemoglobin}
                                            id="wbc"

                                        />

        </Col>
    </Form.Group>
</Col>
</Row>
<Row>
<Col sm={12}>
    <Form.Group as={Row}>
       
        <Col sm={3}>
            <Form.Label>Platelet :</Form.Label>
        </Col>
        <Col sm={3}>
        <Form.Control
                                            rows="3"
                                            type="number"
                                            placeholder="Platlet in (K/microL)"
                                            onChange={this.handleChange('platelet')}
                                            value={this.state.platelet}
                                            id="platelet"/> 
                              </Col>
                    </Form.Group>
                    </Col>
                   </Row>

                    <Row>
                    <Col sm={6} xs={6} style={styles.left}>
                                <Button variant="primary"
                                    
                                    className="cool-button"
                                >Submit</Button>
                            </Col>
                        
                    </Row>
                </fieldset>
            </Row>
        </Container>
    )
    }
}

export default BloodProfile;


