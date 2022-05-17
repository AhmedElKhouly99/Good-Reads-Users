import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Book from './book'

export default function Books() {
    const [books, setBooks] = useState([1, 2, 3, 4, 5, 6]);
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        // setBooks here
    };

    return (
        <>
            <div className='row justify-content-around' style={{ marginTop: "5%" }}>
                {
                    books.map((books) => { return (<Book books={books} />) })
                }

            </div>
            <div className='row justify-content-center'>
            <Stack className='col-4' spacing={2}>
                <Pagination count={10} color="primary" page={page} onChange={handleChange} />
            </Stack>
            </div>
        </>
    )
}
