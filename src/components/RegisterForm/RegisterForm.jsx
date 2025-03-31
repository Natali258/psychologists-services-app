import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; 
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SBoxRegister, SBtnRegister, SFormRegister, SRegisterSpan, STextRegister, STitleRegister } from './RegisterForm.styled';
// import { registerThunk } from '../../redux/Auth/operations';
// import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../api/api';
import { database } from '../../services/FirebaseApp';
import { ref, set } from 'firebase/database';
import { IconButton, InputAdornment, styled } from '@mui/material';
import { Icon } from '../Icon/Icon';

const SFieldRegister = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "rgba(25, 26, 21, 0.1)"},
      
      "&:hover fieldset": { borderColor: "#54be96" },
      "&.Mui-focused fieldset": { borderColor: "#54be96" },
    },
    "& .MuiInputLabel-root": { color: "#191a15" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#54be96" },
    '& .MuiOutlinedInput-input': {"& fieldset": { InputOutlined: '1px solid'}}
  });

  const CustomBox = styled(Box)(() => ({
    display: 'block',
    padding: '64px',
    width: '565px',
    height: 'auto',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor:  '#fbfbfb',
    borderRadius: 30,
  }));


export const RegisterForm = ({open, onClose}) => {
    
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const submit = async (data) => {
        console.log(data);
        
        try {
            // const {name, email, password} = data;
            // const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const userCredential = await registerUser(data)
            console.log(userCredential);
            
            const user = userCredential.user;
            
            await set(ref(database, `users/${user.uid}`), {
                email: data.email,
                name: data.name,
                password: data.password
            });
        
            return user;
        } catch (error) {}
        
        reset()
        
    }
    
    return (
        <div>
            
            <Modal
            open={open}
            onClose={onClose}
            >
               <CustomBox >
                    <STitleRegister variant="h6" component="h2">
                    Registration
                    </STitleRegister>
                    <STextRegister sx={{ mt: 2 }}>
                    Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.
                    </STextRegister>
                    <SFormRegister onSubmit={handleSubmit(submit)} component="form" noValidate autoComplete="off" >
                        <SFieldRegister {...register('name', { required: true, maxLength: 5 })} label="Name"/>
                        {errors.name && errors.name.type === "required" && <SRegisterSpan>This is required!</SRegisterSpan>}
                        {errors.name && errors.name.type === "maxLength" && <SRegisterSpan>Max length exceeded!</SRegisterSpan> }
                        <SFieldRegister {...register('email', { required: true})} label="Email" />
                        {errors.email && errors.email.type === "required" && <SRegisterSpan>This is required!</SRegisterSpan>}
                        <SFieldRegister {...register('password', { required: true, maxLength: 10 })} label="Password" 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end" onClick={() => alert("Показати пароль")}>
                                            <Icon name='eye-off' size='20'/>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {errors.password && errors.password.type === "required" && <SRegisterSpan>This is required!</SRegisterSpan>}
                        {errors.password && errors.password.type === "maxLength" && <SRegisterSpan>Max length exceeded!</SRegisterSpan> }
                        <SBtnRegister type='submit' >Sign Up</SBtnRegister>
                    </SFormRegister>
                    
                </CustomBox> 
            </Modal>
             
            
        </div>
    
      )
}




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



