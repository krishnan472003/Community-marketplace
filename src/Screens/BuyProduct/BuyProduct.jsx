import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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


function BuyProduct() {
  const divStyle = {
    color: 'grey',
    paddingLeft:'20'
    
  };
  return (
    <Paper>
    <Navbar/>

    <Grid container spacing={5} marginTop={3} marginBottom={2}>
  <Grid item xs={5} marginLeft={5}>
  <img src="./imgs/sofa.webp" width="500px" height="450px"></img><br/><br/>
  <h3  style={{color:"#04AA6D"}}>$9.99</h3>
  </Grid>
  <Grid item xs={5}>
    <h3>Sofa</h3><br></br>
  <h4>Description:</h4>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed bibendum massa. Maecenas eleifend sit amet libero at tempor. Integer vulputate ligula dolor, vitae euismod felis efficitur nec. Praesent efficitur et tellus vitae pharetra. Pellentesque a nunc semper, egestas lectus vel, eleifend quam. Nunc quis neque aliquam, condimentum sem ut, commodo neque. Donec semper enim at tellus vulputate, nec viverra mauris dictum. Vestibulum luctus dapibus pulvinar. Curabitur vel consectetur nibh. In hac habitasse platea dictumst. Praesent ut rutrum nisl, id cursus augue. In finibus pretium vestibulum. Quisque facilisis suscipit erat id dignissim. Pellentesque imperdiet id metus sit amet dapibus.

Donec in urna et elit mollis fermentum. Vestibulum fringilla porta cursus. Quisque efficitur lorem a pulvinar lobortis. Duis non dictum tellus. Curabitur quis leo et leo consequat vestibulum sed sed arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur augue enim, cursus eu erat quis, posuere lobortis felis. Pellentesque congue lorem sed neque fringilla tincidunt. Donec fermentum nunc a ex pharetra, sed imperdiet mi interdum. Vivamus commodo tortor et metus pellentesque iaculis. Suspendisse luctus magna in nisi dapibus, eget pellentesque elit tincidunt. Fusce ut justo risus. Duis mi magna, convallis ut diam vel, condimentum hendrerit tortor.

</p>

    <Buttons
        variant="contained"
        text = "Add to Cart"
    />
    </Grid>
</Grid>
<Footer/>
 </Paper>
  )
}

export default BuyProduct
