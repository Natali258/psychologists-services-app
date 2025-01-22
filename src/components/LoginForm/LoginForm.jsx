import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; 
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SBtnLogIn } from './LoginForm.styled';
import { loginThunk } from '../../redux/Auth/operations';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

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
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     console.log(email, password);
        
    //     setEmail('')
    //     setPassword('')
    // }
    const { register, reset, handleSubmit } = useForm();
    
    const submit = data => {
        console.log(data);
        
        reset()
    }
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
                <Box onSubmit={handleSubmit(submit)} component="form" noValidate autoComplete="off">
                    <TextField {...register('email')} label="Email" />
                    <TextField {...register('password')} label="Password" />
                    <SBtnLogIn type='submit'>Log In</SBtnLogIn>
                </Box>
                
            </Box>
        </Modal>
         
        
    </div>

  )
}





// export const LoginForm = ({open, onClose}) => {
//     const { register, reset, handleSubmit } = useForm();
//     const dispatch = useDispatch();
//     const submit = data => {
//         dispatch(loginThunk(data));
//     reset()
// };
    
//   return (
//     <div>
//         <Modal
//         open={open}
//         onClose={onClose}
//         >
//             <Box sx={style}>
//                 <Typography variant="h6" component="h2">
//                     Log In
//                 </Typography>
//                 <Typography sx={{ mt: 2 }}>
//                     Welcome back! Please enter your credentials to access your account and continue your search for a psychologist.
//                 </Typography>
//                 <Box onSubmit={handleSubmit(submit)} component="form" noValidate autoComplete="off">
//                     <TextField {...register('email')} label="Email"  />
//                     <TextField {...register('password')} label="Password" />
//                     <SBtnLogIn type='submit'>Log In</SBtnLogIn>
//                 </Box>
                
//             </Box>
//         </Modal>
         
        
//     </div>

//   )
// }