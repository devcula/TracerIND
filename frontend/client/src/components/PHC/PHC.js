import React from 'react';

import { Form } from 'react-bootstrap';
import axios from 'axios';
import { uri } from '../../index';

export default function PHC(props) {

    let [phcList, setPHCList] = React.useState([]);
    // let [phcValue, setPHCValue] = React.useState("");

    // if (props.value) {
    //     setPHCValue(props.value);
    // }

    let { updateValue } = props;

    const handleChange = event => {
        // setPHCValue(event.target.value);
        updateValue({ phc: event.target.value });
    }

    React.useEffect(() => {
        setPHCList([]);
        updateValue({ phc: "" });
        if (props.mandal) {
            axios.post(uri + 'GetPHCData/', {
                mandal: props.mandal
            })
                .then(response => {
                    console.log(response);
                    setPHCList(response.data);
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [props.mandal, updateValue]);

    try {
        if (phcList.length > 0) {
            return (
                <Form.Control
                    as="select"
                    onChange={handleChange}
                    id={props.id}
                >
                    <option value="">Choose...</option>
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
                    <option value="">Choose...</option>
                </Form.Control>
            )
        }
    }
    catch (err) {
        console.log(err);
        return (
            <Form.Control
                as="select"
                onChange={handleChange}
                id={props.id}
            >
                <option value="">Choose...</option>
            </Form.Control>
        )
    }
}