import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, TextField } from '@material-ui/core'
import './index.css'
import { useState, useEffect } from 'react';

function CartProduct(props) {

    const [productCount, setProductCount] = useState(1);

    const reduceQuantity = () => {
        setProductCount((count) => count - 1);
        
    }

    const increaseQuantity = () => {
        setProductCount((count) => count + 1);
    }

    useEffect(() => {
        props.changeQuantity(props.id, productCount);
    }, [productCount])
    
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
                        <span class="poster-title">{props.title}</span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Total price: <span>{props.price * productCount} €</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                
                <Button size="small" variant='contained' color="secondary" onClick={reduceQuantity} disabled={!(productCount - 1)}>
                    -
                </Button>
                <TextField value={productCount} className='quantity-input' size='small' id="filled-basic" variant="filled" />
                <Button p={0} className='quantity-btn' size="small" variant='contained' color="primary" onClick={increaseQuantity} disabled={productCount >= 5}>
                    +
                </Button>
                <Button className='quantity-btn' size="small" color="primary" onClick={() => props.removeFromCart(`${props.id}`)}>
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
}

export default CartProduct;