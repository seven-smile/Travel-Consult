import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, select } from '@material-ui/core';


import useStyles from './styles';

const List = () => {
  const classes = useStyles()
  const [type, setType] = useState("restaurants");

  return (
    <div className={classes.container}>
      <Typography variant="h4"> Resturants, Hotels & Attractions around You</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </select>
      </FormControl>
    </div>
  );
}

export default List;