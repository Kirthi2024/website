import React from 'react'
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
        
        <Link href="/" color="inherit"  underline="none">
          <Typography variant="h6" sx={{ mr: 3}}>
            Home
          </Typography></Link>
          <Link href="/about" color="inherit"  underline="none">
          <Typography variant="h6" sx={{ mr: 3 }}>
            About
          </Typography></Link>
          
          <Link href="/contact" color="inherit"  underline="none">
          <Typography variant="h6" sx={{ mr: 3 }}>
            Contact 
          </Typography></Link>
          <Link href="/service" color="inherit"  underline="none">
          <Typography variant="h6" sx={{ mr: 3 }}>
            Service 
          </Typography></Link>
          <Link href="/products" color="inherit"  underline="none">
          <Typography variant="h6" sx={{ mr: 3 }}>
            Products 
          </Typography></Link>
          
          <Outlet/>          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
