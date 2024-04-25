import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const[inputs,setInputs] = useState({});
    const Navigate = useNavigate(); 
    const inputHandler = (e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log("textfield",inputs)
    }
    const submitHandler=()=>
    {console.log("btn",inputs);
    axios.post("http://localhost:3008/api/login",inputs)
    .then((res)=>{
      console.log(res);
      console.log(res.data.person)
      alert(res.data.message)
      if(res.data.message=="Log in successfully"){
      const userId = res.data.person._id;
    sessionStorage.setItem("Id",userId)
      Navigate('/view');
      }
    })
    }
  return (
    <div style={{margin:'12%'}}>
      <Typography variant='h3' style={{color:'purple'}}>
        Login form
      </Typography>
      <br /><br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
            <TextField
            variant='outlined'
            label='username'
            name='username'
            onChange={inputHandler}
            />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField
            variant='outlined'
            label='password'
            name='password'
            onChange={inputHandler}
            />
            </Grid>
           <Grid item xs={12} sm={12} md={12}>
            <Button variant='contained' color='secondary'
            onClick={submitHandler}>
                Log in
                </Button>  
                </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12}></Grid>
      <Link to ={'sign'}>New user</Link>
    </div>
  )
}

export default Login
