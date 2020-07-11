import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Appbar title='Enter User Details'></Appbar>
          <TextField
            hintText='Enter Your First Name'
            floatingLabelText='First Name'
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          ></TextField>
          <br />
          <TextField
            hintText='Enter Your Last Name'
            floatingLabelText='Last Name'
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          ></TextField>
          <br />
          <TextField
            hintText='Enter Your Email'
            floatingLabelText='Email'
            onChange={handleChange('email')}
            defaultValue={values.email}
          ></TextField>
          <br />
          <RaisedButton
            label='continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          ></RaisedButton>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: '15px',
  },
};
export default FormUserDetails;
