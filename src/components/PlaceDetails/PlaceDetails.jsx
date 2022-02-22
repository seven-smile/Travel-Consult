/*import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/Location';
import PhoneIcon from '@material-ui/core/Phone';
import { Rating } from "@material-ui/lab/Rating";

import useStyles from './styles';

const PlaceDetails = ({place}) => {
    const classes = useStyles();

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={ place.photo ? place.photo.images.large.url: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name} 
            />
            <CardContent>
                <Typography gutterBottom varient = 'h5'>
                    {place.name}
                </Typography>
            </CardContent>

        </Card>
    );
}

export default PlaceDetails;*/

import React from "react";

const PlaceDetails = ({place }) => {
    console.log(place);
    return (
        <h1>{place.name}</h1>
    );
}

export default PlaceDetails;