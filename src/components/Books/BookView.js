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
import BookModal from './BookModal'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenBook({ openBook }) {
    const [open, setOpen] = React.useState(openBook.open);
    React.useEffect(() => { setOpen(openBook.open); }, [openBook.open]);
    // const [bookStatus, setBookStatus] = React.useState({});
    console.log(openBook);
    let bookStatus = {}
    //   const handleClickOpen = () => {
    //     setOpen(true);
    //   };

    const handleClose = () => {
        openBook.open = false;
        setOpen(false);
        // flag = true
    };


    if (openBook.book) {
       
        if(bookStatus !== {})
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
                    <AppBar sx={{ position: 'relative', backgroundColor: '#81c3ca' }}>
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
                    {/* <SubheaderDividers book={openBook.book} /> */}
                    {
                        // <BookModal book={openBook.book} bookStatus={bookStatus} />
                         bookStatus?<BookModal book={openBook.book} bookStatus={bookStatus} />:<h1>loading ...</h1>
                        //  bookStatus?<Book book={openBook.book} bookStatus={bookStatus} />:<h1>loading ...</h1>

                    }
                </Dialog>
            </div>
        );
    }
}