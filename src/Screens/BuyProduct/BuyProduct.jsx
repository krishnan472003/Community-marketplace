import * as React from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Buttons from "../../components/Button"
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

function BuyProduct() {
  const navigate = useNavigate()
  const location = useLocation();
  const product = location.state
  const handleAddToCart = () => {
    console.log("=======")
      const data = {
        token :localStorage.getItem("token"),
        uId : localStorage.getItem('uId'),
        quantity:1,
        pId : product.pId,
        
      }
      axios.post("http://localhost:5000/api/user/addCart",data)
      .then((data)=>{
          if(data.status == 200){
            console.log(data)
            navigate('/cart')
          }
          else{
            alert(data)
          }
      })
      .catch((err)=>{
        console.log(err)
      }
      
      )
  }
  
  return (
    <Paper>
    <Navbar/>
    <Grid container spacing={5} marginTop={3} marginBottom={2}>
  <Grid item xs={5} marginLeft={5}>
  <img src= {product.image} alt='' width="500px" height="450px"></img><br/><br/>
  <h3  style={{color:"#04AA6D"}}>{product.amount}</h3>
  </Grid>
  <Grid item xs={5}>
    <h3>{product.name}</h3><br></br>
  <h4>Description:</h4>
   <p>{product.description}</p>

<button onClick={handleAddToCart} style={{backgroundColor: '#04AA6D', color:'#fff', border:'none', padding:'10px', borderRadius:'10px'}}>Add to Cart</button>

    </Grid>
</Grid>
<Footer/>
 </Paper>
  )
}

export default BuyProduct
