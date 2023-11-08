// Navbar.js (with navigation links)
import React from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Navbar() {
  return (
        <Box  style={{width:'full',padding:'10px',backgroundColor:'white',display:'flex',justifyContent: 'space-between'}}>

         <img src="https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/08a89ed0-7d7c-4656-b3e7-b34146ec435a.png?w=96" alt="" style={{width:'150px',height:'35px', 
            }}/>

        <div style={{display:'flex',gap:'10px'}}>  

      <Button variant="outlined"  startIcon={<SearchIcon />}  >
        <div style={{width:'8rem'}}></div>
      </Button>
      <span style={{marginTop:'5px'}}>
      <NotificationsIcon/>
      </span>
      <sup style={{marginLeft:'-1.2rem',marginTop:'7px', backgroundColor:'green', height:'6px',width:'6px',borderRadius:'50%'}}></sup>
    <img src="https://img.freepik.com/premium-photo/young-woman-laughing-happily-with-arms-crossed-with-relaxed-positive-satisfied-pose-blue-wall_1194-49076.jpg?size=626&ext=jpg&ga=GA1.1.817053775.1698868090&semt=ais " alt="" style={{width:'2rem',height:'2rem',borderRadius:'50%'}} />
     <ArrowDropDownIcon />
      </div>  
        </Box>
  );
}

export default Navbar;
