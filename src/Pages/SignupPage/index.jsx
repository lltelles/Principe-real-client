/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function FormPropsTextFields() {

  return (
    <Box
      component="form"
      // onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        display: 'flex',
        flexDirection: 'column'
      }}
      noValidate
      autoComplete="off"
    >

      <div>
        <TextField
          required
          id="standard-required"
          label="First Name"
          variant="standard"
           
        />
        <TextField
          required
          id="standard-disabled"
          label="Last Name"
          variant="standard"
        />
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          required
          id="standard-read-only-input"
          label="Email"
          type="text"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          required
          id="standard-number"
          label="Contact Number"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />

      </div>
    </Box>
  );
}