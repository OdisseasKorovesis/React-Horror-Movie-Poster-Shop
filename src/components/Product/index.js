import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function Product(props) {

    const [productCount, setProductCount] = useState(1);

    const posterUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;

    const getDescriptionText = () => {


        let description = props.description.length > 145 ? props.description.substring(0, 145) : props.description;
        description = description.length !== 200 ? description.substring(0, Math.min(description.length, description.lastIndexOf(" "))) + " . . ." : description;
        return description.trim();
    }


    return (
        <div className="wrapper">
            <Card className='card-root'>
                <CardActionArea>
                    <CardMedia
                        className='product-image'
                        image={posterUrl}
                        title='Product Image'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <p className="product-title">{props.title}</p>
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            {getDescriptionText()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Total price: <span>{props.price * productCount}€</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div className='action-area'>
                    <CardActions>
                        <Link to={`/React-Horror-Movie-Poster-Shop/product/${props.id}`}>
                            <Button size="small" color="secondary">
                                <span className="details-btn">View Details</span>
                            </Button>
                        </Link>
                        <Button className='add-btn' size="small" color="primary" onClick={() => props.addToCart(`${props.id}`)}>
                            <span className="add-btn">Add to Cart</span>
                        </Button>
                    </CardActions>
                </div>

            </Card>
        </div>

    );
}

export default Product;