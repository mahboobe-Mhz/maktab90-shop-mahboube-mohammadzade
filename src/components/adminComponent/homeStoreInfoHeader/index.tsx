import * as React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
function AddHomeStoreInfoHeader() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className=' '  dir='rtl'>
          <div className='md:hidden block'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <MenuIcon sx={{color:"black"}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{direction:"rtl"}}
      >
        <MenuItem onClick={handleClose}> <Link to={"/admin/colleagueProductPage"} className=' px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300 '> مدیریت فروشگاه </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"/admin/superAdminDashboard"} className=' px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' > افزودن ادمین</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to={"/admin/addHomeStoreInfo"} className=' px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' > افزودن اطلاعات فروشگاه</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to={"/admin/identificationCode"} className=' px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' > افزودن کد معرف/ایجاد کاربر</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to={"/admin/colleagueFactor"} className=' px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' >
      فاکتورها</Link></MenuItem>
        <MenuItem onClick={handleClose}>   <Link to={"/"} className=' px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' >
      خروج</Link></MenuItem>

      </Menu>
    </div>
           <div className=' px-10  md:gap-5 gap-2 flex-wrap-reverse text-xs md:text-lg mb-5 bg-gray-200 hidden md:flex' >
        <Link to={"/admin/colleagueProductPage"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300 '> مدیریت فروشگاه </Link>
        <Link to={"/admin/superAdminDashboard"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' > افزودن ادمین</Link>
        <Link to={"/admin/addHomeStoreInfo"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' > افزودن اطلاعات فروشگاه</Link>
        <Link to={"/admin/identificationCode"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' > افزودن کد معرف/ایجاد کاربر</Link>
        <Link to={"/admin/colleagueFactor"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' >
      فاکتورها</Link>
      <Link to={"/"} className='bg-gray-200 px-2 rounded-2xl ml-5 hover:cursor-pointer hover:bg-gray-300' >
      خروج</Link>
    </div>
    </div>
 
  )
}

export default AddHomeStoreInfoHeader