import React from 'react';

import { Table, Button, Row, Col, Modal } from 'react-bootstrap';
import ModalBody from '../ModalBody/ModalBody';
import './GenericTable.css';

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
        this.handleShow = this.handleShow.bind(this);
        this.handleShowCustom = this.handleShowCustom.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            noOfRows: "",
            currentPageIndex: 0,
            show: false,
            patientDetailsModal: {}
        }
    }


    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow() {
        console.log("handleShow called")

    }

    handleShowCustom = (value, indx) => {
        this.setState({ show: true, patientDetailsModal: value });
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
            else if (dataTypes[i] === 'Boolean') {
                stateObj['KEY_' + keys[i]] = "";
            }
        }
        this.setState(stateObj);
    }

    handleSearchChange = event => {
        let idFragments = event.target.id.split('_');
        let obj = {};
        let key = idFragments[1];
        let dataType = this.props.dataTypes[this.props.keys.indexOf(key)];

        if (dataType === 'String') {
            obj['KEY_' + key] = event.target.value;
        }
        else if (dataType === 'Number') {
            obj['KEY_' + key] = this.state['KEY_' + key];
            if (event.target.value === "") {
                obj['KEY_' + key][idFragments[2]] = idFragments[2] === 'min' ? Number.MIN_VALUE : Number.MAX_VALUE;
            }
            else {
                obj['KEY_' + key][idFragments[2]] = Number(event.target.value);
            }
        }
        else if (dataType === 'Boolean') {
            obj['KEY_' + key] = event.target.value;
        }
        this.setState(obj);
    }

    isNotNullOrUndefinedOrBlank = (value) => {
        return (value !== null && value !== undefined && value !== "");
    }

    clearFilters = () => {
        let { dataTypes, keys } = this.props;
        let obj = {};
        for (let i = 0; i < keys.length; i++) {
            if (dataTypes[i] === "String") {
                obj['KEY_' + keys[i]] = "";
                document.getElementById('KEY_' + keys[i]).value = "";
            }
            else if (dataTypes[i] === "Number") {
                obj['KEY_' + keys[i]] = {
                    min: Number.MIN_VALUE,
                    max: Number.MAX_VALUE
                }
                document.getElementById('KEY_' + keys[i] + '_min').value = "";
                document.getElementById('KEY_' + keys[i] + '_max').value = "";
            }
            else if (dataTypes[i] === "Boolean") {
                obj['KEY_' + keys[i]] = "";
                document.getElementById('KEY_' + keys[i]).value = "";
            }
        }
        this.setState(obj);
    }

    changeNoOfRows = event => {
        if (event.target.value !== "") {
            event.target.value = Math.abs(event.target.value);
        }
        this.setState({ noOfRows: event.target.value });
    }

    nextPage = () => {
        let { currentPageIndex } = this.state;
        this.setState({ currentPageIndex: currentPageIndex + 1 });
    }

    previousPage = () => {
        let { currentPageIndex } = this.state;
        this.setState({ currentPageIndex: currentPageIndex - 1 });
    }

    render() {
        let { headers, data, loading, keys, dataTypes } = this.props;
        let pageData = [];
        let { noOfRows, currentPageIndex, patientDetailsModal } = this.state;
        let dataLength = 0;
        let lastPageIndex = 0;

        if (!loading) {

            dataLength = data.length;
            if (noOfRows !== "") {
                if (dataLength % noOfRows === 0) {
                    lastPageIndex = Math.floor(dataLength / noOfRows) - 1;
                }
                else {
                    lastPageIndex = Math.floor(dataLength / noOfRows);
                }
            }

            if (noOfRows === "") {
                pageData = data;
            }
            else if (dataLength >= (currentPageIndex + 1) * noOfRows) {
                pageData = data.slice(currentPageIndex * noOfRows, (currentPageIndex + 1) * noOfRows);
            }
            else {
                pageData = data.slice(currentPageIndex * noOfRows, dataLength);
            }

            pageData = pageData.filter(rowData => {
                for (let i = 0; i < keys.length; i++) {
                    if (dataTypes[i] === "String") {
                        if (this.isNotNullOrUndefinedOrBlank(rowData[keys[i]]) && !rowData[keys[i]].toLowerCase().includes(this.state['KEY_' + keys[i]].toLowerCase())) {
                            return false;
                        }
                    }
                    else if (dataTypes[i] === "Number") {
                        if (this.isNotNullOrUndefinedOrBlank(rowData[keys[i]]) && (rowData[keys[i]] < this.state['KEY_' + keys[i]].min || rowData[keys[i]] > this.state['KEY_' + keys[i]].max)) {
                            return false;
                        }
                    }
                    else if (dataTypes[i] === "Boolean") {
                        if (this.isNotNullOrUndefinedOrBlank(rowData[keys[i]].toString()) && this.isNotNullOrUndefinedOrBlank(this.state['KEY_' + keys[i]]) && (rowData[keys[i]].toString() !== this.state['KEY_' + keys[i]].toString())) {
                            return false;
                        }
                    }
                }
                return true;
            });
        }
        //  console.log(pageData)

        return (
            <React.Fragment>
                <Row>
                    <Col sm={3} xs={4} >
                        <Button variant="danger" onClick={this.clearFilters} className="filter-button">
                            Clear filter
                        </Button>
                    </Col>
                    <Col sm={3} xs={4}>
                        <Button id="previousButton" onClick={this.previousPage} disabled={currentPageIndex === 0} >
                            Previous Page
                        </Button>
                    </Col>
                    <Col sm={3} xs={4}>
                        <Button id="nextButton" onClick={this.nextPage} disabled={currentPageIndex >= lastPageIndex}>
                            Next Page
                        </Button>
                    </Col>

                    <Col sm={3}>
                        <input type="number" min="1" value={this.state.noOfRows} placeholder="No. of Rows" onChange={this.changeNoOfRows} className="row-input-field" />
                    </Col>
                </Row>
                <Table style={{ textAlign: "center" }} striped bordered hover variant="dark">
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
                                if (loading) {
                                    return (
                                        <tr>
                                            <td colSpan={headers.length}>
                                                Loading...
                                            </td>
                                        </tr>
                                    )
                                }
                                else {
                                    return (
                                        <React.Fragment>
                                            <tr key="searchFields">
                                                {
                                                    keys.map((key, i) => {
                                                        let inputType = "text";
                                                        if (dataTypes[i] === 'Number') {
                                                            inputType = "number";
                                                        }
                                                        if (dataTypes[i] === 'Boolean') {
                                                            inputType = "booleanSelect";
                                                        }
                                                        if (inputType === "text") {
                                                            return (
                                                                <td key={i}>
                                                                    <input
                                                                        type={inputType}
                                                                        id={'KEY_' + key}
                                                                        placeholder="Filter"
                                                                        onChange={this.handleSearchChange}
                                                                        className="form-control"
                                                                    />
                                                                </td>
                                                            )
                                                        }
                                                        else if (inputType === "number") {
                                                            return (
                                                                <td key={i}>
                                                                    <input
                                                                        style={{ width: "5rem", display: "inline" }}
                                                                        type={inputType}
                                                                        id={'KEY_' + key + '_min'}
                                                                        onChange={this.handleSearchChange}
                                                                        placeholder="Min"
                                                                        className="form-control input-min"
                                                                    />
                                                                    <input
                                                                        style={{ width: "5rem", display: "inline" }}
                                                                        type={inputType}
                                                                        id={'KEY_' + key + '_max'}
                                                                        onChange={this.handleSearchChange}
                                                                        placeholder="Max"
                                                                        className="form-control"
                                                                    />
                                                                </td>
                                                            )
                                                        }
                                                        else if (inputType === "booleanSelect") {
                                                            return (
                                                                <td key={i}>
                                                                    <select
                                                                        value={this.state['KEY_' + key]}
                                                                        id={'KEY_' + key}
                                                                        onChange={this.handleSearchChange}
                                                                        className="form-control"
                                                                    >
                                                                        <option value="">Select</option>
                                                                        <option value="Yes">Yes</option>
                                                                        <option value="No">No</option>
                                                                    </select>
                                                                </td>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <td></td>
                                                            )
                                                        }
                                                    })
                                                }
                                            </tr>
                                            {
                                                (() => {
                                                    if (pageData.length === 0) {
                                                        return (
                                                            <tr>
                                                                <td colSpan={headers.length}>
                                                                    Nothing found to display.
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            pageData.map((row, indexRow) => {
                                                                return (
                                                                    <tr onClick={() => this.handleShowCustom(row, indexRow)} key={indexRow}>
                                                                        {
                                                                            keys.map((key, indexCol) => {
                                                                                return (
                                                                                    <td key={indexCol}>
                                                                                        {row[key] ? row[key].toString() : ""}
                                                                                    </td>
                                                                                )
                                                                            })
                                                                        }
                                                                    </tr>
                                                                )
                                                            })
                                                        )
                                                    }
                                                })()
                                            }
                                        </React.Fragment>
                                    )
                                }
                            })()
                        }
                    </tbody>
                </Table>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Patient Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ModalBody patientDetails={patientDetailsModal} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.handleClose}>
                            Close
            </Button>
                        {/* <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
            </Button> */}
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default GenericTable;
