import { Box, Button, TextField } from "@mui/material";
import useRegister from "./useRegister";


const RegisterScreen = () => {

const  {
    handleRegisterUser,
    register, handleSubmit,errors,
} = useRegister()

    return ( 
    <Box component="form" sx={{
        m:1,
        display: "flex",
        flexDirection: 'column',
        gap:2,
    }} onSubmit={handleSubmit(handleRegisterUser)}>
        <TextField helperText={errors.firstname?.message} error={!!errors.firstname?.message}  label="firstname" InputProps={{...register('firstname')}}/>
        <TextField helperText={errors.lastname?.message} error={!!errors.lastname?.message} label="lastname" InputProps={{...register('lastname')}}/>
        <TextField helperText={errors.username?.message} error={!!errors.username?.message} label="username" InputProps={{...register('username')}}/>
        <TextField helperText={errors.password?.message} error={!!errors.password?.message} label="password" InputProps={{...register('password')}}/>
        <TextField helperText={errors.phoneNumber?.message} error={!!errors.phoneNumber?.message} label="phoneNumber" InputProps={{...register('phoneNumber')}}/>
        <TextField helperText={errors.address?.message} error={!!errors.address?.message} label="address" InputProps={{...register('address')}}/>
        <Button type="submit">Submit</Button>
    </Box>
    );
}
 
export default RegisterScreen;