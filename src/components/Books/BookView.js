import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import "./BookView.css";
<<<<<<< HEAD



function SubheaderDividers({ book,value,status,setStatus,setValue, userRate }) {
    const [ch, setCh] = React.useState(false);
 console.log(value, "fsdf", status)
    // const [status, setStatus] = React.useState(0);
    const [open, setOpen] = React.useState(false);  

    const editRating = () => {
        const newRate = {
            isRated: userRate.isRated,
            Bid: book._id,
            status: status,
            review: userRate.review,
            rating: value
        };
        console.log(userRate.status);
        console.log(newRate);
        axios.patch(`https://good-reads-server.herokuapp.com/user/books/`, newRate, {
            headers: {
                token: sessionStorage.getItem("token"),
            },
            params: {   
                oldStatus: userRate.status ? userRate.status : 0,
                oldRating: userRate.rating ? userRate.rating : 0
            },
        },
        )
            .then(function (response) {
                console.log(response.data);
                setCh(true)
            })
            .catch(function (error) {
                console.log(error);
            })
    };


    const handleChange = (event) => {
        console.log(event.target.value);
        setStatus(event.target.value);
        // setStatus(event.target.value);
        editRating();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };



  

    const date = new Date(book.author[0].dateOfBirth)
    const rate = book.noOfRatings? (book.rating / book.noOfRatings):0;
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
            <Divider component="li"  />
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
                    onChange={(event, newValue) => {setValue(newValue);
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
                    <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={status}
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




=======
import BookModal from './BookModal'
>>>>>>> 5ef79c46244d6e95286af44b2663cba4f194b9a8


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenBook({ openBook }) {
    const [open, setOpen] = React.useState(openBook.open);
<<<<<<< HEAD
//     let status;
// let value ;
let userRate = {};
let  [status,setStatus] = React.useState(0);
let  [value,setValue] = React.useState(0);
// setStatus(userRate.status);

// let  value = userRate.rating;
    React.useEffect(() => { setOpen(openBook.open);
        if(openBook.book)
        axios.get(`https://good-reads-server.herokuapp.com/user/rate/${openBook.book._id}`, {
            headers: {
                token: sessionStorage.getItem("token"),
            }
        },
        )
            .then(function (response) {
                console.log(response.data);
                // eslint-disable-next-line react-hooks/exhaustive-deps
                userRate = response.data;
              
               setStatus(userRate.status);
            //         // setStatus(userRate.status);
    
                // value = userRate.rating
                    setValue(userRate.rating);
            })
            .catch(function (error) {
                console.log(error);
            })
    
    }, [openBook.open,value,status]);
    console.log(openBook);
    //   const handleClickOpen = () => {
    //     setOpen(true);
    //   };
=======
    React.useEffect(() => { setOpen(openBook.open); }, [openBook.open]);
    let bookStatus = {}

>>>>>>> 5ef79c46244d6e95286af44b2663cba4f194b9a8

    const handleClose = () => {
        openBook.open = false;
        setOpen(false);
    };

<<<<<<< HEAD
    if (openBook.book)
   { 
       
  console.log(status,"f",value)   
  if(value)
  return (
            <div>
                {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
=======

    if (openBook.book) {
       
        if(bookStatus !== {})
        return (
            <div className='myBookView'>

>>>>>>> 5ef79c46244d6e95286af44b2663cba4f194b9a8
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative', backgroundColor: '#6351ce' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                {openBook.book.name}
                            </Typography>
                            <Button autoFocus color="inherit"
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                        </Toolbar>
                    </AppBar>
<<<<<<< HEAD
                    {/* <List>
                    <ListItem button>
                        <ListItemText primary="Phone ringtone" secondary="Titania" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText
                            primary="Default notification ringtone"
                            secondary="Tethys"
                        />
                    </ListItem>
                </List> */}
                    <SubheaderDividers book={openBook.book} value={value} status={status} setStatus={setStatus} setValue={setValue}  userRate={userRate} />
                </Dialog>
            </div>
        );}
=======
                    {
                         bookStatus?<BookModal book={openBook.book} bookStatus={bookStatus} />:<h1>loading ...</h1>
                    }
                </Dialog>
            </div>
        );
    }
>>>>>>> 5ef79c46244d6e95286af44b2663cba4f194b9a8
}