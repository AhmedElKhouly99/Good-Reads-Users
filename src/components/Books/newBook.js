import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Rating from "@mui/material/Rating";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ListItemIcon from "@mui/material/ListItemIcon";
import "./BookView.css";

function NewBook({ book }) {
  console.log(book);
  const [open, setOpen] = React.useState(false);

//   let status = book.status;
//   let value = book.myRating;
  const [ch, setCh] = React.useState(false);

  const date = new Date(book.author[0].dateOfBirth);
  const rate = book.noOfRatings ? book.rating / book.noOfRatings : 0;
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    book.status = event.target.value;
    // setStatus(event.target.value);
    editRating();
  };
  const editRating = () => {
      console.log(book.status)
    const newRate = {
      isRated: book.isRated,
      Bid: book._id,
      status: book.status,
      review: book.review,
      rating: book.myRating,
    };
    console.log(newRate);
    axios
      .patch(`https://good-reads-server.herokuapp.com/user/books/`, newRate, {
        headers: {
          token: sessionStorage.getItem("token"),
        },
        params: {
          oldStatus: book.status ? book.status : 0,
          oldRating: book.myRating ? book.myRating : 0,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setCh(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <List
      // className='row justify-content-around'
      sx={{
        width: "100%",
        // maxWidth: 360,
        bgcolor: "beige",
      }}
    >
      <ListItem className="row justify-content-around">
        {/* <ListItemText primary="Photo" /> */}
        <img src={book.image} style={{ width: "20%" }} />
      </ListItem>
      <div class="myItem">
        <Divider component="li" />
        <li>
          <Typography
            sx={{ mt: 0.5, ml: 2 }}
            color="text.secondary"
            display="block"
            variant="caption"
            fontSize={14}
            // secondary="Authors"
          >
            Authors :
          </Typography>
        </li>
        <ListItem>
          <ListItemIcon sx={{ fontSize: 22 }}>🧑🏻</ListItemIcon>
          <ListItemText
            primary={book.author[0].firstName + " " + book.author[0].lastName}
            secondary={`${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`}
          />
        </ListItem>
        <Divider component="li" />
      </div>
      <div class="myItem">
        <li>
          <Typography
            sx={{ mt: 0.5, ml: 2 }}
            color="text.secondary"
            display="block"
            variant="caption"
            fontSize={14}
          >
            Rating:
          </Typography>
        </li>
        <ListItem>
          <ListItemIcon sx={{ fontSize: 20 }}>🌟</ListItemIcon>
          <Rating name="read-only" value={rate} readOnly />
        </ListItem>

        <Divider component="li" />
      </div>
      <div class="myItem">
        <li>
          <Typography
            sx={{ mt: 0.5, ml: 2 }}
            color="text.secondary"
            display="block"
            variant="caption"
            fontSize={14}
          >
            Add Your Rate:
          </Typography>
        </li>
        <ListItem>
          <ListItemIcon sx={{ fontSize: 20 }}>🌟</ListItemIcon>
          <Rating
            name="simple-controlled"
            value={book.myRating}
            onChange={(event) => {
                book.myRating = event.target.value;
              // setValue(newValue);
              editRating();
            }}
          />
        </ListItem>

        <Divider component="li" />
      </div>
      <div class="myItem">
        <li>
          <Typography
            sx={{ mt: 0.5, ml: 2 }}
            color="text.secondary"
            display="block"
            variant="caption"
            fontSize={14}
            // secondary="Authors"
          >
            Add Book Status:
          </Typography>
        </li>
        <ListItem>
          <ListItemIcon sx={{ fontSize: 30 }}>📚</ListItemIcon>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Status
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={book.status}
              label="Status"
              onChange={(event, newValue) => {
                  console.log(newValue.props.value)
                  book.status = event.target.value;
                editRating();
              }}
            >
              <MenuItem value={0}>
                <em>Add Book Status</em>
              </MenuItem>
              <MenuItem value={1}>Read</MenuItem>
              <MenuItem value={2}>Currently Reading</MenuItem>
              <MenuItem value={3}>Want To Read</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
      </div>

      {/* <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem> */}
    </List>
  );
}
export default NewBook;
