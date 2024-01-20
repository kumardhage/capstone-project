import React, { useState } from 'react';
import {
    Button,
    TextField,
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core';
import '../css/signUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        password2: '',
        gender: '',
    });

    const {
        name,
        username,
        email,
        password,
        password2,
        gender,
    } = formData;

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container">

            <form className="form" onSubmit={handleSubmit}>
                <Typography className="signin-title" variant="h4" align='left'>
                    MERNY
                </Typography>
                <Typography align="right">
                Full Name
                </Typography>
                <TextField
                    variant="outlined"
                    label="Full Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <Typography align="right">
                User Name
                </Typography>
                <TextField
                    variant="outlined"
                    label="User Name"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <Typography align="right">
                Email Address
                </Typography>
                <TextField
                    variant="outlined"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <Typography align="right">
                Password
                </Typography>
                <TextField
                    variant="outlined"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <Typography align="right">
                Confirm Password    
                </Typography>
                <TextField
                    variant="outlined"
                    label="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={handleChange}
                    required
                    fullWidth
                />

                <FormControl component="fieldset" >
                     <RadioGroup label="gender" name="gender" value={gender} onChange={handleChange} row style={{ justifyContent:'space-around'}}>
                     <FormControlLabel value="male" label="Male"control={<Radio />}  />
                      <FormControlLabel value="female" label="Female" control={<Radio />}  /> 
                      <FormControlLabel value="female" label="Other" control={<Radio />}  /> 
                      </RadioGroup>
                       </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="button"
                    fullWidth
                >
                    Register
                </Button>
                <Typography>
                    Already have an account? <a href="/login">Login Now</a>
                </Typography>
            </form>
        </div>
    );
};

export default SignUp;