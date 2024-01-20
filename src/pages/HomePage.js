import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';

const HomePage = () => {
 const [show, setShow] = useState(false);
 const [open, setOpen] = useState(false);

 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #000',
  boxShadow: 24,
  border: "50%",
  p: 4,
  background: '#50C878', // Add background color to the modal
};

 return (
  <div sx={{background: '#50C878'}}>
    <div >
      <TextField
        placeholder="Search"
        onClick={handleOpen}
        //hello
        fullWidth
        sx={{ borderRadius:"50px" }}
        InputProps={{
          startAdornment: (
            <Avatar onClick={handleOpen} sx={{ mr: 1 }} />
          ),
        }}
      />
    </div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Modal title
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="Type something here..."
          sx={{ mt: 2 }}
        />
        <Button variant="contained" sx={{ mt: 2 }}>
          Post
        </Button>
      </Box>
    </Modal>
  </div>
 );
};

export default HomePage;
