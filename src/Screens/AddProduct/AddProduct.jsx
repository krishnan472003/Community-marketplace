import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Input from "../../components/Input"
import TextFields from "../../components/TextField"
import AddImg from "../../components/AddImg"
import Buttons from "../../components/Button"



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function AddProduct() {
  const divStyle = {
    color: 'grey',
    paddingLeft:'20'
    
  };
  return (
    <Paper>
    <Navbar/>

    <Grid container spacing={2} marginTop={5}>
  <Grid item xs={6}>
  <h4>Add Image:</h4>
  </Grid>
  <Grid item xs={3}>
  <h4>Product Details:</h4>
    <Input
      label="Name"
    />
    <Input
      label="Size"
    />
    <Input
      label="Amount"
    />
   
    </Grid>
    <Grid item xs={3}>
  <TextFields 
  label="Product Description"

  />
   
  
  </Grid>
    
  
  
</Grid>

<Grid container spacing={2} marginTop={2} >

<Grid container spacing={2} marginLeft={20} >


<Grid item xs={3} >

<AddImg  />
<h4 style={divStyle} >Choose File</h4>
  
</Grid>

</Grid>

<Grid container spacing={2} marginLeft={80} ><Grid item xs={6}>

<h4>Adress Details:</h4>
  <Input
    label="Adress"
  />
  <Input
    label="Postal Code"
  />
  <Input
    label="Contact No."
  />
 
  </Grid>
  </Grid>
  <Buttons
  
    variant="contained"
    text="Submit"
  />




</Grid>


<Footer/>
 </Paper>
  )
}

export default AddProduct