import * as React from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Buttons from "../../components/Button"
import { useLocation } from 'react-router';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


function BuyProduct() {
  const location = useLocation();
  const product = location.state
  const handleAddToCart = () => {

      const data = {
        token :localStorage.get("token"),
        name:product.name,
        quantity:1,
        pId : product.pId,
        
      }
      axios.post("http://localhost:5000/api/user/addCart")
  }
  
  return (
    <Paper>
    <Navbar/>
    <Grid container spacing={5} marginTop={3} marginBottom={2}>
  <Grid item xs={5} marginLeft={5}>
  <img src="" alt='' width="500px" height="450px"></img><br/><br/>
  <h3  style={{color:"#04AA6D"}}>{product.amount}</h3>
  </Grid>
  <Grid item xs={5}>
    <h3>{product.name}</h3><br></br>
  <h4>Description:</h4>
   <p>{product.description}</p>

    <Buttons
        variant="contained"
        text = "Add to Cart"
        onClick={handleAddToCart}
    />
    </Grid>
</Grid>
<Footer/>
 </Paper>
  )
}

export default BuyProduct
