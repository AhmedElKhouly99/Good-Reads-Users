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





function SubheaderDividers({ book }) {
    const [value, setValue] = React.useState(0);

    React.useEffect(()=>({

    }), [value]);

    React.useEffect(()=>{
        axios.get("https://good-reads-server.herokuapp.com/user/rate/", {
            headers: {
                Uid:  sessionStorage.getItem("token"),
            },
            Bid:book._id
        })
            .then(function (response) {
                console.log(response.data);
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const date = new Date(book.author[0].dateOfBirth)
    const rate = book.rating / book.noOfRatings;
    return (
        <List
            // className='row justify-content-around'
            sx={{
                width: '100%',
                // maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            <ListItem className='row justify-content-around'>
                <ListItemText primary="Photo" />
                <img src={book.image} style={{ width: '20%' }} />
            </ListItem>
            <Divider component="li" />
            <li>
                <Typography
                    sx={{ mt: 0.5, ml: 2 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                // secondary="Authors"
                >
                    Authors :
                </Typography>
            </li>
            <ListItem>
                <ListItemText primary={book.author[0].firstName + " " + book.author[0].lastName} secondary={`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`} />
            </ListItem>
            <Divider component="li" />
            <li>
                <Typography
                    sx={{ mt: 0.5, ml: 2 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                >
                    Rating
                </Typography>
            </li>
            <ListItem>
                <Rating name="read-only" value={rate} readOnly />
            </ListItem>
            
            <Divider component="li" />
            <li>
                <Typography
                    sx={{ mt: 0.5, ml: 2 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                >
                    Rating
                </Typography>
            </li>
            <ListItem>
                
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
        </List>
    );
}






const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenBook({ openBook }) {
    const [open, setOpen] = React.useState(openBook.open);
    React.useEffect(() => { setOpen(openBook.open); }, [openBook.open]);
    console.log(openBook);
    //   const handleClickOpen = () => {
    //     setOpen(true);
    //   };

    const handleClose = () => {
        openBook.open = false;
        setOpen(false);
    };

    if (openBook.book)
        return (
            <div>
                {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
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
                    <SubheaderDividers book={openBook.book} />
                </Dialog>
            </div>
        );
}






