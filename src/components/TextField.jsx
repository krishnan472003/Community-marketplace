import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFields(props) {
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
          id="outlined-multiline-static"
          label={props.label}
          multiline
          rows={4}
          defaultValue=""
        />
      </div>
      
    </Box>
  );
}
