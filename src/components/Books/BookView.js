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
import BookModal from './BookModal'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenBook({ openBook }) {
    const [open, setOpen] = React.useState(openBook.open);
    React.useEffect(() => { setOpen(openBook.open); }, [openBook.open]);
    let bookStatus = {}


    const handleClose = () => {
        openBook.open = false;
        setOpen(false);
    };


    if (openBook.book) {
       
        if(bookStatus !== {})
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
                                {openBook.book.name}
                            </Typography>
                            <Button autoFocus color="inherit"
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {
                         bookStatus?<BookModal book={openBook.book} bookStatus={bookStatus} />:<h1>loading ...</h1>
                    }
                </Dialog>
            </div>
        );
    }
}