import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Buttons from "../../components/Button"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Cart() {
  const divStyle = {
    color: 'grey',
    paddingLeft:'20'
    
  };
  return (
    <Paper>
    <Navbar/>
    <Grid container spacing={5} marginTop={3} marginBottom={5} direction="column"  alignItems="center">
      <Grid item xs={2} marginLeft={5}>
        <h4>Your Cart Items</h4>
        <a href="/" style={{color:'#04AA6D'}}>Continue Shopping</a>
      </Grid>
    </Grid>

    <Box sx={{ flexGrow: 1 }} margin={5}>
      <Grid container spacing={3} marginBottom={2}>
        <Grid item xs={5}>
        <h6>Product</h6>
        </Grid>
        <Grid item xs>
        <h6>Price</h6>
        </Grid>
        <Grid item xs>
        <h6>Quantity</h6>
        </Grid>
        <Grid item xs>
        <h6>Total</h6>
        </Grid>
      </Grid>

      <Grid>
          <hr />
      </Grid>

      <Grid container spacing={2} >
        <Grid item xs>
        <img src="./imgs/sofa.webp" alt="sofa" width="300px" height="200px"/>
        </Grid>
        <Grid item xs direction="column">
          <h4>Sofa</h4>
          <a href="#" style={{color:'#04AA6D'}}>Remove</a>
        </Grid>
        <Grid item xs>
          <h6>$9.99</h6>
        </Grid>
        <Grid item xs>
        <select name="quantity" id="">
          <option value="1">1</option>
        </select>
        </Grid>
        <Grid item xs>
        <h6>$10.5</h6>
        </Grid>
      </Grid>

      <Grid>
          <hr />
      </Grid>
    </Box>

    <Box sx={{flexGrow:1}} margin={5}>
    <Grid container>
      <Grid item xs={1}>
        <h5>Sub-Total:</h5>
      </Grid>
      <Grid item xs={2}>
        <h5>$10.5</h5>
      </Grid>
      <Grid item xs>
        <Buttons
            variant="contained"
            text="Checkout"
        />
      </Grid>
    </Grid>
    </Box>
    <Footer/>
    </Paper>
  )
}

export default Cart;
