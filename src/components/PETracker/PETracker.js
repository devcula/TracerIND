import React from 'react';
import axios from 'axios';

import { Container } from 'react-bootstrap';

import { uri } from '../../index';
import { authHeader } from '../../helpers';

export default function PETracker(props) {
    let [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get(uri + 'GetPE/',
            {
                headers: authHeader()
            }
        ).then(response => {
            console.log(response);
            setLoading(false);
        })
    })

    return (
        <Container>
            {
                (() => {
                    if (loading) {
                        return <React.Fragment>
                            Loading...
                        </React.Fragment>
                    }
                    else {
                        return <React.Fragment>
                            Loading done...
                        </React.Fragment>
                    }
                })()
            }
        </Container>
    )
}