import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Appbar title='Enter Personal Details'></Appbar>
          <TextField
            hintText='Enter Occupation'
            floatingLabelText='Occupation'
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          ></TextField>
          <br />
          <TextField
            hintText='Enter Your City'
            floatingLabelText='City'
            onChange={handleChange('city')}
            defaultValue={values.city}
          ></TextField>
          <br />
          <TextField
            hintText='Enter Your Bio'
            floatingLabelText='Bio'
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          ></TextField>
          <br />
          <RaisedButton
            label='continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          ></RaisedButton>{' '}
          <RaisedButton
            label='back'
            primary={false}
            style={styles.button}
            onClick={this.back}
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
export default FormPersonalDetails;
