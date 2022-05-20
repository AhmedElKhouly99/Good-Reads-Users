import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Books.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PaginationBasic from './Pagination'
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function UserBooks({ tab }) {

    const [loadedbooks, setLoadedbooks] = useState([]);
    const [, setActivated] = useState(1);

    //  const [noOfPages, setNoOfPages] = useState(1);
    const noOfPages = useRef();
    useEffect(() => {
        axios.get("https://good-reads-server.herokuapp.com/user/wishlist", {
            headers: {
                token: sessionStorage.getItem('token')
            },
            // params:{
            //     page: activted,
            //     status: tab
            // }
        })
            .then(function (response) {
                console.log(response.data);
                setLoadedbooks(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])






    if (loadedbooks)
        return (
            <>
                <div style={{overflow: 'auto'}}>
                    <div className="App">
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Avg Rating</th>
                                <th>Status</th>
                                <th>Rating</th>
                            </tr>
                            {   (()=>{let counter = 0
                                return loadedbooks.map((val, key) => {
                                    if (val.bookRate.status === tab || tab === 0)
                                        {
                                            counter ++;
                                            return (
                                            <tr key={key}>
                                                <td>{counter}</td>
                                                <td >     <img className="activator m-auto" style={{ width: '250px', height: '250px' }} src={val.book.image ? val.book.image : "https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif"} alt='no pic' /> </td>
                                                <td>{val.book.name}</td>
                                                <td><Rating name="read-only" value={val.book.rating} readOnly /></td>
                                                <td>

                                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                        <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
                                                        <Select
                                                            readOnly
                                                            labelId="demo-controlled-open-select-label"
                                                            id="demo-controlled-open-select"
                                                            value={val.bookRate.status}
                                                            label="Status"
                                                        >
                                                            <MenuItem value={0}>
                                                                <em>Add Book Status</em>
                                                            </MenuItem>
                                                            <MenuItem value={1}>Read</MenuItem>
                                                            <MenuItem value={2}>Currently Reading</MenuItem>
                                                            <MenuItem value={3}>Want To Read</MenuItem>
                                                        </Select>
                                                    </FormControl>


                                                </td>
                                                <td><Rating name="read-only" value={val.bookRate.rating} readOnly />
                                                </td>
                                            </tr>
                                        );}
                                })})()
                            }


                            <tr><td colspan="6"> <PaginationBasic activated={setActivated} pages={noOfPages} /> </td></ tr>

                        </table>
                    </div>
                </div>


            </>
        );
}
export default UserBooks;
