import React from 'react';

import { Form } from 'react-bootstrap';
import axios from 'axios';
import { uri } from '../../index';

// export default function PHC(props) {

//     let [phcList, setPHCList] = React.useState([]);

//     let { updateValue } = props;

//     const handleChange = event => {
//         updateValue({ phc: event.target.value });
//     }

//     React.useEffect(() => {
//         setPHCList([]);
//         updateValue({ phc: "" });
//         if (props.mandal) {
//             axios.post(uri + 'GetPHCData/', {
//                 mandal: props.mandal
//             })
//                 .then(response => {
//                     console.log(response);
//                     setPHCList(response.data);
//                 })
//                 .catch(err => {
//                     throw err;
//                 });
//         }
//         document.getElementById(props.id).value = props.value;
//     }, [props.mandal, updateValue, props.id, props.value]);

//     try {
//         if (phcList.length > 0) {
//             return (
//                 <Form.Control
//                     as="select"
//                     onChange={handleChange}
//                     id={props.id}
//                 >
//                     <option value="">Select PHC</option>
//                     {
//                         phcList.map((phc, i) => {
//                             return (
//                                 <option value={phc.name} key={i}>{phc.name}</option>
//                             )
//                         })
//                     }
//                 </Form.Control>
//             )
//         }
//         else {
//             return (
//                 <Form.Control
//                     as="select"
//                     onChange={handleChange}
//                     id={props.id}
//                 >
//                     <option value="">Choose...</option>
//                 </Form.Control>
//             )
//         }
//     }
//     catch (err) {
//         console.log(err);
//         return (
//             <Form.Control
//                 as="select"
//                 onChange={handleChange}
//                 id={props.id}
//             >
//                 <option value="">Choose...</option>
//             </Form.Control>
//         )
//     }
// }

export default class PHC extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phcList : []
        }
    }

    handleChange = event => {
        this.props.updateValue({ phc: event.target.value });
    }

    componentDidMount() {
        if (this.props.mandal) {
            axios.post(uri + 'GetPHCData/', {
                mandal: this.props.mandal
            })
                .then(response => {
                    console.log(response);
                    this.setState({phcList: response.data});
                })
                .catch(err => {
                    throw err;
                });
        }
        if(this.props.value){
            document.getElementById(this.props.id).value = this.props.value;
        }
    }

    render() {
        let {phcList} = this.state;
        try {
            if (phcList.length > 0) {
                return (
                    <Form.Control
                        as="select"
                        onChange={this.handleChange}
                        id={this.props.id}
                    >
                        <option value="">Select PHC</option>
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
                        onChange={this.handleChange}
                        id={this.props.id}
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
                    onChange={this.handleChange}
                    id={this.props.id}
                >
                    <option value="">Choose...</option>
                </Form.Control>
            )
        }
    }
}