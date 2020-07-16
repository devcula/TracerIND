import React from 'react';

import { Form } from 'react-bootstrap';

export default function Mandal(props) {

    const handleChange = (event) => {
        props.updateValue({mandal: event.target.value});
    }

    return (
        <Form.Control
            as="select"
            onChange={handleChange}
            id={props.id}
            value={props.value}
        >
            <option value="">Choose...</option>
            <option value="Chintoor">Chintoor</option>
            <option value="Yetapaka">Yetapaka</option>
            <option value="Kunnavaram">Kunnavaram</option>
            <option value="VR Puram">V.R Puram</option>
        </Form.Control>
    )
}
