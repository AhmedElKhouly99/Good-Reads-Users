import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
<<<<<<< HEAD
import FullScreenBook from './BookView';
import axios from 'axios'
export default function Book({ book, setOpenBook }) {
  const [value, setValue] = React.useState(4);
  // const [Open, setOpen] = React.useState(false)

  const bookHandler = (event) => {
    const id = event.currentTarget.id;
    axios.get(`https://good-reads-server.herokuapp.com/user/rate/${book._id}`, {
      headers: {
          token: sessionStorage.getItem("token"),
      }
  },
  )
      .then(function (response) {
          console.log(response.data);
          // eslint-disable-next-line react-hooks/exhaustive-deps
          // userRate = response.data;
        book.myRating = response.data.rating;
        book.status = response.data.status;
        book.isRated = response.data.isRated;
        //  setStatus(userRate.status);
      //         // setStatus(userRate.status);

          // value = userRate.rating
              // setValue(userRate.rating);
              setOpenBook({open:true, book: book});
      })
      .catch(function (error) {
          console.log(error);
      })
    
  
    console.log("here")

    
  }
  const handleAdd = (event)=> {
=======
import "./book.css";

export default function Book({ book, setOpenBook }) {

  const [value, setValue] = React.useState(book.rating);
  const bookHandler = (event) => {
    const id = event.currentTarget.id;
    setOpenBook({ open: true, book: book });
  }

  const handleAdd = (event) => {
>>>>>>> 5ef79c46244d6e95286af44b2663cba4f194b9a8
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
