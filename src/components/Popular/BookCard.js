import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./popular.css";
export default function BookCard({ book, isFirst }) {
  const [category, setCat] = useState(book);
  if (isFirst) {
    return (
      <div
        className="carousel-item active myPopularCard txtPlace"
        style={{ width: "100%", marginBottom: "2%" }}
      >
        <h2 style={{ textAlign: "center" }}>Popular Books</h2>
        <Card sx={{}} className="myPopularCard">
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={
                book.image
                  ? book.image
                  : "https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif"
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }

  return (
    <div
      className="carousel-item"
      style={{ width: "100%", marginBottom: "2%" }}
    >
      <h2 style={{ textAlign: "center" }}>Popular Books</h2>
      <Card sx={{}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={
              book.image
                ? book.image
                : "https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif"
            }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
