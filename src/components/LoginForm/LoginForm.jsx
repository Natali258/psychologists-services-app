import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; 
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SBtnLogIn } from './LoginForm.styled';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const LoginForm = ({open, onClose}) => {
  return (
    <div>
        <Modal
        open={open}
        onClose={onClose}
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Log In
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Welcome back! Please enter your credentials to access your account and continue your search for a psychologist.
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <TextField label="Email"  />
                    <TextField label="Password" />
                </Box>
                <SBtnLogIn type='submit'>Log In</SBtnLogIn>
            </Box>
        </Modal>
         
        
    </div>

  )
}
