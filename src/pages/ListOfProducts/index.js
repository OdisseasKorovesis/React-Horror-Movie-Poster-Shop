import { Grid, Container } from '@material-ui/core'
import { useContext, useState } from 'react';
import Product from '../../components/Product';
import ProductsContext from '../../context';
import './index.css';



function ListOfProducts() {

    const { listOfProducts, cartProducts, addToCart, removeFromCart } = useContext(ProductsContext);

    const [displayedProducts, setDisplayedProducts] = useState(listOfProducts);
    
    const onChange = (event) => {
        let keyword = event.target.value.toLowerCase();
        setDisplayedProducts(listOfProducts.filter(product => product.title.toLowerCase().includes(keyword)));
    };

    return (
        <Container className="container" fixed>

            <form class="form-inline my-2 my-lg-0" onChange={onChange}>
                <input name="searchBar" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <Grid container spacing={3}>
                {displayedProducts.map((product, index) => (
                    <Grid item xs={4}>
                        <Product key={product.id} id={product.id} title={product.title} description={product.overview} price={product.vote_average} poster={product.poster_path} addToCart={addToCart}></Product>
                    </Grid>
                ))}
            </Grid>
        </Container>

    );
}

export default ListOfProducts;