import React from 'react';
import { Form } from 'react-bootstrap';

export default function Village(props) {
    let { loading, villageList } = props;
    React.useEffect(() => {
        if (props.villageValue) {
            document.getElementById(props.id).value = props.villageValue;
        }
    })

    const handleChange = event => {
        props.updateValue({ village: event.target.value });
    }

    if (!villageList) {
        villageList = [];
    }

    if (!loading) {
        if (villageList.length > 0) {
            return (
                <Form.Control
                    as="select"
                    onChange={handleChange}
                    id={props.id}
                >
                    <option value="">Select Village</option>
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
                    <option value="">Select Village Sec. First</option>
                </Form.Control>
            )
        }
    }
    else {
        return (
            <Form.Control
                as="select"
                onChange={handleChange}
                id={props.id}
            >
                <option value="">Loading...</option>
            </Form.Control>
        )
    }
}