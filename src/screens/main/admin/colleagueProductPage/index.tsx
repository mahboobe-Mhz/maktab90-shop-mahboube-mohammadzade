import React, { useState } from 'react'
import ColleagueProductTable from '../../../../components/adminComponent/colleagueProductTable'
import AddHomeStoreInfoHeader from '../../../../components/adminComponent/homeStoreInfoHeader'
import ShowOrderTableBox from '../../../../components/adminComponent/colleagueOrderTable'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
function ColleagueProductPage() {

  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div dir='rtl' className='  overflow-auto no-scrollbar ' >
       <AddHomeStoreInfoHeader/>
       {/* <div className='p-5'> 
        <button  className='border-2 focus:outline-none px-2 text-xl rounded-xl focus:bg-secondary focus:text-white hover:cursor-pointer' onClick={()=>setState("محصولات")}> محصولات </button> 
        <span>/</span>
        <button className='border-2 focus:outline-none px-2 text-xl rounded-xl focus:bg-secondary focus:text-white hover:cursor-pointer'  onClick={()=>setState("سفارشات")}> سفارشات </button>
       </div> */}
       <Box sx={{ width: '100%', }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        sx={{
          marginLeft: "auto",
          "&& .Mui-selected": { // && are used to increase the specificity
             color: "secondary.main",
             borderBottomColor:"secondary.main",
             borderBottom:"solid"
          }, marginBottom:2
          
        }}
      >
        <Tab
          value="one"
          label="محصولات"
          wrapped sx={{color:"black", 
          fontSize:{
            lg:"14px",
            sx:"12px"
          }, paddingBottom:"0px",
       }}

        />
        <Tab value="two" label="سفارشات"  sx={{color:"black",
          fontSize:{
            lg:"14px",
            sx:"12px"
          }, paddingBottom:"0px",}}/>
        <Tab value="three" label="محتوی"  sx={{color:"black",
          fontSize:{
            lg:"14px",
            sx:"12px"
          }, paddingBottom:"0px",}}/>
      </Tabs>
    </Box>
       {
        value==="one"?   <ColleagueProductTable/> :value==="two" ?<ShowOrderTableBox/>:""
       }
     
    </div>
  )
}

export default ColleagueProductPage
