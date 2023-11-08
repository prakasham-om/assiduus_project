// Dashboard.js
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Box } from '@mui/material';
function Dashboard() {
  const arr1=[{name:"Dashboard",icon:DashboardIcon},
  {name:"Accounts",icon:AccountBalanceWalletIcon},
  {name:"Payroll",icon:AttachMoneyIcon},
  {name:"Reports",icon:SummarizeIcon},
  {name:"Advisor",icon:PersonIcon},
  {name:"Contacts",icon:ContactsIcon}]

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
       setSelectedItem(item);    
  };
 
  
 
  return (
    
    <Box style={{paddingTop:"20px",height:'100vh',}}>
    <List>
        {
            arr1.map((ele)=>{
                return <ListItem
                      button
                      selected={selectedItem === ele.name}
                      onClick={()=>handleItemClick(ele.name)}
                      style={{
                        backgroundColor: selectedItem === ele.name ? '#32CD32': 'transparent',
                        cursor: 'pointer',
                      }}
                     >
                        {<ele.icon style={{marginRight:"10px"}} />}
                    <ListItemText  primary={ele.name} />
                </ListItem  >
            })
        }
      
  
    </List>
    </Box>
  );
}

export default Dashboard;
