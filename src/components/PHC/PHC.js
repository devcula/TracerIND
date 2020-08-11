import React from 'react';

import { Form ,Spinner} from 'react-bootstrap';


export default function PHC(props) {


    React.useEffect(() => {
        if (props.phcValue) {
            document.getElementById(props.id).value = props.phcValue;
        }

    
    })

    const handleChange = event => {
        props.fetchVillageSec(event.target.value);
    }

    let { phcList } = props;
    if (!phcList) {
        phcList = [];
    }
    if (phcList.length > 0) {
        return (
            <Form.Control
                as="select"
                onChange={handleChange}
                id={props.id}
            >
                <option value="">Select PHC</option>
                {
                    phcList.map((phc, i) => {
                        return (
                            <option value={phc.name} key={i}>{phc.name}</option>
                        )
                    })
                }
            </Form.Control>
        )
    }
    else {
        return (
            <Form.Control
                as="select"
                onChange={handleChange}
                id={props.id}
            >
             <Spinner animation="border" size="sm" />
                <option value="">Select Mandal First</option>
            </Form.Control>
        )
    }
}
