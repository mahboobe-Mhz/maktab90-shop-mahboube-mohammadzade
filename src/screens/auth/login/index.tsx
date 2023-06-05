import { Box, Button, TextField } from "@mui/material";
import useLogin from "./useLogin";
const LoginScreen = () => {
  const { handleLoginUser, register, handleSubmit, errors } = useLogin();
  return (
    <>
      <Box
        component="form"
        sx={{
          m: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        onSubmit={handleSubmit(handleLoginUser)}
      >
        <TextField
          helperText={errors.username?.message}
          error={!!errors.username?.message}
          label="username"
          InputProps={{ ...register("username") }}
        />
        <TextField
          helperText={errors.password?.message}
          error={!!errors.password?.message}
          label="password"
          InputProps={{ ...register("password") }}
        />
        <Button sx={{color:"blue"}} type="submit">Submit</Button>
      </Box>
    </>
  );
};

export default LoginScreen;
