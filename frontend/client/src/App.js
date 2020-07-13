import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Anemia from './Anemia';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import './App.css';

function App() {
  return (
    <Grid container direction='column'>
    <Grid item>
    <Header/>
    </Grid>
    <Grid item container>
    <Grid item xs={3}/>
    <Anemia />
    <Grid item xs={3}/>
    
    </Grid>
    
        </Grid>

  );
}

export default App;
