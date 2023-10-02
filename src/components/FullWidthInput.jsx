import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthInput(props) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField 
      fullWidth 
      label={props.label}
       id="fullWidth"
       InputProps={{
            readOnly: true,
          }}
       defaultValue={props.default}
       variant="standard"
       
        />
    </Box>
  );
}
