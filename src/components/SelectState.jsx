import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectState() {
  const [State, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Box sx={{ width: 350 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={State}
          label="State"
          onChange={handleChange}
        >
          <MenuItem value={'Andaman & Nicobar Islands'}>Andaman & Nicobar Islands</MenuItem>
          <MenuItem value={'Andhra Pradesh'}>Andhra Pradesh</MenuItem>
          <MenuItem value={'Arunachal Pradesh'}>Arunachal Pradesh</MenuItem>
          <MenuItem value={'Assam'}>Assam</MenuItem>
          <MenuItem value={'Bihar'}>Bihar</MenuItem>
          <MenuItem value={'Chandigarh'}>Chandigarh</MenuItem>
          <MenuItem value={'Chhattisgarh'}>Chhattisgarh</MenuItem>
          <MenuItem value={'Dadra & Nagar Haveli'}>Dadra & Nagar Haveli</MenuItem>
          <MenuItem value={'Daman & Diu'}>Daman & Diu</MenuItem>
          <MenuItem value={'Delhi'}>Delhi</MenuItem>
          <MenuItem value={'Goa'}>Goa</MenuItem>
          <MenuItem value={'Gujarat'}>Gujarat</MenuItem>
          <MenuItem value={'Haryana'}>Haryana</MenuItem>
          <MenuItem value={'Himachal Pradesh'}>Himachal Pradesh</MenuItem>
          <MenuItem value={'Jammu & Kashmir'}>Jammu & Kashmir</MenuItem>
          <MenuItem value={'Jharkhand'}>Jharkhand</MenuItem>
          <MenuItem value={'Karnataka'}>Karnataka</MenuItem>
          <MenuItem value={'Kerala'}>Kerala</MenuItem>
          <MenuItem value={'Lakshadweep'}>Lakshadweep</MenuItem>
          <MenuItem value={'Madhya Pradesh'}>Madhya Pradesh</MenuItem>
          <MenuItem value={'Maharashtra'}>Maharashtra</MenuItem>
          <MenuItem value={'Manipur'}>Manipur</MenuItem>
          <MenuItem value={'Meghalaya'}>Meghalaya</MenuItem>
          <MenuItem value={'Mizoram'}>Mizoram</MenuItem>
          <MenuItem value={'Nagaland'}>Nagaland</MenuItem>
          <MenuItem value={'Odisha'}>Odisha</MenuItem>
          <MenuItem value={'Pondicherry'}>Pondicherry</MenuItem>
          <MenuItem value={'Punjab'}>Punjab</MenuItem>
          <MenuItem value={'Rajasthan'}>Rajasthan</MenuItem>
          <MenuItem value={'Sikkim'}>Sikkim</MenuItem>
          <MenuItem value={'Tamil Nadu'}>Tamil Nadu</MenuItem>
          <MenuItem value={'Telangana'}>Telangana</MenuItem>
          <MenuItem value={'Tripura'}>Tripura</MenuItem>
          <MenuItem value={'Uttar Pradesh'}>Uttar Pradesh</MenuItem>
          <MenuItem value={'Uttaranchal'}>Uttaranchal</MenuItem>
          <MenuItem value={'West Bengal'}>West Bengal</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
