import React  from 'react';
import { Form } from 'react-bootstrap';

export default function VillageSec(props) {
    let { loading, villageSecList } = props;
    
    React.useEffect(() => {
        if (props.villageSecValue) {
            document.getElementById(props.id).value = props.villageSecValue;
        }
    })

    const handleChange = event => {
        props.fetchVillages(event.target.value);
    }

    if (!villageSecList) {
        villageSecList = [];
    }

    if(!loading) {
        if (villageSecList.length > 0) {
            return (
                <Form.Control
                    as="select"
                    onChange={handleChange}
                    id={props.id}
                >
                    <option value="">Select Village</option>
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
                    <option value="">Select PHC first</option>
                </Form.Control>
            )
        }
    }
    else{
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