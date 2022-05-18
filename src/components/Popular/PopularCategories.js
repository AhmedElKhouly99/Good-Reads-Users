import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CatCard from './CatCard';


export default function PopularCategories() {
    const [popCats, setPopCats] = useState(undefined);
    useEffect(() => {
        axios.get("https://good-reads-server.herokuapp.com/user/categories/popular")
            .then(function (response) {
                console.log(response.data);
                setPopCats(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    if (popCats) {
        console.log(popCats);
        return (
            <div id="carouselExampleFade1" className="carousel slide carousel-fade col-3" data-bs-ride="carousel" style={{ width: "30%" }}>

                <div class="carousel-indicators">
                    <button style={{ backgroundColor: "black" }} type="button" data-bs-target="#carouselExampleFade1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button style={{ backgroundColor: "black" }} type="button" data-bs-target="#carouselExampleFade1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button style={{ backgroundColor: "black" }} type="button" data-bs-target="#carouselExampleFade1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>


                <div className="carousel-inner">
                    {
                        popCats.map((cat) => {
                            console.log(cat)
                                return (  
                                    <CatCard cat={cat} isFirst={popCats[0] === cat ? true : false} />
                                )
                        })
                    }

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }

    return <h2>rfehg</h2>
}
