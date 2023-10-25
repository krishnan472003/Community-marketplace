import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import Buttons from "../../components/Button"
import { Box } from '@mui/material';
import SelectProvince from '../../components/SelectProvince';
import SelectCity from '../../components/SelectCity';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  
  function ChangeProfile(){

    const [profileData, setProfileData] = useState({
      fName: '',
      lName: '',
      city: '',
      state: '',
      address: '',
      postalCode: '',
      contactNumber: '',
    });
    const divStyle = {
      color: 'grey',
      paddingLeft:'20'
      
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProfileData({
        ...profileData,
        [name]: value,
        uId:123
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Make an HTTP PUT request to update the user's profile
      // axios.put(`/api/updateProfile/${userUid}`, profileData)
      axios.post(`http://localhost:5000/api/user/change`, profileData)
        .then((response) => {
          console.log('Profile updated:', response.data);
          // Handle success (e.g., show a success message)
        })
        .catch((error) => {
          console.error('Profile update error:', error);
          // Handle error (e.g., show an error message)
        });
    };
  return (
    <Paper>
    <Navbar/>
    <form onSubmit={handleSubmit}>
    <Grid container direction='column' marginTop={5} alignItems='center'>
    <h3>Hello, Name</h3><br/>
    <h3>Your Current Balance:</h3><br/><br/>
    </Grid>

    <Grid container marginTop={5}>
    <h5>Shipping Address</h5>
    </Grid>
    
    <Box sx={{flexGrow:1}}>
    
    <Grid container>
      <Grid item xs>
      <TextField
          required
          name="fName"
          id="outlined-required"
          label="First Name"
          multiline
          defaultValue=" "
          value={profileData.fName}
          onChange={handleInputChange}
          
          
        />
      </Grid>
      <Grid item xs>
      <TextField
          required
          name="lName"
          id="outlined-required"
          label="Last Name"
          multiline
          defaultValue=" "
          value={profileData.lName}
          onChange={handleInputChange}
          
          
        />
      </Grid>
    </Grid>
    
    <Grid container>
      <Grid item xs>
      <TextField
          required
          name="address"
          id="outlined-required"
          label="Address"
          multiline
          defaultValue=" "
          value={profileData.address}
          onChange={handleInputChange}
          
          
        />
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs>
      <TextField
          required
          name="city"
          id="outlined-required"
          label="City"
          multiline
          defaultValue=" "
          value={profileData.city}
          onChange={handleInputChange}
          
          
        />
      </Grid>
    </Grid>

    <Grid container>
    <Grid item xs>
    <SelectProvince/>
      </Grid>
      <Grid item xs>
      <TextField
          required
          name="postalCode"
          id="outlined-required"
          label="Postal Code"
          multiline
          defaultValue=" "
          value={profileData.postalCode}
          onChange={handleInputChange}
          
          
        />
      </Grid>
      <Grid items xs>
      {/* <SelectProvince
      /> */}
      </Grid>
    </Grid>

    <Grid container marginBottom={2}>
      <Grid item xs>
        <SelectCity /><TextField
          required
          name="contactNumber"
          id="outlined-required"
          label="Contact Number"
          multiline
          defaultValue=" "
          value={profileData.contactNumber}
          onChange={handleInputChange}
          
          
        />
      </Grid>
    </Grid>

    <Grid container justifyContent='flex-end' marginBottom={2}>
    <Button variant="contained" text="Submit" type="submit">Submit</Button>
    </Grid>
    </Box>
    </form>
    <Footer/>
    </Paper>
  )
}

export default ChangeProfile