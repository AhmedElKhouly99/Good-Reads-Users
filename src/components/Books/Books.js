import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Book from './book'
import FullScreenBook from './BookView';
import NewBook from './newBook'
import { Link, useNavigate } from 'react-router-dom'
const data = [
    {

    },
    {

    },
    {

    },
];


function Media(props) {
    const { loading = false } = props;

    return (
        <Grid className='row justify-content-center' container wrap="nowrap">
            {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                <Box className='col-3' key={index} sx={{ marginRight: 0.5, my: 5 }}>

                    <Skeleton variant="rectangular" width={210} height={118} />

                    {item ? (
                        <Box sx={{ pr: 2 }}>

                        </Box>
                    ) : (
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    )}
                </Box>
            ))}
        </Grid>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

const Bookmodal = React.memo(FullScreenBook);
export default function Books() {
    const [numPages, setNumPages] = useState(1);
    const [books, setBooks] = useState(undefined);
    const [page, setPage] = React.useState(1);
<<<<<<< HEAD
    const [openBook, setOpenBook] = useState({open:false, book:undefined});
    const navigate = useNavigate();
=======
    const [openBook, setOpenBook] = useState({ open: false, book: undefined });

>>>>>>> 5ef79c46244d6e95286af44b2663cba4f194b9a8
    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {
        axios.get("https://good-reads-server.herokuapp.com/user/books/", {
            params: {
                page: page
            }
        })
            .then(function (response) {
                setBooks(response.data.data)
                setNumPages(response.data.pages)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [page])


<<<<<<< HEAD
    // }
if(openBook.open){
    // navigate({name:'/bookprofile', params: { book: openBook.book },})
    return <NewBook  book={openBook.book}  />
}
    if (books)
=======
    if (books && (openBook != undefined))
>>>>>>> 5ef79c46244d6e95286af44b2663cba4f194b9a8
        return (
            <>
                <div className='row justify-content-around' style={{ marginTop: "5%" }}>
                    {
                        books.map((book) => { return (<Book key={book._id} book={book} setOpenBook={setOpenBook} />) })
                    }

                </div>
                <div className='row justify-content-around'>
                    <Stack style={{marginLeft: '85%'}} spacing={2}>
                        <Pagination count={numPages} color="primary" page={page} onChange={handleChange} />
                    </Stack>
                </div>
<<<<<<< HEAD
                
                {/* <FullScreenBook  openBook={openBook}/> */}
=======
                <Bookmodal openBook={openBook} />
>>>>>>> 5ef79c46244d6e95286af44b2663cba4f194b9a8
            </>
        )

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
            <Media />
        </Box>
    );
}
