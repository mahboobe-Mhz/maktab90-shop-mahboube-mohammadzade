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
 navigate(`/category/${event.currentTarget.id}_${event.currentTarget.dataset.user}`)

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
// import MenuItem from '@mui/material/MenuItem';
//  import * as React from 'react';
// import Menu from '@mui/material/Menu';
// import { Typography } from '@mui/material';
// import axios from 'axios';
// import useGetAllSubCategory from '../../../api/services/products/useGetAllSubCategory';
// import { useNavigate } from 'react-router-dom';

// const DropDownMenu = () => {
//   const { data, isLoading } = useGetAllSubCategory();
//  const [catData ,setCatData]=React.useState([])
//  const [slugName ,setSlugName]=React.useState<string|undefined>()
//  const [subData ,setSubData]=React.useState([])
//  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//  const [anchorSubEl, setAnchorSubEl] = React.useState<null | HTMLElement>(null);
//  const open = Boolean(anchorEl);
//  const subOpen = Boolean(anchorSubEl);
//  const navigate = useNavigate();


//  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//   setAnchorEl(event.currentTarget);
//  }
//  const handleSubClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//   setAnchorSubEl(event.currentTarget); 
//  };
//  React.useEffect(()=>{const res =axios.get('http://127.0.0.1:8000/api/categories?limit=30')
//  res.then(response=>setCatData(response.data.data.categories)
//  ) },[])
//  const handleSubCat =  (event: React.MouseEvent<HTMLButtonElement>) => {
//  const allSubCatName=data.data.subcategories
//   const subCatName =!isLoading && allSubCatName?.filter((item:any) => item.category === event.currentTarget.id );
//   setSubData(subCatName)
//   setSlugName(event.currentTarget.dataset.user)
//   navigate(`/${event.currentTarget.dataset.user}`)

//  };

//  const handleSubClose = (event: React.MouseEvent<HTMLButtonElement>)=> {
// console.log(event.currentTarget.id);

//   navigate(`/${event.currentTarget.id}`)
//    setAnchorSubEl(null);
//    setAnchorEl(null)

//  };
//  const handleClose=()=>{
//   setAnchorEl(null)
//  }

 
//     return (  
//   <div  dir='rtl'>
//       <Typography
      
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//         sx={{color:"black" , fontSize:"16px" , position:"relative",
//         "&:hover": {
//           color: "secondary.main"
//         },
//         "&:focus": {
//           color: "secondary.main",
//         }}}
//       >
// محصولات
//       </Typography>
//       <Menu
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//         PaperProps={{
//           style: {
//             maxHeight: 100 * 4,
//             width: "25ch",
//         direction:"rtl",
//         borderRadius:"20px",
//         top:"80px"
//           },
//         }}
//       sx={{direction:"rtl"}}
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//       {catData && catData?.map((item:any)=>
//       <MenuItem key={item._id} id={item._id} data-user={item.slugname}  onClick={handleSubCat}>
//       <div>
//   {/* <Typography

//     id="basic-button"
//     aria-controls={subOpen ? 'basic-submenu' : undefined}
//     aria-haspopup="true"
//     aria-expanded={subOpen ? 'true' : undefined}
//     onClick={handleSubClick}
//     sx={{color:"black" , fontSize:"16px" , 
//     "&:hover": {
//       color: "secondary.main"
//     },
//     "&:focus": {
//       color: "secondary.main",
//     backgroundColor:"#ffff"
//     }
//   }}
//   >
// {item.name}
//   </Typography> */}

//   {/* <Menu
//     anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//     PaperProps={{
//       style: {
//         maxHeight: 40 * 4,
//         width: "10ch",
//     direction:"rtl",
//     borderRadius:"20px",
//     top:"80px",
//     right:"282px"
//       },
//     }}
//     id="basic-submenu"
//     anchorEl={anchorSubEl}
//     open={subOpen}
//    onClose={handleSubClose}
//     MenuListProps={{
//       'aria-labelledby': 'basic-button',
//     }}
//   >
//   {subData && subData?.map((item:any)=><MenuItem key={item._id} id={item.slugname} onClick={handleSubClose}>{item.name}</MenuItem>)} 

//   </Menu> */}
//   {item.name}
// </div>    
//       </MenuItem>)} 

//       </Menu>

//    </div>


//     );
// }
 
// export default DropDownMenu;
