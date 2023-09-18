import {Box ,Typography,TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button} from '@mui/material'
import { useState } from 'react'
import { Form } from 'react-router-dom'


interface Props{
  errors:any

  register:any
}
const ProductsSize = ({errors,register}:Props)=> {
  const[showSizeBox, setShowSizeBox]=useState("dimension")
  const[sofaSize,setSofaSize]=useState([])
  const[sofaSize2,setSofaSize2]=useState<{  'length':string,
  'width':string,
  'height':string}[]>([])
  const[sofaValue1,setSofaValue1]=useState<string[]>([])
  const[length,setLength]=useState("")
  const[width,setWidth]=useState("")
  const[height,setHeight]=useState("")

const  handleChange=(e:any)=>{

setShowSizeBox(e.currentTarget.value)
}
const handleInsertSize=()=>{
  setSofaSize([...sofaSize,sofaValue1])
}



const handleInsertSize2=()=>{
const data ={
  'length':length,
  'width':width,
  'height':height

}
  setSofaSize2([...sofaSize2,data])

  
}

    return (  <Box sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:1, paddingBottom:4
    }}>
        <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
  
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">سایز کالا</FormLabel>
      <RadioGroup
       onChange={handleChange}
         row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="dimension"
        name="radio-buttons-group"
      >
        <FormControlLabel value="dimension" control={<Radio   sx={{
                       '&, &.Mui-checked': {
                         color: 'secondary.main',
                       },
                     }} />} label="ابعاد" />
        <FormControlLabel value="person" control={<Radio 
          sx={{
            '&, &.Mui-checked': {
              color: 'secondary.main',
            },
          }}/>} label="چند نفره" />

      </RadioGroup>
    </FormControl>
        </Box>
        <Box padding={1.5}>
          {showSizeBox=="dimension" ?  
          <Box>
            <Box>
              {sofaSize2.length>0 && sofaSize2.map((item:any, index:number)=>   <Box>
           
                <Box display={'flex'} gap={2}>
                <Typography sx={{alignSelf:"center "}}> اندازه{index+1}   </Typography>
                <Typography sx={{alignSelf:"center"}}>عرض : {item.width}  </Typography>
                <Typography sx={{alignSelf:"center"}}> ارتفاع : {item.height}    </Typography>
                <Typography sx={{alignSelf:"center"}}> طول : {item.length}   </Typography>
                </Box>
          


              </Box>      )}
  
            </Box>
                      <Box display={"flex"} gap={2} width={"100%"} marginTop={2}>
          <Box sx={{display:"flex", flexDirection:"column"}}>
 <TextField onChange={(e:any)=>setWidth(e.currentTarget.value)}  id="standard-basic" label="عرض " variant="standard" />
          </Box>
      
<Typography sx={{alignSelf:"center" ,marginTop:2}}>CM</Typography>
<TextField onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setHeight(e.currentTarget.value)} id="standard-basic" label="ارتفاع" variant="standard" />
<Typography sx={{alignSelf:"center" ,marginTop:2}}>CM</Typography>
<TextField onChange={(e:any)=>setLength(e.currentTarget.value)} id="standard-basic" label="طول" variant="standard" />
<Typography sx={{alignSelf:"center" ,marginTop:2}}>CM</Typography>
<Button onClick={handleInsertSize2} sx={{color:"white", bgcolor:"secondary.main", marginRight:"20px", marginTop:"10px"}}> ثبت</Button>
</Box>

          </Box>


:<Box>
          {sofaSize.length>0 && sofaSize.map((item:string)=>
            <Typography sx={{alignSelf:"center" ,marginTop:2}}>{item}</Typography>
            )
           
          }
          <Box >
          <TextField id="sofaSize2" label="چند نفره" variant="standard" onChange={(e:any)=>setSofaValue1(e.currentTarget.value)} />
          <Button onClick={handleInsertSize} sx={{color:"white", bgcolor:"secondary.main", marginRight:"20px", marginTop:"10px"}}> ثبت</Button>
          </Box>



</Box>
}
  
        </Box>
       </Box> );
}
 
export default ProductsSize;