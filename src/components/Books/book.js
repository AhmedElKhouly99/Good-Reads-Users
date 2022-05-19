import * as React from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { CardActionArea } from '@mui/material';
import FullScreenBook from './BookView';

export default function Book({ book, setOpenBook }) {

  const [value, setValue] = React.useState(4);
  // const [Open, setOpen] = React.useState(false)
  const bookHandler = (event) => {
    const id = event.currentTarget.id;
    setOpenBook({open:true, book: book});
  }

  const handleAdd = (event)=> {
    const id = event.currentTarget.id
  }

  return (
    <>
    <Card sx={{ maxWidth: 345, marginBottom: "2%" }} onClick={bookHandler} id={book._id}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="140"
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
          {/* <Typography variant="body2" color="text.secondary">
            <AddBoxIcon />
          </Typography> */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleAdd}
            color="inherit"
          >
            <AddBoxIcon />
          </IconButton>

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
    {/* <FullScreenBook  book={book} open={Open}/> */}
    </>
  );
}
