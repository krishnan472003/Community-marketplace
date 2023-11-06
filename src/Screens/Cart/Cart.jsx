import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import useRazorpay from 'react-razorpay';
import { useNavigate } from 'react-router-dom';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


function Cart() {
  const [Razorpay] = useRazorpay();
  const navigate = useNavigate()
  const [cart, setCart] = useState(null)
  useEffect(() => {
    const uId = localStorage.getItem("uId")
    axios.get("http://localhost:5000/api/user/cart/?uId=" + uId)
      .then((response) => {
        if (response.data && response.data.status === 200) {
          setCart(response.data.cart)
        }
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, [])

  const initPayment = (data) => {
    const uId = localStorage.getItem("uId")
    console.log(data?.amount)
    const options = {
      key: "rzp_test_ycQCihpOv9oF1I",
      amount: Number(data?.amount),
      currency: data?.currency,
      name: uId.toString(),
      description: "Test Transaction",
      order_id: data?.id,
      handler: async (response) => {
        try {
          response.uId = localStorage.getItem("uId")
          const verifyUrl = "http://localhost:5000/api/product/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
};

  const handlePayment = async () => {
    try {
      const uId = localStorage.getItem("uId")
      const orderUrl = "http://localhost:5000/api/product/buy";
      const { data } = await axios.post(orderUrl, { uId: uId });
      console.log(data+"ppppp");
      initPayment(data);
    } catch (error) {
      console.log(error);
    }
  };

  const increaseValue = (cartItem) => {
    // Get the current value from state and increment it
    const updatedCart = cart.items.map((item) => ({
      ...item,
      quantity: item.id === cartItem.id ? item.quantity + 1 : item.quantity
    }));
    setCart({ ...cart, items: updatedCart });
  };

  const decreaseValue = (cartItem) => {
    // Get the current value from state and decrement it
    const updatedCart = cart.items.map((item) => ({
      ...item,
      quantity: item.id === cartItem.id ? item.quantity - 1 : item.quantity
    }));
    setCart({ ...cart, items: updatedCart });
  };


  return (
    <Paper>
      <Navbar />
      <Grid container spacing={5} marginTop={3} marginBottom={5} direction="column" alignItems="center">
        <Grid item xs={2} marginLeft={5}>
          <h4>Your Cart Items</h4>
          <a href="/" style={{ color: '#04AA6D' }}>Continue Shopping</a>
        </Grid>
      </Grid>

      <Box sx={{ flexGrow: 1 }} margin={5}>
        <Grid container spacing={3} marginBottom={2}>
          <Grid item xs={6}>
            <h6>Product</h6>
          </Grid>
          <Grid item xs>
            <h6>Quantity</h6>
          </Grid>
          <Grid item xs>
            <h6>Sub-Total</h6>
          </Grid>
        </Grid>
        <Grid>
          <hr />
        </Grid>

        {
          cart?.items?.map((cartItem) => {
            return (
              <>
                <Grid container spacing={2} >
                  <Grid item xs>
                    <img src="./imgs/sofa.webp" alt="sofa" width="300px" height="200px" />
                  </Grid>
                  <Grid item xs direction="column">
                    <h4>{cartItem.name}</h4>
                    <a href="#">Remove</a>
                  </Grid>
                  {/* <Grid item xs>
                    <h6>{cartItem.price}</h6>
                  </Grid> */}
                  <Grid item xs>
                  <form>
                    <div className="value-button" id="decrease" onClick={() => decreaseValue(cartItem)} value="Decrease Value">-</div>
                    <input type="number" id="number" value={cartItem.quantity} />
                    <div className="value-button" id="increase" onClick={() => increaseValue(cartItem)} value="Increase Value">+</div>
                  </form>
                  </Grid>
                  <Grid item xs>
                    <h6>{cartItem.price * cartItem.quantity}</h6>
                  </Grid>

                </Grid>

                <Grid>
                  <hr />
                </Grid>
              </>
            )
          })
        }
        <Grid>
        </Grid>

      </Box>

      <Box sx={{ flexGrow: 1 }} margin={5}>
        <Grid container>
          <Grid item xs={1}>
            <h5>Total:</h5>
          </Grid>
          <Grid item xs={2}>
            <h5>{cart?.total}</h5>
          </Grid>
          <Grid item xs>
            <Button
              style={{backgroundColor: '#04AA6D', color:'#fff', border:'none', padding:'10px', borderRadius:'10px'}}
              variant="contained"
              onClick={handlePayment}>Checkout</Button>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Paper>
  )
}

export default Cart;
