import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Buttons from "../../components/Button"
import FullWidthInput from "../../components/FullWidthInput"
import Read from "../../components/ReadOnly"
import Avatar from "../../components/Avatar"
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';

function Profile() {
  const [userData, setUserData] = useState({
    fName: '',
    lName: '',
   
    
    contactNumber: '',
    balance: '',
    uId: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  });
  const uId = 123;
  const fetchUserData = async (uId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/userProfile`); // Replace with your backend API endpoint
      if (response.ok) {
        const data = await response.json();
        setUserData(data); // Set the user data in state
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };
  
  useEffect(() => {
    fetchUserData(uId);
  }, [uId]);

  return(
    <Paper>
    <Navbar />
    <Grid container spacing={2} marginLeft={5} marginTop={5}>
    <Avatar />

    </Grid>
    
    <Grid container spacing={2} marginLeft={5} marginTop={5}>
    <Grid item xs={6}>
  <h4>Personal Details</h4>
  </Grid>
  <Grid container spacing={2}  marginLeft={2} marginTop={5}>
  <Grid item xs={6}>
  <TextField
         

          id="standard-read-only-input"
          label="fName"
          value={userData.fName}
          
          defaultValue="Name"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
     
      
  </Grid>
  <Grid item xs={6}>
  <TextField
         

         id="standard-read-only-input"
         label="Second Name"
         value={userData.lName}
         name="lName"
         defaultValue="Second Name"
         InputProps={{
           readOnly: true,
         }}
         variant="standard"
       />
    <TextField
         

         id="standard-read-only-input"
         label="Contact Number"
         value={userData.contactNumber}
         name="contactNumber"
         
         defaultValue="Contact Number"
         InputProps={{
           readOnly: true,
         }}
         variant="standard"
       />
     <TextField
         

         id="standard-read-only-input"
         label="Balance"
         value={userData.balance}
         name="balance"
         
         defaultValue="Balance"
         InputProps={{
           readOnly: true,
         }}
         variant="standard"
       />
    <TextField
         

         id="standard-read-only-input"
         label="uId"
         value={userData.uId}
         name="uId"
         
         defaultValue="uId"
         InputProps={{
           readOnly: true,
         }}
         variant="standard"
       />
  </Grid>
  

  </Grid>
  
    
   </Grid>
   <Grid container spacing={2} marginLeft={5} marginTop={5}>
    <Grid item xs={6}>
  <h4>Adress Details</h4>
  </Grid>
  <Grid container spacing={2}  marginLeft={2} marginTop={5}>
  <Grid item xs={6}>
  <TextField
         

         id="standard-read-only-input"
         label="Address"
         value={userData.address}
         name="address"
         
         defaultValue="Address"
         InputProps={{
           readOnly: true,
         }}
         variant="standard"
       />
  </Grid>
  </Grid>
  <Grid container spacing={2}  marginLeft={2} marginTop={5}>
  <Grid item xs={6}>
  <TextField
         

         id="standard-read-only-input"
         label="City"
         value={userData.city}
         name="city"
         
         defaultValue="City"
         InputProps={{
           readOnly: true,
         }}
         variant="standard"
       />
        
       
  </Grid>
  <Grid item xs={6}>
  <TextField
         

         id="standard-read-only-input"
         label="State"
         value={userData.state}
         name="state"
         
         
         InputProps={{
           readOnly: true,
         }}
         variant="standard"
       />
  </Grid>
  </Grid>
  <Grid container spacing={2}  marginLeft={45} marginTop={5}>
  <Grid item xs={12}>
  <TextField
         

         id="standard-read-only-input"
         label="PostalCode"
         value={userData.postalCode}
         name="postalCode"
         
         
         defaultValue="PostalCode"
         InputProps={{
           readOnly: true,
         }}
         variant="standard"
       />
  </Grid>
  
  </Grid>

  
    
   </Grid>
   <Footer />
    </Paper>
    
  );
 
}

export default Profile