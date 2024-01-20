import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import IconButton from '@material-ui/core/IconButton';
import {
  AppBar, Toolbar, Grid,Avatar,Menu,MenuItem,Popover,Typography,InputBase, Button} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import { Button } from '@material-ui/core';
// import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationPopover, setNotificationPopover] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = (event) => {
    setNotificationPopover(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationPopover(null);
  };

  const notificationMessages = [
    'New follower: John Doe',
    'Your post was liked by Jane Smith',
    // Add more notification messages as needed
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here
    console.log(`Searching for: ${searchQuery}`);
  };

  const navigate = (url) => {
    window.location.href = url;
  };
    const userProfilePicUrl = 'data:image/jpeg;base64,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';

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{background:"#50C878"}}>
          <Typography>MERNY</Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center' }}>
              <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <InputBase
                  placeholder="Enter to search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    border: '1px solid black',
                    padding: '5px 10px',
                    
                    width: '100%',
                  }}
                />
                {/* <IconButton type="submit" aria-label="Search">
                  <SearchIcon />
                </IconButton> */}
              </form>
            </Grid>
          </Grid>
          <Grid container  >
            <Grid item>
              <Button style={{color:"white"}} onClick={() => navigate('/home')}>
                <HomeIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button style={{color:"white"}} onClick={() => navigate('/messages')}>
                <MessageOutlinedIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button style={{color:"white"}} onClick={handleNotificationClick}>
                <NotificationsNoneIcon />
                {notificationMessages.length > 0 && (
                  <span style={{  fontWeight: 'bold' }}>
                    {notificationMessages.length}
                  </span>
                )}
              </Button>
              <Popover
                open={Boolean(notificationPopover)}
                anchorEl={notificationPopover}
                onClose={handleNotificationClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <div style={{ padding: '10px' }}>
                  {notificationMessages.map((message, index) => (
                    <Typography key={index}>{message}</Typography>
                  ))}
                </div>
              </Popover>
            </Grid>
            <Grid item>
              <Button onClick={handleMenuClick}>
                <Avatar alt="User Profile" src={userProfilePicUrl} sx={{ width: 32, height: 32 }} />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                style={{ display: 'block' }}
              >
                <MenuItem style={{ display: 'block', height: 'auto', minWidth: '100px', textAlign: 'center' }} onClick={() => navigate('/profile')}>Profile</MenuItem>
                <MenuItem style={{ display: 'block', height: 'auto', minWidth: '100px', textAlign: 'center' }} onClick={() => navigate('/logout')}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
