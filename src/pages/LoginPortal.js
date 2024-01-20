import { Box, TextField, Button, Link, Typography } from '@material-ui/core';
import {React,useState,useEffect} from 'react';

const LoginPortal = (props) => {
    console.log(props);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = (event) => {
       event.preventDefault();
       console.log('Email:', email, 'Password:', password);
    };
    useEffect(() => {
        console.log('Email:', email, 'Password:', password);
     }, [email, password]);

  return (
    <>
     <Box className="signin-box" display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f5f5f5">
      <Box className="signin-card" width="100%" maxWidth="500px" p={4} bgcolor="#ffffff" boxShadow={3}>
        <Typography className="signin-title" variant="h4" align="center" gutterBottom>
          MERNY
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField fullWidth variant="outlined" label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <TextField fullWidth variant="outlined" label="Password" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button fullWidth variant="contained" color="primary" type="submit">
            Sign In
          </Button>
        </form>
        <Typography className="signin-footer" variant="body2" gutterBottom>
          Don't have an account? <Link href="#" color="error">Register now</Link>
        </Typography>
      </Box>
    </Box>
    </>
      )
}

export default LoginPortal