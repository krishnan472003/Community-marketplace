import * as React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Map from '../../components/Map';

function Fianance(){
    const [order,setOrder] = useState([]);
    const [latLong,setLatLong] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:5000/api/product/pastOrder?uId=${localStorage.getItem("uId")}`)
        .then(response => {
          const fetchedData = response.data;
          console.log(response.data)
          if(fetchedData.status === 200) {
            setOrder(fetchedData.pastOrder);
            setLatLong(fetchedData.coordinates);
            console.log(order);
            console.log(latLong);

          }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }, []);
    useEffect(() => {
      
    }, [order, latLong]);
    
    
    const textStyle={
        color:'green'        
      }

    return(<div>
     <Navbar />
     <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'} marginTop={5}>
      <Grid item xs>
      <h4>Your Order has been successfully placed!!</h4>
      
      </Grid>
      <Grid item xs>
        <a href="/" style={{color:'#04AA6D'}}>Continue Shopping</a>
      </Grid>
     </Grid>

{latLong.length > 0 ?<Map coordinates = {latLong}/>:<></>
}
     <Grid container spacing={2} marginLeft={3}   marginTop={4} >
     <h2 style={textStyle}  >Your Past Orders</h2>
     </Grid>
     <Box sx={{ flexGrow: 1 }} margin={3}>
      <Grid container spacing={3} marginBottom={2}>
        <Grid item xs={4}>
        <h6>Id</h6>
        </Grid>
        <Grid item xs={4}>
        <h6>Price</h6>
        </Grid>
        <Grid item xs>
        <h6>Products</h6>
        </Grid>
      </Grid>

      <Grid>
          <hr />
      </Grid>

     
     {order.map((orderItem) => (
      <>
        <Grid container spacing={2} key={orderItem.tmstp}>
          <Grid item xs direction="column">
            <div>
              <h6>OrderId:{orderItem.tmstp}</h6>
            </div>
          </Grid>
          <Grid item xs>
            <h6>{orderItem.total}</h6>
          </Grid>
          <Grid item xs>
            {
              orderItem.products.map((product)=>{
                return(<h6>{product.quantity} x {product.name}</h6>)
              })
            }
          </Grid>
        </Grid>
    
        <Grid>
          <hr />
        </Grid>
      </>
    ))}
    

    </Box>
    <Footer />
    </div>

    );

}
export default Fianance