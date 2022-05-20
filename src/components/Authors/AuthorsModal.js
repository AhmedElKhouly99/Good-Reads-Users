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
import { AtmSharp } from '@mui/icons-material';

export default function AuthorModal({ author }) {

    const date = new Date(author.dateOfBirth)
    const [books, setBooks] = React.useState([]);
    React.useEffect(() => {
        // if (!book == undefined) {
        axios.get(`https://good-reads-server.herokuapp.com/user/author/${author._id}/books`, {
            headers: {
                token: sessionStorage.getItem("token"),
            }
        },
        )
            .then(function (response) {
                console.log(response.data);
                setBooks(response.data);
                // setBookStatus(response.data);
                // flag = true;
                // newbookStatus = response.data;
                // setOldStatus(response.data !== ""?response.data:{rating:0, status:0})
                // setValue(newbookStatus.rating?newbookStatus.rating:0)
                // setStatus(newbookStatus.status?newbookStatus.status:0)
            })
            .catch(function (error) {
                console.log(error);
            })
        // }
    }, []);

    return (
        <>
            <List sx={{ width: '100%', backgroundImage: 'linear-gradient(to bottom right, beige, #81c3ca)',}}>
                <ListItem alignItems="flex-start" style={{ marginTop: '1em', marginBottom: '2em', baddingLeft: 0, width: '40em' }}>
                    <ListItem >
                        <ListItemText primary="" />
                        <img src={author.image ? author.image : "https://www.jimdo.com/static/788abd633ed9f2088117678a650fc7c4/c76cf/steplist-author.jpg"}
                            alt="photo" style={{ width: '50%' }} />
                    </ListItem>
                    <ListItemText
                        style={{ marginTop: '1.5em', marginLeft: '2em' }}
                        primary={<h3>{author.firstName + " " + author.lastName} </h3>}
                        secondary={
                            <>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"

                                >
                                    {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                                </Typography>
                                <br /><br />
                                {"I'm the author of these books ..."}
                            </>
                        }
                    />
                </ListItem>
            </List>

            {/* the books */}
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <h4 style={{marginLeft: '1.7em'}}>The Books:</h4>
                {books.map((book) => {
                    const averageRate = book.rating / book.noOfRatings ? book.rating / book.noOfRatings : 0;
                    // const labelId = `checkbox-list-secondary-label-${book._id}`;
                    return (
                        <ListItem
                            style={{ marginTop: '1em', marginBottom: '0', baddingLeft: 0, width: '15em' }}
                            key={book._id}
                        >
                            <ListItem alignItems="flex-start">
                                <ListItem >
                                    <ListItemText primary="" />
                                    <img src={book.image ? author.image : "https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif"}
                                        alt="photo" style={{ width: '80%' }} />
                                </ListItem>
                                <ListItemText
                                    primary={book.name}
                                    secondary={
                                        <React.Fragment>
                                            <Rating name="read-only" value={averageRate} readOnly />
                                            {book.noOfRatings?book.noOfRatings:0 + " ratings"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
}

