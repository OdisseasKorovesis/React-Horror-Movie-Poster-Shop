import { Grid, Container } from '@material-ui/core'
import {useContext} from 'react';
import CartProduct from '../../components/CartProduct';
import CartSummary from '../../components/CartSummary';
import Product from '../../components/Product';
import ProductsContext from '../../context';

function Cart() {

    const {listOfProducts, cartProducts, addToCart, removeFromCart, changeQuantity} = useContext(ProductsContext);

    return (
        <Container className="container" fixed>
            <Grid container spacing={3}>
                <CartSummary item xs={3}/>
                <Grid item xs={9} container spacing={3}>
                {cartProducts.map((product) => (
                    <Grid item xs={4}>
                        <CartProduct key={product.id} id={product.id} title={product.title} description={product.description} price={product.vote_average} poster={product.poster_path} removeFromCart={removeFromCart} changeQuantity={changeQuantity}></CartProduct>
                    </Grid>
                ))}
            </Grid>
            </Grid>
            
        </Container>

    );
}

export default Cart;