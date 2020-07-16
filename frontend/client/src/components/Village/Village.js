import React from 'react';

import { Form } from 'react-bootstrap';
import axios from 'axios';
import { uri } from '../../index';

export default function Village(props) {

    let [villageList, setVillageList] = React.useState([]);
    
    let { updateValue } = props;
    const handleChange = event => {
        props.updateValue({ village: event.target.value });
    }

    React.useEffect(() => {
        setVillageList([]);
        updateValue({ village: "" });
        if (props.village_sec) {
            axios.post(uri + 'GetVillageData/', {
                village_sec: props.village_sec
            })
                .then(response => {
                    console.log(response);
                    setVillageList(response.data);
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [props.village_sec, updateValue]);

    try {
        if (villageList.length > 0) {
            return (
                <Form.Control
                    as="select"
                    onChange={handleChange}
                    id={props.id}
                >
                    <option value="">Choose...</option>
                    {
                        villageList.map((village, i) => {
                            return (
                                <option value={village.village_id} key={i}>{village.name}</option>
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