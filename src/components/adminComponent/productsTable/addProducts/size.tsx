import {Box ,Typography,TextField, Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
interface ProductInfo{
  id:string
   size:string,
    price:string,
    disCountPrice:string,
    inventory:string,
    color:string
}

function ProductsSize() {
const [size , setSize]=useState("")
const [price , setPrice]=useState("")
const [disCountPrice , setDisCountPrice]=useState("")
const [inventory , setInventory]=useState("")
const [editFlag,setEditFlag]=useState(false)
const [editId,setEditId]=useState("")
const[productData,setProductData]=useState<ProductInfo[]>([])
const [color, setColor] = useState('');
const productDataObj={
  id: crypto.randomUUID(),
  size,
  price,
  disCountPrice,
  inventory,
  color
}

const colorArray=[{name:"قرمز", photo:"https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png"},{name:"زرد", photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX6+jNOqqP9AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="},{name:"سبز", photo:"https://img.freepik.com/premium-photo/abstract-mint-green-gradient-background-empty-space-studio-room-display-product_8466-17.jpg"}]
const handleChange = (event: SelectChangeEvent) => {

  setColor(event.target.value);
};
const handleReset=()=>{
  setSize("")
  setPrice("")
  setDisCountPrice("")
  setInventory("")
  setColor("")
}
const handleAddNewInfo =()=>{
  setProductData([...productData,productDataObj])
  handleReset()
}

const handleDeleteItem =(e:any)=>{

const updateData=productData.filter((item)=>item.id !== e.currentTarget.id )
setProductData(updateData)
}
const handleEditItem =(e:any)=>{
  setEditFlag(true)
  setEditId(e.currentTarget.id)
  const editItemInfo =productData.filter((item)=>item.id === e.currentTarget.id )
  setSize(editItemInfo[0].size)
  setPrice(editItemInfo[0].price)
  setDisCountPrice(editItemInfo[0].disCountPrice)
  setInventory(editItemInfo[0].inventory)
  setColor(editItemInfo[0].color)
}
const handleInsertNewEditInfo =()=>{
 const newInfo= productData.map((item)=>{ if(item.id=== editId){
    item.size = size
    item.price=price, item.disCountPrice= disCountPrice,
   item.inventory= inventory
   item.color=color
  }
  return item
}  

  )
setProductData(newInfo)
setEditFlag(false)
handleReset()
}

  return (
    <div>
          <Box sx={{
        bgcolor:"#ffff" , borderRadius:"20px", marginTop:1, paddingBottom:4
    }}>
        <Box sx={{display:"flex", justifyContent:"space-between", padding:1.5,borderBottom:"solid", borderColor:"secondary.light"}}> 
            <Typography> سایز کالا</Typography>
        </Box>
        <Box >
        <Box display={"flex"} gap={2} width={"100%"}>
        <TextField id="standard-basic" value={size}  onChange={(e)=>setSize(e.currentTarget.value)} label=" چند نفره" variant="standard" />
<Box >
<TextField id="standard-basic" value={price}  onChange={(e)=>setPrice(e.currentTarget.value )} type='number'  label="  قیمت(تومان)" variant="standard" />

</Box>
<TextField id="standard-basic" value={disCountPrice}  onChange={(e)=>setDisCountPrice(e.currentTarget.value)} label=" قیمت تخفیفی (تومان)" variant="standard" />
<TextField id="standard-basic" value={inventory}  onChange={(e)=>setInventory(e.currentTarget.value )} label="موجودی" variant="standard" />
<FormControl variant="standard" sx={{ m: 0.5, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">رنگ </InputLabel>
        <Select
        sx={{fontSize:"14px"}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={color}
          onChange={handleChange}
        >
            {
              colorArray.map((item:any)=>     <MenuItem  value={item.name} sx={{backgroundImage:`url(${item.photo})`}}>
             {item.name}
              </MenuItem>
              )
         
            }
    

        </Select>
      </FormControl>

</Box>

        </Box>
     {editFlag ?   <Button onClick={handleInsertNewEditInfo} sx={{ bgcolor:"secondary.main", color:"white" , marginRight:"10px" , marginTop:"10px"}}>ویرایش</Button>:   <Button onClick={handleAddNewInfo} sx={{ bgcolor:"secondary.main", color:"white" , marginRight:"10px" , marginTop:"10px"}}>افزودن</Button> }
     

        <Box marginTop={5}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell align="right">چند نفره </TableCell>
            <TableCell align="right">قیمت </TableCell>
            <TableCell></TableCell>
            <TableCell align="right"> قیمت تخفیفی </TableCell>
            <TableCell align="right"> موجودی  </TableCell>
            <TableCell align="right"> رنگ  </TableCell>
            <TableCell>عملیات</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {
            productData.map((item:ProductInfo,index:number)=>  <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="right" component="th" scope="row"> {item.size}</TableCell>
          <TableCell align="right" component="th" scope="row">{item.price} تومان</TableCell>
            ‌<TableCell align="right"> {item.disCountPrice} تومان</TableCell>
            <TableCell align="right"> {item.inventory} </TableCell>
            <TableCell align="right"> {item.color} </TableCell>
          <TableCell>
          <DeleteIcon id={item.id} onClick={handleDeleteItem}/>
          <EditIcon id={item.id}  onClick={handleEditItem}/>
          </TableCell>
          </TableRow>)
          }
   
    
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
       </Box> 
    </div>
  )
}

export default ProductsSize