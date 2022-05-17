import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Author( { author } ) {

  return (
    <Card sx={{ maxWidth: 345, marginBottom: "2%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Author name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date of Birth : 20/2/1979
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
