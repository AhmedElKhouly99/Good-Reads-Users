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
// import "./BookView.css";
import AuthorModal from './AuthorsModal';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenAuthor({ openAuthor }) {
    const [open, setOpen] = React.useState(openAuthor.open);
    React.useEffect(() => { setOpen(openAuthor.open); }, [openAuthor.open]);

    console.log(openAuthor);
    // let bookStatus = {}

    const handleClose = () => {
        openAuthor.open = false;
        setOpen(false);
        // flag = true
    };


    if (openAuthor.author) {

        return (
            <div>

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
                                {openAuthor.author.firstName + " " + openAuthor.author.lastName}
                            </Typography>
                            <Button autoFocus color="inherit"
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                        </Toolbar>
                    </AppBar>

                    {

                        <AuthorModal author={openAuthor.author} />

                    }
                </Dialog>
            </div>
        );
    }
}