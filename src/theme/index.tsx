import {createTheme} from '@mui/material/styles'
import{Components} from '@mui/material'

const MuiButton=():Components["MuiButton"] =>({
    defaultProps:{
        variant:'contained'
    },
    styleOverrides:{
        root:{
            backgroundColor:"green"
        }
    }
})
export const theme =createTheme({
    components:{
        MuiButton:MuiButton()
    }
})
