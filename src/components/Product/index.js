import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import './index.css'

function Product(props) {

    const [productCount, setProductCount] = useState(1);

    const posterUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;

    return (
        <Card className='card-root'>
            <CardActionArea>
                <CardMedia
                    className='product-image'
                    image={posterUrl}
                    title='Product Image'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Total price: <span>{props.price * productCount}</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className='action-area'>
                <CardActions>
                    <Link to={`/product/${props.id}`}>
                        <Button className='quantity-btn' size="small" color="secondary">
                            View Details
                        </Button>
                    </Link>
                    <Button className='quantity-btn' size="small" color="primary" onClick={() => props.addToCart(`${props.id}`)}>
                        Add to cart
                    </Button>
                </CardActions>
            </div>

        </Card>
    );
}

export default Product;