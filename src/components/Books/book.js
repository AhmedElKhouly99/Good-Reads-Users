import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
import "./book.css";

export default function Book({ book, setOpenBook }) {

  const [value, setValue] = React.useState(book.rating);
  const bookHandler = (event) => {
    const id = event.currentTarget.id;
    setOpenBook({ open: true, book: book });
  }

  const handleAdd = (event) => {
    const id = event.currentTarget.id
  }

  return (
    <>
      <Card sx={{ width: 345, marginBottom: "2%" }} onClick={bookHandler} id={book._id} className="myBookCard">
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={book.image ? book.image : "https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif"}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {book.category[0] && book.category[0].name}
            </Typography>
            <Rating name="read-only" value={value} readOnly />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
