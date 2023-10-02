import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Read(props) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
         

          id="standard-read-only-input"
          label={props.label}
          defaultValue={props.default}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
       
      </div>
    </Box>
  );
}



