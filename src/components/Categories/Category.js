import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./category.css";

import CategoryBooks from "./CategoryView";

export default function Category({ cat, setRender }) {
  const handleClick = () => {
    setRender({ open: true, category: cat });
  };

  return (
    <Card sx={{ width: 300, marginTop: "5%", paddingTop:'1%' }} className="myCategoryCard">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cat.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Go To Books
        </Button>
      </CardActions>
    </Card>
  );
}
