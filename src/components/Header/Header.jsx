import React, { useState } from "react";
import { AutoComplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles'; 
 
const Header = ({setCoordinates}) => {
  const classes = useStyles();
  const [autoComplete, setAutoComplete] = useState(null);
  
  const onLoad = (autoComplete) => setAutoComplete(autoComplete);
  
  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();

    setCoordinates({lat, lng})


  }
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant='h6' className={classes.title}>
              Explore New Places
          </Typography>
          <AutoComplete onLoad = {onLoad} onPlaceChanged={onPlaceChanged}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase placeholder='Search ...' classes={{root: classes.inputRoot, input: classes.inputInput}} />
                </div>
          </AutoComplete>
        </Box>
      </Toolbar>
    </AppBar> 
        

  );
}

export default Header;