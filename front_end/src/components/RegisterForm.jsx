import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          eventName: '',
          eventDescription: '',
          numGATickets: '',
          gaTicketPrice: '',
        };

        this.handleCreate = this.handleCreate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleCreate(event) {
        alert('Registering: ' + this.state.eventName);
        event.preventDefault();

        // TODO: redirect to confirmation page
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name

        this.setState({
          [name]: value
        });
    }

    render() {
        return (
          <Box
            stlye={{justifyContent:'center', alignItems:'center'}}
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',

              }}
            >
              <TextField
                style={{
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
                required
                label="First Name"
                variant="filled"
                name="firstName"
                onChange={this.handleChange}
              />
              <TextField
                style={{
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
                required
                label="Last Name"
                variant="filled"
                name="lastName"
                onChange={this.handleChange}
              />
              <TextField
                style={{
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
                required
                label="Email Address"
                variant="filled"
                name="emailAdd"
                onChange={this.handleChange}
              />
              <TextField
                style={{
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
                required
                label="Username"
                variant="filled"
                name="userAdd"
                onChange={this.handleChange}
              />
              <TextField
                style={{
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
                required
                label="Date of Birth"
                variant="filled"
                name="dob"
                onChange={this.handleChange}
              />
              <TextField
                style={{
                  marginTop: '20px',
                  marginBottom: '20px'
                }}
                required
                label="Password"
                variant="filled"
                name='passWord'
                onChange={this.handleChange}
              />
              <TextField
                style={{
                  marginTop: '20px',
                  marginBottom: '20px'
                }}
                required
                label="Confirm Password"
                variant="filled"
                name='passWord'
                onChange={this.handleChange}
              />
              <Button
                style={{
                  marginTop: '20px',
                  marginBottom: '20px'
                }}
                variant="contained"
                onClick={this.handleCreate}
              >
                Register User
              </Button>
            </div>
          </Box>
        );
      }
}
