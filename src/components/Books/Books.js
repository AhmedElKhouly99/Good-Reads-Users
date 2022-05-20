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
    const [openBook, setOpenBook] = useState({ open: false, book: undefined });

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


    if (books && (openBook != undefined))
        return (
            <>
                <div className='row justify-content-around' style={{ marginTop: "5%" }}>
                    {
                        books.map((book) => { return (<Book key={book._id} book={book} setOpenBook={setOpenBook} />) })
                    }

                </div>
                <div className='row justify-content-center'>
                    <Stack className='col-4' spacing={2}>
                        <Pagination count={numPages} color="primary" page={page} onChange={handleChange} />
                    </Stack>
                </div>
                <Bookmodal openBook={openBook} />
            </>
        )

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
            <Media />
        </Box>
    );
}
