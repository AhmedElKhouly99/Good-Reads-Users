import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemIcon from '@mui/material/ListItemIcon';
import "./BookView.css";


const editRating = (news,olds) => {
            console.log(olds);
            console.log(news);
            axios.patch(`https://good-reads-server.herokuapp.com/user/books/`, news, {
                headers: {
                    token: sessionStorage.getItem("token"),
                },
                params: {
                    oldStatus: olds.status? olds.status : 0,
                    oldRating: olds.rating? olds.rating : 0
                },
            },
            )
                .then(function (response) {
                    console.log(response.data);
    
                })
                .catch(function (error) {
                    console.log(error);
                })
        };





export default function BookModal({ book, bookStatus }) {
     const [value, setValue] = React.useState(0);
     const [status, setStatus] = React.useState(0);
     const [open, setOpen] = React.useState(false);
     const [oldStatus, setOldStatus] = React.useState(bookStatus)
     const date = new Date(book.author[0].dateOfBirth)
     const rate = book.rating / book.noOfRatings?book.rating / book.noOfRatings:0;
    // let value = bookStatus?.rating?bookStatus.rating:0;
    // let status = bookStatus?.status?bookStatus.status:0;
    // let newStatus = {}
let newbookStatus = {};
    React.useEffect(() => {
        // if (!book == undefined) {
            axios.get(`https://good-reads-server.herokuapp.com/user/rate/${book._id}`, {
                headers: {
                    token: sessionStorage.getItem("token"),
                }
            },
            )
            .then(function (response) {
                console.log(response.data);
                // setBookStatus(response.data);
                // flag = true;
                newbookStatus = response.data;
                setOldStatus(response.data !== ""?response.data:{rating:0, status:0})
                setValue(newbookStatus.rating?newbookStatus.rating:0)
                setStatus(newbookStatus.status?newbookStatus.status:0)
            })
            .catch(function (error) {
                console.log(error);
            })
        // }
    }, [value]);




console.log(value);
console.log(status);
console.log(book);
     const handleChange = (event) => {
        console.log(event.target.value);
        newbookStatus.status = event.target.value;
        editRating({status:event.target.value, rating: value,Bid:oldStatus._id?oldStatus._id:book._id}, oldStatus);
        // console.log(newbookStatus);
        // setOldStatus({...oldStatus}, )
        setStatus(event.target.value);
        // status = event.target.value
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <List
            // className='row justify-content-around'
            sx={{
                width: '100%',
                // maxWidth: 360,
                bgcolor: 'beige',
            }}
        >
            <ListItem className='row justify-content-around'>
                {/* <ListItemText primary="Photo" /> */}
                <img src={book.image} style={{ width: '20%' }} />
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
                    <ListItemText primary={book.author[0].firstName + " " + book.author[0].lastName} secondary={`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`} />
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
                        value={value}
                        onChange={(event, newValue) => {
                            newbookStatus.status = newValue;
                            console.log(newbookStatus);
                            editRating({status:status, rating: newValue,Bid:oldStatus._id?oldStatus._id:book._id}, oldStatus)
                            setValue(newValue);
                            // value = newValue;
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
                        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={status?status:0}
                            label="Status"
                            onChange={handleChange}
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
        </List>
    );
}