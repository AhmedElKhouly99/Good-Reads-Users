import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import CatCard from './CatCard';

export default function CatCard({ cat, isFirst }) {
    const [category, setCat] = useState(cat)
    if (isFirst) {
        return (
            <div className="carousel-item active"  style={{ width: "100%", marginBottom:'2%' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {category.name}
                            </Typography>
                            {/* <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    }

    return (
        <div className="carousel-item"  style={{ width: "100%", marginBottom:'2%' }}>
            {/* <div className="card" style={{ width: "100%", marginBottom:"6%" }}>
                    <img src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            {cat.name}
                        </p>
                    </div>
                </div> */}
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {category.name}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
