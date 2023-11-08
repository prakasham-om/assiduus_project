
import { Box, Grid,Card ,Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import React, { useState,useEffect } from 'react';
import LineChart from './sub/LineChart';
import CandlestickChart from './sub/CandlestickChart';
import MyTable from './sub/MyTable';


 
const Dashboard = () => {
  const [data,setData]=useState([
    { month: "Jan", value: 12 },
    { month: "Feb", value: 43},
    { month: "Mar", value: 38},
    { month: "Apr", value: 45},
    { month: "May", value: 63 },
    { month: "Jun", value: 32 },
    { month: "Jul", value: 24 },
    { month: "Aug", value: 40 },
  ]);
  
  
  const randomDatagenerate=(e)=>{
   
    let random=Math.floor(Math.random()*3+Math.random()*7-Math.random()*9+Math.random()*5)
    setData( [
      { month: "Jan", value: 10*random },
      { month: "Feb", value: 41+random},
      { month: "Mar", value: 37-random},
      { month: "Apr", value: 45-random },
      { month: "May", value: 63/random },
      { month: "Jun", value: 32+random },
      { month: "Jul", value: 24+random },
      { month: "Aug", value: 40+random },
    ])
  }

  useEffect(()=>{
  
  },[data])
  const arr1=["january",'feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
  return (
    <>
    <Box  style={{padding:'40px',backgroundColor:'#E5E4E2',height:'100vh',
            '@media (min-width:600px)': {
              padding: '10px',
              backgroundColor:'blue' // For small devices (min-width: 600px)
            },
  }} >
    <button btn style={{marginBottom:'10px'}} onClick={randomDatagenerate}>Change Random data</button>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <div style={{borderBottom:'1px solid #E5E4E2',display:'flex',justifyContent:'space-between',alignItems:'center', padding:'10px'}}>
                <p style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Checking accout</p>
                <div style={{display:'flex',gap:'10px'}}>
                <select name="" id="" style={{width:'100px',height:'30px',border:'none',textAlign:'center'}}>
                  <option value="">Manage</option>
                  </select>
                 <select name="" id="" style={{width:'100px',height:'30px',border:'none',textAlign:'center'}}>
                  {
                    arr1.map((ele)=>{
                      return <>
                        <option value="">{ele}</option>
                      </>
                    })
                  }
                 </select>
                 </div> 
          </div>
          <LineChart data={data}/>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>

        <Card>
        <div style={{borderBottom:'1px solid #E5E4E2',display:'flex',justifyContent:'space-between',alignItems:'center', padding:'10px'}}>
                <p style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Invoices owed to you</p>
                <button btn onClick={()=>{alert("No action can be taken in the form through")}}>New Sales Invoice</button>
                <div>
                  <span style={{width:'10px',height:'10px',borderRadius:'10px',backgroundColor:'green'}}></span>
                </div>
          </div>
         <CandlestickChart data={data}/>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card scroll>
          <div style={{borderBottom:'1px solid #E5E4E2',display:'flex',justifyContent:'space-between',alignItems:'center', padding:'10px'}}>
                <p style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Total cash flow</p>
              
          </div>
        <CandlestickChart data={data}/>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
        <div style={{borderBottom:'1px solid #E5E4E2',display:'flex',justifyContent:'space-between',alignItems:'center', padding:'10px'}}>
                <p style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Account watchlist</p>
              
          </div>
          <MyTable/>
        </Card>
      </Grid>
    </Grid>
    
    </Box>
    </>
  )
}

export default Dashboard 