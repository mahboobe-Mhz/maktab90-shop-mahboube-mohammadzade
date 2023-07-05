import MenuItem from '@mui/material/MenuItem';
 import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DropDownMenu = () => {

 const [catData ,setCatData]=React.useState([])


 const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

 const open = Boolean(anchorEl);

 const navigate = useNavigate();


 const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
 }

 React.useEffect(()=>{const res =axios.get('http://127.0.0.1:8000/api/categories?limit=30')
 res.then(response=>setCatData(response.data.data.categories)
 ) },[])

 const handleClose=(event)=>{
  setAnchorEl(null)

 // navigate(`/products/${event.currentTarget.dataset.user}`)
 navigate(`/category/${event.currentTarget.id}_${event.currentTarget.dataset.user}_page_1`)

 }

 
    return (  
      <div>
      <Typography
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
     محصولات
      </Typography>
      <Menu
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                  style: {
                   
                    width: "25ch",
                direction:"rtl",
                borderRadius:"20px",
                top:"80px"
                  },
                }}
              sx={{direction:"rtl"}}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
      >
        {catData && catData?.map((item:any)=>

        <MenuItem  key={item._id} id={item._id} data-user={item.slugname}   onClick={handleClose}>{item.name}</MenuItem>
      )}

      </Menu>
    </div>

    );
}
 
export default DropDownMenu;
