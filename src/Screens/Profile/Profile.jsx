import * as React from 'react';
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

function Profile() {
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
  <Read
  label="First Name"

      
      default="Cristiano"
    />
    <Read
    label="Age"
      
      default="40"
    />
     <Read
     label="Email"
      
      default="ronaldo@gmail.com"
    />
  </Grid>
  <Grid item xs={6}>
  <Read
  label="Second Name"
      
      default="Ronaldo"
    />
    <Read
    label="Contact Number"
      
      default="7777777777"
    />
     <Read
     label="Balance"
      
      default="10000$"
      
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
  <FullWidthInput
  label="Adress"
    default="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries "
  />
  </Grid>
  </Grid>
  <Grid container spacing={2}  marginLeft={2} marginTop={5}>
  <Grid item xs={6}>
  <FullWidthInput
  label="City"
    default="Madrid"
  />
  </Grid>
  <Grid item xs={6}>
  <FullWidthInput
  label="Pincode"
    default="400007"
  />
  </Grid>
  </Grid>
  <Grid container spacing={2}  marginLeft={45} marginTop={5}>
  <Grid item xs={12}>
  <FullWidthInput
  label="Country"
    default="Portugal"
  />
  </Grid>
  
  </Grid>

  
    
   </Grid>
   <Footer />
    </Paper>
    
  );
 
}

export default Profile