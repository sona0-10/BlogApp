import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" style={{textAlign:'left'}} 
          sx={{ flexGrow: 1 }}>
            Blog app
          </Typography>
          <Button> 
            <Link to={'/add'}
            style={{color:'white',textDecoration:'none'}}>
            Add
            </Link>
            </Button>
            <Button> 
            <Link to={'/View'}
            style={{color:'white',textDecoration:'none'}}>
            View
            </Link>
            </Button>
            <Button> 
            <Link to={'/my'}
            style={{color:'white',textDecoration:'none'}}>
            Myprofile
            </Link>
            </Button>
            <Button> 
            <Link to={'/'}
            style={{color:'white',textDecoration:'none'}}>
            Logout
            </Link>
            </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
