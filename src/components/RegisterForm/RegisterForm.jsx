// import React from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField'; 
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { SBtnRegister } from './RegisterForm.styled';
// import { registerThunk } from '../../redux/Auth/operations';
// import { useDispatch } from 'react-redux';
// import { useForm } from 'react-hook-form';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };


// export const RegisterForm = ({open, onClose}) => {
//     const { register, reset, handleSubmit } = useForm();
//     const dispatch = useDispatch();

//     const submit = data => {
//         dispatch(registerThunk(data));
//     reset()
// };
//     return (
//         <div>
            
//             <Modal
//             open={open}
//             onClose={onClose}
//             >
//                <Box sx={style}>
//                     <Typography variant="h6" component="h2">
//                     Registration
//                     </Typography>
//                     <Typography sx={{ mt: 2 }}>
//                     Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.
//                     </Typography>
//                     <Box onSubmit={handleSubmit(submit)} component="form" noValidate autoComplete="off" >
//                         <TextField {...register('name')} label="Name"  />
//                         <TextField {...register('email')} label="Email"  />
//                         <TextField {...register('password')} label="Password"  />
//                         <SBtnRegister type='submit' >Sign Up</SBtnRegister>
//                     </Box>
                    
//                 </Box> 
//             </Modal>
             
            
//         </div>
    
//       )
// }



