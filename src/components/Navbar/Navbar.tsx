import React from 'react';
import {
  AppBar,
  List,
  ListItem,
  Toolbar, Typography
} from "@mui/material";
import {NavLink} from "react-router-dom";
import './NavBar.css';

const Navbar = () => {
  return (
    <>
      <AppBar component="nav" sx={{position: 'static'}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <List sx={{p: '10px', display: 'flex'}}>
            <ListItem disablePadding>
              <NavLink className='list' to={'/'}>Home</NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink className='list' to={'/CreateAndEditPost'}>Add</NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink className='list' to={'/About'}>About</NavLink>
            </ListItem>

            <ListItem disablePadding>
              <NavLink className='list'  to={'/Contacts'}>Contacts</NavLink>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;