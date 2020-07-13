import React from 'react';
// import ReactDOM from 'react-dom';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

// import Box from '@material-ui/core/Box';
// import { Button } from '@material-ui/core';


const useStyles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      alignContent: 'center',
      flexGrow: 1,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    //width: '25ch'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class Covid extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      input: '',
      userAge: '',
      car: 'volvo',
      age: '',
      gender: '',
      date: new Date(),
      hemo: null,
      ref: '',
      mandal: '',
      phc: '',
      refered: null,
      test: null
    }
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: '',
      car: e.target.value
    });
  }
  handleChange2(e) {
    console.log("hello");
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }

  testing = () => {
    return (
      <div>
        inside function
      </div>
    );
  }
  onChange = date => this.setState({ date })
  render() {
    const { classes } = this.props;
    var chintoor = ["Tulasipaka", "Edugurallapally"];
    var yetapaka = ["laxmipuram", "Nellipakka"];

    const setDataRefered = (data) => {
      this.setState({
        test: data
      })
    };
    const handleChange = (event) => {
      this.setState({
        age: event.target.value
      })
    };

    const handleChangeRefered = (event) => {
      this.setState({
        refered: event.target.value
      })
    };
    const handleChangePhc = (event) => {
      this.setState({
        phc: event.target.value
      })
    };
    const handleChangeMandal = (event) => {
      this.setState({
        mandal: event.target.value
      })
    };

    const onChangeDate = (event) => {
      this.setState({
        date: event.target.value
      })
    };
    const handleChangeGenger = (event) => {
      this.setState({
        gender: event.target.value
      })
    };

    const handleDateChange = (event) => {
      this.setState({
        date: event.target.value
      })
    };
    const handleChangeHemo = (event) => {
      console.log(event.target.value)
      this.setState({
        hemo: event.target.value

      })
      const hemoglobin = event.target.value
      const id = 5
      console.log(this.state.hemo)
      switch (id) {
        case 5: if (hemoglobin <= 7) {
          this.setState({
            ref: "normal"
          })
        }
        else if (hemoglobin > 7 && hemoglobin <= 9) {
          this.setState({
            ref: "moderate"
          })
        }
        else {
          this.setState({
            ref: "extreme"
          })
        }
          break;
      }
      console.log(this.state.ref)
      const a = this.state.mandal
      var cars
    };
    return (
      <Grid container spacing={3} display="flex" justifyContent="center">
        <Grid item xs={8} alignContent='center' alignItems='center' direction='row'>
          <form className={classes.root} noValidate autoComplete="off">

            <FormControl required='true' variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-required-label">Mandal</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.mandal}
                onChange={handleChangeMandal}
                label="Mandal"
              >
                <MenuItem value={"Chintoor"}>Chintoor</MenuItem>
                <MenuItem value={"Yetapaka"}>Yetapaka</MenuItem>
                <MenuItem value={"Kunnavaram"}>Kunnavaram</MenuItem>
                <MenuItem value={"VR Puram"}>VR Puram</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-required-label">PHC</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.phc}
                onChange={handleChangePhc}
                label="PHC"
              >
                <MenuItem value={10}>Tulasipaka</MenuItem>
                <MenuItem value={20}>Edugurallapally</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-required-label">Village Secretiate</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.phc}
                onChange={handleChange}
                label="PHC"
              >
                <MenuItem value="" >
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-required-label">Village</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.age}
                onChange={handleChange}
                label="PHC"
              >
                <MenuItem value="" >
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-password-input"
              label="Enter Age"
              //type="password"
              // autoComplete="current-password"
              variant="outlined"
            />
            <br>
            </br>
            <TextField
              id="outlined-password-input"
              label="Enter Name"
              //type="password"
              // autoComplete="current-password"
              variant="outlined"
            />
            <br></br>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={this.state.gender} onChange={handleChangeGenger}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            <br></br>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-required-label">Relation</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.age}
                onChange={handleChange}
                label="Relation"
              >
                <MenuItem value="" >
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Son of</MenuItem>
                <MenuItem value={20}>Daughter of</MenuItem>
                <MenuItem value={30}>Wife of</MenuItem>
              </Select>
            </FormControl>
            <TextField id="standard-basic" label="Standard" />
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={this.state.date}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider> */}
            <br>
            </br>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-required-label">Blood Group</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.age}
                onChange={handleChange}
                label="PHC"
              >
                <MenuItem value="" >
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-required-label">PVTG</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.age}
                onChange={handleChange}
                label="PHC"
              >
                <MenuItem value="" >
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.age}
                onChange={handleChange}
                label="PHC"
              >
                <MenuItem value="" >
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Children 0-5 years</MenuItem>
                <MenuItem value={20}>Children 5-11 years</MenuItem>
                <MenuItem value={30}>Children 12-15 years</MenuItem>
                <MenuItem value={10}>Non Pregnant Women</MenuItem>
                <MenuItem value={20}>Pregnant Women(1st trimester)</MenuItem>
                <MenuItem value={30}>Men</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <TextField
              id="outlined-password-input"
              label="Enter Haemoglobin"
              type="number"
              onChange={handleChangeHemo}
              value={this.state.hemo}
              required="true"
              // autoComplete="current-password"
              variant="outlined"
            />
          Referal values is {this.state.ref}
            {/* <Calendar
          onChange={this.onChange}
          value={this.state.date}
        /> */}
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-required-label">Yes/No</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.refered}
                onChange={handleChangeRefered}
                label="Refered"
              >
                <MenuItem value={"true"}>yes</MenuItem>
                <MenuItem value={"false"}>no</MenuItem>
              </Select>
            </FormControl>


      Hi {this.state.test}
          </form>
        </Grid>
      </Grid>
    );
  }
}
// export default Covid;
export default withStyles(useStyles)(Covid);
