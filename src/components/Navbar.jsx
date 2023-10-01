import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


function Navbar() {
  return (
    <AppBar position="static" color=''>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#04AA6D',
              textDecoration: 'none',
            }}
          >
            RENT NOW
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent:'flex-end',display: { xs: 'none', md: 'flex' }}}>
              <Button
                onClick=""
                sx={{ my: 1, color: 'white', display: 'block',backgroundColor:'#04AA6D' }}
              >
                Sell
              </Button>
              <Button
                component="a"
                href="/signup"
                onClick=""
                sx={{ my: 1, color: 'black', display: 'block'}}
              >
                <i className="fa-regular fa-user"></i>
              </Button>
              <Button
                component="a"
                href="/cart"
                onClick=""
                sx={{ my: 1, color: 'black', display: 'block'}}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;







