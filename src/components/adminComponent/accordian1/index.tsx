import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {Typography ,Button} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion sx={{width:"100%",bgcolor:"secondary.main",fontFamily:"nimkat"  }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{fill:"#ffff"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
      
          <Typography sx={{ color: '#ffff',  }}> <LocalOfferIcon/>  کاتالوگ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="text" sx={{width:"100%", color:"#ffff", fontFamily:"nimkat", paddingLeft:"140px"}}>
        محصولات
          </Button>
        </AccordionDetails>
        <AccordionDetails>
          <Button variant="text" sx={{width:"100%", color:"#ffff", fontFamily:"nimkat", paddingLeft:"140px"}}>
        دسته ها
          </Button>
        </AccordionDetails>
        <AccordionDetails>
          <Button variant="text" sx={{width:"100%", color:"#ffff", fontFamily:"nimkat", paddingLeft:"135px"}}>
            برچسب ها
          </Button>
        </AccordionDetails>
       
       
      </Accordion>
     
    </div>
  );
}