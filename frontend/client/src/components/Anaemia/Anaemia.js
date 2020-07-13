import React from 'react';
import ReactDOM from 'react-dom';
import Covid from '../MainForm/Covid';

const inputStyle = {
  width: 235,
  margin: 5
}

class Anaemia extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      car: 'volvo',
    }

  }


  render() {
    const handleChange = (event) => {
      this.setState({
        car: event.target.value
      })
    };
    return (
      <div>

        <select id="cars" name="cars" onChange={this.handleChange}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </select>
        {
          this.state.car === 'volvo' ? <Covid /> : <h1>form coming soon</h1>
        }
      </div>
    );
  }
}
export default Anaemia;
