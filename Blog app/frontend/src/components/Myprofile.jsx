import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Myprofile = () => {
    const[userId,setUserId] = useState(sessionStorage.getItem("Id"));
    const[myData,setMyData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3008/api/Viewmypro/"+userId)
        .then((res)=>{
            console.log(res.data)
            setMyData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div style={{margin:'10%'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}></Grid>
        {myData.map((val,i)=>{
            return(
                <Grid item xs={12} sm={4} md={4}>
                  <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name:{val.name}
        </Typography>
        <Typography x={{ fontSize: 14 }}>
         Email:{val.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Address:{val.address}
        </Typography>
        <Typography variant="body2">
          Username:{val.username}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
   </Grid>
            )
     })}
      <Grid item xs={12} sm={4} md={4}></Grid>
       </Grid>
    </div>
  )
}

export default Myprofile
