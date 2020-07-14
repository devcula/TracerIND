import React from 'react';
import { Container, Button } from 'react-bootstrap';

class TestDetailsForm extends React.Component {

    previous = () => {
        this.props.changeData({ formName: "UserDetails" });
    }

    render() {
        return (
            <Container>
                <Button variant="primary" onClick={this.previous}>
                    Previous
                </Button>
            </Container>
        )
    }
}

export default TestDetailsForm;