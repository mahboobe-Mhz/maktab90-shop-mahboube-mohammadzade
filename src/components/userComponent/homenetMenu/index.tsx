import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

export default function HomeNetMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:"black"}}
      >
        <MenuIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <Link to={"/admin/addArticle"}> مدیریت نوشته ها</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to={"/admin/control/products"}>مدیریت فروشگاه</Link> </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to={"/admin/AddSuperAdmin"}>افزودن نماینده فروشگاه</Link> </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to={"#"}>ایمیل ها </Link> </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to={"/admin/contactsPage"}>مخاطبان </Link >  </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to={"/"}>صفحه اصلی هوم نت </Link >  </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to={"/admin/mainPage"}>  خروج  </Link >  </MenuItem>
 
      </Menu>
    </div>
  );
}