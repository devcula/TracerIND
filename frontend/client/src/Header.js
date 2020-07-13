import React from 'react';
import ReactDOM from 'react-dom';
import Covid from './Covid';
import { AppBar, Toolbar } from '@material-ui/core';
  
  class Header extends React.Component {
    constructor(props) {
      super(props);
      // change code below this line
      this.state = {
        input: '',
        userAge: '',
        car:'volvo',
      }
    }
  

    render() {
      return (
        <AppBar position='static'>
            <Toolbar>

            </Toolbar>
        </AppBar>
      );
    }
  }
export default Header;