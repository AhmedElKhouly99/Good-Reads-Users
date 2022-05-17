import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Category( { cat } ) {
  return (
    <Card sx={{ maxWidth: 300, marginTop: '5%' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cat.name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Go To Books
        </Button>
      </CardActions>
    </Card>
  );
}
