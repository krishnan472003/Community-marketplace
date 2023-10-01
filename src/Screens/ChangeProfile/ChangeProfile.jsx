import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Input from "../../components/Input"
import Buttons from "../../components/Button"
import { Box } from '@mui/material';
import SelectProvince from '../../components/SelectProvince';
import SelectCity from '../../components/SelectCity';


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  
  function ChangeProfile() {
    const divStyle = {
      color: 'grey',
      paddingLeft:'20'
      
    };
  return (
    <Paper>
    <Navbar/>
    <Grid container direction='column' margin={3}>
    <h3>Hello, Name</h3><br/>
    <h3>Your Current Balance:</h3><br/><br/>
    </Grid>

    <Grid container margin={3}>
    <h5>Shipping Address</h5>
    </Grid>
    
    <Box sx={{flexGrow:1}} margin={3}>
    
    <Grid container>
      <Grid item xs>
        <Input label="First Name"/>
      </Grid>
      <Grid item xs>
        <Input label="Last Name"/>
      </Grid>
    </Grid>
    
    <Grid container>
      <Grid item xs>
        <Input label="Address"/>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs>
        <Input label="Shipping Note(optional)" />
      </Grid>
    </Grid>

    <Grid container>
    <Grid item xs>
        <Input label="City"/>
      </Grid>
      <Grid item xs>
        <Input label="Postal Code"/>
      </Grid>
      <Grid items xs>
      <SelectProvince
      />
      </Grid>
    </Grid>

    <Grid container marginBottom={2}>
      <Grid item xs>
        <SelectCity />
      </Grid>
    </Grid>

    <Grid container justifyContent='flex-end'>
      <Buttons
        variant="contained"
        text="Save"
      />
    </Grid>
    </Box>
    <Footer/>
    </Paper>
  )
}

export default ChangeProfile