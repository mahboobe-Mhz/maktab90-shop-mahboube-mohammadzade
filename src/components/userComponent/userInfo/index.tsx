import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'universal-cookie';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';
import PersonIcon from '../../svg/personIcon';

export default function UserInfo() {
  const cookies = new Cookies();
  const user = cookies.get("user");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout =()=>{
    setAnchorEl(null);
    cookies.remove("user")
    cookies.remove("refreshToken")
    cookies.remove("accessToken")
  }
  const handleLogin=()=>{
    navigate(routes.USERS.login)
  }
  return (
    <div>
      <Typography
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{width:"20px", marginTop:"10px"}}
      >
     <PersonIcon/>
      </Typography>
      <Menu
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        style: {
         
          width: "20ch",
      direction:"rtl",
      borderRadius:"20px",
      top:"80px"
        },
      }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      
      
      >
        
        <MenuItem onClick={handleClose}>{user?.firstname} خوش امدید</MenuItem>
      
      {user?    <MenuItem onClick={handleLogout}>Logout</MenuItem>:    <MenuItem onClick={handleLogin}>login</MenuItem>}
    
      </Menu>
    </div>
  );
}