import React from 'react';

import { Table } from 'react-bootstrap';

class GenericTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.data
        }
    }
}

export default GenericTable;