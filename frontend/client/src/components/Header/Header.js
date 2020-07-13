import React from 'react';

import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';

import { NavLink } from 'react-router-dom'

function Header() {
  const defaultStyle = {
    "textDecoration": "none",
    "color": "white"
  }

  const activeStyle = {
    "color": "#8F8F8F"
  }
  
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container justify="flex-end">
          <NavLink activeStyle={activeStyle} style={defaultStyle} exact to="/">
            <Button color="inherit">
              <strong>Home</strong>
            </Button>
          </NavLink>
          <NavLink activeStyle={activeStyle} style={defaultStyle} exact to="/new">
            <Button color="inherit">
              <strong>Add</strong>
            </Button>
          </NavLink>
          <NavLink activeStyle={activeStyle} style={defaultStyle} exact to="/dashboard">
            <Button color="inherit">
              <strong>Dashboard</strong>
            </Button>
          </NavLink>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Header;