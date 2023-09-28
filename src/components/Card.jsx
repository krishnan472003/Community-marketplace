import * as React from 'react';
import { Card,CardActionArea,CardContent,CardMedia,Typography } from '@mui/material';
import { Grid } from '@mui/material';
// import sofa from '../static/images/sofa.webp';


export default function ActionAreaCard(props) {
 
  
  return (

    <Card sx={{ maxWidth: 345,padding: 3,height: 400}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="Sofa"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.content}
          </Typography>
          <p className="product-price">{props.price}</p>
        </CardContent>
      </CardActionArea>
    </Card>

  );
}
