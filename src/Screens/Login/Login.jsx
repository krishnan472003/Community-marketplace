import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useNavigate } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const finalData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    let fetchedData = await axios.post("http://localhost:5000/api/auth/signup",finalData)
    if(fetchedData.status === 200){
        localStorage.setItem("token",fetchedData.token)
        navigate(`/home/${data.email}`)
    }
    
  };

  return (
    <ThemeProvider theme={defaultTheme} sx ={{display:"flex",flexDirection:"vertical",alignItem:"space-around"}}>
    <Navbar/>
      <Container component="main" maxWidth="xs" sx={{padding:4}}>
        <CssBaseline />
        <Box
          sx={{
            padding:2,
            marginTop: 8,
            borderRadius: "25",
            // border: 0.1,
            // borderColor: "#56B280",
            backgroundColor: '#fafafa',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
        <Typography component="h1" variant="h5" style={{fontWeight: 'bold',color:"#56B280"}}>
  Sign in
</Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#56B280"}}
            >
              Sign In
            </Button>
            <Grid container>
            
              <Grid item xs>
                <Link href="#" variant="body2" sx={{color:"#56B280"}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" sx={{color:"#56B280"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    
      <Footer />
    </ThemeProvider>
  );
}