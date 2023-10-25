import React from 'react'
import Grid from '@mui/material/Grid';

export default function Footer() {
  return (
    <div className='footer'>
      <hr className='line'/>
      <div>
      <Grid container spacing={2} >
      <Grid item xs={6} marginLeft={5}>
      <h4
      sx={{
             
             
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#04AA6D',
              textDecoration: 'none',
            }}>SHOPWISE</h4>
      
      <p style={{ color: '#04AA6D'}}>Your new Renting Solution is Here</p>
      </Grid>
      <Grid item xs={4}>
      <p style={{ color: '#04AA6D'}}>About</p>
      <p style={{ color: '#04AA6D'}}>Discover</p>
      <p style={{ color: '#04AA6D'}}>About Us</p>
      

        
      </Grid>

      <Grid item xs={4}></Grid>


      </Grid>

      </div>
    </div>
  )
}
