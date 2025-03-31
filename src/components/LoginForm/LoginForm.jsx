import React from 'react'
import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField'; 
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SBtnLogIn, SFormLogIn, STextLogIn, STittleLogIn } from './LoginForm.styled';
import { useForm } from 'react-hook-form';
import { Icon } from '../Icon/Icon';
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from '@mui/material';


const SFieldEmailLogIn = styled(TextField)({
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
    width: '566px',
    height: '510px',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor:  '#fbfbfb',
    borderRadius: 30,
  }));

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
            <CustomBox >
                <STittleLogIn variant="h6" component="h2">
                    Log In
                </STittleLogIn>
                <STextLogIn sx={{ mt: 2 }}>
                    Welcome back! Please enter your credentials to access your account and continue your search for a psychologist.
                </STextLogIn>
                <SFormLogIn onSubmit={handleSubmit(submit)} component="form" noValidate autoComplete="off">
                    <SFieldEmailLogIn {...register('email')} label="Email" variant="outlined" />
                    <SFieldEmailLogIn {...register('password', { required: true, maxLength: 10 })} label="Password" 
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
                    <SBtnLogIn type='submit'>Log In</SBtnLogIn>
                </SFormLogIn>
                
            </CustomBox>
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