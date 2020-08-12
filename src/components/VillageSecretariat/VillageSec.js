import React , { useState }  from 'react';
import { Form } from 'react-bootstrap';

export default function VillageSec(props) {
    const [loading, setloading] =  useState("loading...");
    
    React.useEffect(() => {
        if (props.villageSecValue) {
            document.getElementById(props.id).value = props.villageSecValue;
        }
    })

    const handleChange = event => {
        props.fetchVillages(event.target.value);
    }

    //Added comment

    let { villageSecList } = props;

    if (!villageSecList) {
        villageSecList = [];
    }

    if (villageSecList.length > 0) {
        return (
            <Form.Control
                as="select"
                onChange={handleChange}
                onClick={() => setloading('Select Village Secratarist')}
                id={props.id}
            >
                <option value="">{loading}</option>
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