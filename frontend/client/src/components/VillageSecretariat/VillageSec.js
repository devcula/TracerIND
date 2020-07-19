import React from 'react';

import { Form } from 'react-bootstrap';
import axios from 'axios';
import { uri } from '../../index';

export default function VillageSec(props) {

    let [villageSecList, setVillageSecList] = React.useState([]);
    // let [villageSecValue, setVillageSecValue] = React.useState("");

    // if (props.value) {
    //     setVillageSecValue(props.value);
    // }
    let { updateValue } = props;
    const handleChange = event => {
        // setVillageSecValue(event.target.value);
        props.updateValue({ village_sec: event.target.value });
    }

    React.useEffect(() => {
        setVillageSecList([]);
        updateValue({ village_sec: "" });
        if (props.phc) {
            axios.post(uri + 'GetVillageSecData/', {
                PHC: props.phc
            })
                .then(response => {
                    console.log(response);
                    setVillageSecList(response.data);
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [props.phc, updateValue]);

    try {
        if (villageSecList.length > 0) {
            return (
                <Form.Control
                    as="select"
                    onChange={handleChange}
                    id={props.id}
                >
                    <option value="">Select Village Secretariat</option>
                    {
                        villageSecList.map((villageSec, i) => {
                            return (
                                <option value={villageSec.name} key={i}>{villageSec.name}</option>
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