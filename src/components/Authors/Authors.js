import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Book from './Author'
import Author from './Author';

export default function Authors() {
    const [authors, setAuthors] = useState([1, 2, 3, 4, 5, 6]);
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        // setAuthors here
    };

    return (
        <>
            <div className='row justify-content-around' style={{ marginTop: "5%" }}>
                {
                    authors.map((author) => { return (<Author author={author} />) })
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
