import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearIcon from '@mui/icons-material/Clear';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const dummyPeople = [
  { id: 1, name: 'John Doe', avatar: '/avatars/avatar1.jpg' },
  { id: 2, name: 'Jane Smith', avatar: '/avatars/avatar2.jpg' },
  { id: 3, name: 'Bob Johnson', avatar: '/avatars/avatar3.jpg' },
  // Add more dummy data as needed
];
const handleRefresh = () => {
    // Handle refresh logic
    console.log('Refreshing...');
  };
  const handleCameraClick = () => {
    // Handle camera logic
    console.log('Camera clicked...');
  };

  const handleGalleryClick = () => {
    // Handle gallery logic
    console.log('Gallery clicked...');
  };
const DummyPeople = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width:"50%",
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div style={{ display: 'flex',marginTop:"10px", }}>
      <div style={{ flex: 1 }}>
        <div style={{display:"flex"}}>
      <Avatar onClick={handleOpen} sx={{ m: 1 }} />
     
        <TextField
          placeholder="Search"
          onClick={handleOpen}
          fullWidth
          style={{background:"grey"}}
        /></div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <div style={{display:"flex"}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Post
            </Typography>
            <Button onClick={handleClose} style={{justifyContent:"right"}} startIcon={<ClearIcon />}>
    </Button>
    </div>
          
            <TextField  
              id="outlined-multiline-static"
              multiline
              rows={4}
              defaultValue="Hii Kumr, Whats on your mind??"
              sx={{ mt: 2 }}
            />
            <div fullWidth style={{justifyContent:"center"}}>
                <div style={{top:"50%",right:"50%"}}>
            <Button onClick={handleCameraClick} startIcon={<CameraAltIcon />}>
      </Button>
      <Button onClick={handleGalleryClick} startIcon={<PhotoLibraryIcon />}>    
      </Button>
      </div>
            <Button fullWidth sx={{ mt: 2 ,background:"grey"}}>
              Post
            </Button>
            </div>
          </Box>
        </Modal>
      </div>
      <div style={{ width: '300px', marginLeft: '20px' }}>
        <div style={{display:"flex"}}>
      <Avatar  sx={{ marginRight: '10px' }} />
      <div>
            <Typography>kumar </Typography>
            <Typography>kumar </Typography>
            </div>
            </div>
        <Typography variant="h6" gutterBottom style={{display:"flex"}}>
          People to Follow
          <Button onClick={handleRefresh} startIcon={<RefreshIcon />}>
    </Button>
        </Typography>
        {dummyPeople.map((person) => (  
          <div key={person.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Avatar src={person.avatar} sx={{ marginRight: '10px' }} />
            <div>
            <Typography>{person.name} </Typography>
            <Typography>Suggested for you</Typography></div>
            <Button variant="contained" size="small" sx={{ marginLeft: 'auto' }}>
              Follow
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DummyPeople;
