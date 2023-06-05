
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import TuneIcon from '@mui/icons-material/Tune';

export default function ComboBox() {
  return (<Box sx={{marginTop:"10px"}}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      role="list-box"
      sx={{ width: 300,fontSize:"5", "& .MuiOutlinedInput-root": {
        borderRadius: "50px" , padding:"0px"}}}
      renderInput={(params) => (
        <TextField
        sx={{"& .MuiOutlinedInput-root": {
          borderRadius: "50px" , padding:"0px",border:1 ,fontSize:15, color:"#3f3f3f",},
}}
          {...params}
          placeholder="جستجو در فروشگاه هوم نت ..."
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <TuneIcon />
              </InputAdornment>
            )
          }}
        />
      )}
      
    />

    </Box>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },

  { label: "Monty Python and the Holy Grail", year: 1975 }
];