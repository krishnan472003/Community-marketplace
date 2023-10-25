import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = async () => {
    let token =await localStorage.getItem('token');
    let uId = await localStorage.getItem('uId');

    let data = {
      token: token,
      uId : uId
    }
    localStorage.clear();
    setLoggedIn(false);
    let fetchedData = await axios.post("http://localhost:5000/api/auth/logout", data)
    if(fetchedData.status !==200){
      console.log(fetchedData)
      setLoggedIn(true)
      localStorage.setItem("token",token);
      localStorage.setItem("uId",uId);
    }
  }
  useEffect(()=>{
  const uId = localStorage.getItem('uId');
  if(uId){
    setLoggedIn(true)

  }
  else{
    setLoggedIn(false)
  }
  },[])

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
            {loggedIn=== true?
            <>
             <Button
              onClick={handleLogout}
              sx={{ my: 1, color: 'white', display: 'block',backgroundColor:'#04AA6D' }}
              >
                Logout
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
              onClick=""
              sx={{ my: 1, color: 'black', display: 'block'}}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </Button>
              </>
              :
              <>
              <Link to = "/login">
              <Button
              onClick={handleLogout}
              sx={{ my: 1, color: 'white', display: 'block',backgroundColor:'#04AA6D',mx: 1.5 }}
              >
                Login
              </Button>
                </Link >
                <Link to = "/signup">
              <Button
              onClick={handleLogout}
              sx={{ my: 1, color: 'white', display: 'block',backgroundColor:'#04AA6D' }}
              >
                Signup
              </Button>
                </Link>
              </>
              }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;







