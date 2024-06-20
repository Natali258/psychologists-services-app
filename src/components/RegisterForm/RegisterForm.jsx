import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; 
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SBtnRegister } from './RegisterForm.styled';

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

export const RegisterForm = ({open, onClose}) => {
    
    return (
        <div>
            <Modal
            open={open}
            onClose={onClose}
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                    Registration
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                    Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.
                    </Typography>
                    <Box component="form" noValidate autoComplete="off">
                        <TextField label="Name"  />
                        <TextField label="Email"  />
                        <TextField label="Password" />
                    </Box>
                    <SBtnRegister type='submit'>Sign Up</SBtnRegister>
                </Box>
            </Modal>
             
            
        </div>
    
      )
}
