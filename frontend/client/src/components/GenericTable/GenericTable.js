import React from 'react';

import { Table } from 'react-bootstrap';

//Received props
//Json data -- data
//List of headings -- headers
//List of Json keys to be displayed under each heading -- keys
//List of data types for each column for making filters -- dataTypes
//All list should be of equal lengths and in same sequence. Otherwise table will show unpredictable behaviour
//loading -- loading

class GenericTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noOfRows: 20,
        }
    }

    componentDidMount() {
        let stateObj = {};
        let { dataTypes, keys } = this.props;
        for (let i = 0; i < dataTypes.length; i++) {
            if (dataTypes[i] === 'Number') {
                stateObj['KEY_' + keys[i]] = {                  //Appending KEY_ to prevent data overwrite if any props key matches our internal state key
                    min: Number.MIN_VALUE,
                    max: Number.MAX_VALUE
                }
            }
            else if (dataTypes[i] === 'String') {
                stateObj['KEY_' + keys[i]] = "";
            }
        }
        this.setState(stateObj, console.log(this.state));
    }

    render() {
        let { headers, data, loading, keys, dataTypes } = this.props;
        return (
            <React.Fragment>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            {
                                headers.map((header, index) => {
                                    return (
                                        <td key={index}>{header}</td>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (() => {
                                if(loading){
                                    return 
                                }
                                else{
                                    return (
                                        <React.Fragment>
                                            <tr key="searchFields">
                                                {
                                                    keys.map((key, i) => {
                                                        let inputType = "text";
                                                        if (dataTypes[i] === 'Number') {
                                                            inputType = "number";
                                                        }
                                                        return (
                                                            <td key={i}>
                                                                <input type={inputType} id={'KEY_' + key} />
                                                            </td>
                                                        )
                                                    })
                                                }
                                            </tr>
                                            {
                                                data.map((row, indexRow) => {
                                                    return (
                                                        <tr key={indexRow}>
                                                            {
                                                                keys.map((key, indexCol) => {
                                                                    return (
                                                                        <td key={indexCol}>
                                                                            {row[key]}
                                                                        </td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment>
                                    )
                                }
                            })()
                        }
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}

export default GenericTable;