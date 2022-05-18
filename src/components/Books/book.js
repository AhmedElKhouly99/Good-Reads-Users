import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';

export default function Book( { book } ) {

  const [value, setValue] = React.useState(4);
  const bookHandler = (event)=>{
    alert("dfghjk")
  }

  return (
    <Card sx={{ maxWidth: 345, marginBottom: "2%" }} onClick={bookHandler}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {book.image?book.image:"https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif"}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.category[0] && book.category[0].name}
          </Typography>


      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}

      <Rating name="read-only" value={value} readOnly />


        </CardContent>
      </CardActionArea>
    </Card>
  );
}
