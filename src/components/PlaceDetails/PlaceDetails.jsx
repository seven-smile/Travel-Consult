import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/Location';
import PhoneIcon from '@material-ui/core/Phone';
import { Rating } from "@material-ui/lab/Rating";

import useStyles from './styles';

const PlaceDetails = ({place}) => {
    console.log(place);

    return (
        <Card elevation={6}>
            <CardMedia
            style={{ height: 350 }}
            image={ place.photo ? place.photo.image.target.url: ''}
            title={placae.name} 
            />
        </Card>
    );
}

export default PlaceDetails;