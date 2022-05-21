import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./author.css"

export default function Author( { author, setOpenAuthor } ) {

  const authorHandler = (event) => {
    setOpenAuthor({open:true, author: author});
  }
  const autherDOB = new Date(author.dateOfBirth)
  
  return (
    <Card key={author._id} sx={{ width: 345, marginBottom: "2%" }} onClick={authorHandler} className="myAuthorCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={author.image ? author.image : "https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif"}
          alt="green iguana"
        />
        <CardContent className='cardPart'>
          <Typography gutterBottom variant="h5" component="div">
            {author.fullname ? author.fullname : author.firstName + " " + author.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date of Birth : {`${autherDOB.getDate()}/${autherDOB.getMonth() + 1}/${autherDOB.getFullYear()}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
