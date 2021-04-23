import { Grid, Container } from '@material-ui/core'
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import CartProduct from '../../components/CartProduct';
import CartSummary from '../../components/CartSummary';
import Product from '../../components/Product';
import ProductsContext from '../../context';
import './index.css'

function Cart() {

    const {listOfProducts, cartProducts, addToCart, removeFromCart, changeQuantity} = useContext(ProductsContext);

    return (
        <Container className="container" fixed>
            <Grid container spacing={3}>
                <CartSummary item xs={3}/>
                <Grid item xs={9} container spacing={3}>
                {cartProducts.length === 0 ? 
                <h2 className="empty-cart-text ml-5 text-white">Your cart is empty, almost like... a haunted house! 
                <br/>
                Try clicking &nbsp;
                <Link className="link-to-home" to="/"><span className="link-to-home">here</span></Link>
                &nbsp; and adding some products.
                </h2>
                : cartProducts.map((product) => (
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