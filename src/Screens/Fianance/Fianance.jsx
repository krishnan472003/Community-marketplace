import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Button from '@mui/material/Button';
import { useState } from 'react';
import Box from '@mui/material/Box';
function Fianance()
{
    const [balance,setBalance]=useState(0);
    const [amt,setAmt]=useState(0);

    function handleChange(event)
    {
        return(setAmt(parseInt(event.target.value)))

    }
    function addFunds(event)
    {
        console.log(typeof(balance),typeof(amt))
       return(setBalance(balance+amt));
    }
    function subFunds(event)
    {
        console.log(typeof(balance),typeof(amt))
       return(setBalance(balance-amt));
    }
    const textStyle={
        color:'green'
        
        
      }
    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: 555,
        height: 360,
        backgroundColor:'#F1EFEF',
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'center',
      }));

    return(<div>
     <Navbar />
     
     {/* <Grid container spacing={2}  marginLeft={45} marginTop={10}>
     
     <Grid item xs={6}>
     <DemoPaper variant="elevation">
     <Grid container spacing={2}   marginTop={1} >
    
     <h4 style={textStyle}>RentNow Balance</h4>
     <Grid container spacing={2} marginLeft={29}   marginTop={4} >
        <h2 >{balance}</h2>
     </Grid>

  
        
        </Grid>
        <Grid container spacing={2}   marginTop={1} >
    
     <h4 style={textStyle}>Enter Amount:</h4>
     <Grid container spacing={2} marginLeft={18}   marginTop={4} >
     <input type="number" id="outlined-basic" onChange={handleChange}   value={amt} label="Amount" variant="outlined" />
     </Grid>
     <Grid container spacing={2} marginLeft={0}  marginTop={2} >
     <Grid item xs={6}>
     <Button onClick={addFunds} variant="contained" style={{backgroundColor:'#04AA6D'}}>Credit</Button>
     </Grid>
     <Grid item xs={3} >
     <Button id="" variant="contained" onClick={subFunds} style={{backgroundColor:'#04AA6D'}}>Withdraw</Button>
     </Grid>

     
     </Grid>

     

     

  
        
        </Grid>

     </DemoPaper>
     </Grid> */}
  
    


     {/* </Grid> */}
     <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'} marginTop={5}>
      <Grid item xs>
      <h4>Your Order has been successfully placed!!</h4>
      </Grid>
      <Grid item xs>
        <a href="/" style={{color:'#04AA6D'}}>Continue Shopping</a>
      </Grid>
     </Grid>
     
     <Grid container spacing={2} marginLeft={3}   marginTop={4} >
     <h2 style={textStyle}  >Your Past Orders</h2>
     </Grid>
     <Box sx={{ flexGrow: 1 }} margin={3}>
      <Grid container spacing={3} marginBottom={2}>
        <Grid item xs={6}>
        <h6>Product</h6>
        </Grid>
        <Grid item xs>
        <h6>Price</h6>
        </Grid>
        <Grid item xs>
        <h6>Quantity</h6>
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
          <div>
            <h6>ProductId:</h6>
            <h6>OrderId:</h6>
          </div>
        </Grid>
        <Grid item xs>
          <h6>$9.99</h6>
        </Grid>
        <Grid item xs>
        {/* <select name="quantity" id="">
          <option value="1">1</option>
        </select> */}
          <h6>1</h6>
        </Grid>
        {/* <Grid item xs>
        <h6>$10.5</h6>
        </Grid> */}
      </Grid>

      <Grid>
          <hr />
      </Grid>
    </Box>

     

    

    <Footer />


    
    </div>

    );

}
export default Fianance