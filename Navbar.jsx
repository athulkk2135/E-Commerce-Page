import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
        <Toolbar>
            <Typography variant="h2" color={'orange'} sx={{flexGrow:1}}>
                Amazon
            </Typography>
            <Link to ='/'>
            <Button color='secondary' variant='contained'>Home</Button>
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Link to='/add-product'>
           <Button color='secondary' variant='contained'>Add Product</Button>
           </Link>&nbsp;
           
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
