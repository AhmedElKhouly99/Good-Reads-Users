import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Author from './Author';
import FullScreenAuthor from './AuthorView';


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
                    {/* {item ? (
                        <img
                            style={{ width: 210, height: 118 }}
                            alt={item.title}
                            src={item.src}
                        />
                    ) : ( */}
                    <Skeleton variant="rectangular" width={210} height={118} />
                    {/* )} */}

                    {item ? (
                        <Box sx={{ pr: 2 }}>
                            {/* <Typography gutterBottom variant="body2">
                                {item.title}
                            </Typography>
                            <Typography display="block" variant="caption" color="text.secondary">
                                {item.channel}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {`${item.views} • ${item.createdAt}`}
                            </Typography> */}
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

const AuthorModal = React.memo(FullScreenAuthor); 
export default function Authors() {
    const [authors, setAuthors] = useState(undefined);
    const [page, setPage] = React.useState(1);
    const [numPages, setNumPages] = useState(1);
    const [openAuthor, setOpenAuthor] = useState({open:false, author:undefined})
    const handleChange = (event, value) => {
        setPage(value);
        // setAuthors here
    };

    useEffect(() => {
        axios.get("https://good-reads-server.herokuapp.com/user/authors/", {
            params: {
                page: page
            }
        })
            .then(function (response) {
                console.log(response.data.authors);
                setAuthors(response.data.authors)
                setNumPages(response.data.pages)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [page])

    if (authors && (openAuthor != undefined))
    // if (authors)
        return (
            <>
                <div className='row justify-content-around' style={{ marginTop: "5%" }}>
                    {
                        authors.map((author) => { return (<Author key={author._id} author={author} setOpenAuthor={setOpenAuthor}/>) })
                    }

                </div>
                <div className='row justify-content-center'>
                    <Stack className='col-4' spacing={2}>
                        <Pagination count={numPages} color="primary" page={page} onChange={handleChange} />
                    </Stack>
                </div>
                <AuthorModal openAuthor={openAuthor}/>
            </>
        )

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
            <Media />
        </Box>
    );
}
