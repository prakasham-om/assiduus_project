import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';

const MyTable = () => {
  return (
   <table style={{width:'100%'}}>
       <th style={{width:'50%', paddingLeft:'7px'}}>
        <td  >Account </td>
       </th>
       <th style={{width:'25%'}}>
        <td >This Month </td>
       </th>
       <th style={{width:'25%'}}>
        <td >Ytd </td>
       </th>
       <tbody>
            <tr >
                <td style={{padding:'7px'}}>Sales</td>
                <td>1194.58</td>
                <td>11418.29</td>
            </tr>
            <tr >
                <td style={{padding:'7px'}}>Advertising</td>
                <td>6879.02</td>
                <td>9271.36</td>
            </tr>
            <tr >
                <td style={{padding:'7px'}}>Inventory</td>
                <td>4692.25</td>
                <td>9768.09</td>
            </tr>
            <tr >
                <td style={{padding:'7px'}}>Entertenment</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr >
                <td style={{padding:'7px'}}>Product</td>
                <td>4652.10</td>
                <td>2329.90</td>
            </tr>
       </tbody>
    
   </table>
   
  );
}

export default MyTable;
