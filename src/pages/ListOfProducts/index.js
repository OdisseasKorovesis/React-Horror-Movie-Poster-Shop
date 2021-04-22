import { Grid, Container } from '@material-ui/core'
import { useContext, useState } from 'react';
import Product from '../../components/Product';
import ProductsContext from '../../context';
import HomePageTitle from '../../components/HomepageTitle'
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

            <HomePageTitle className="title" />
            <div className="mb-5">
                <form className=" justify-content-center form-inline my-2 my-lg-0" onChange={onChange}>
                    <div className="search-container">
                        <input name="searchBar" className="form-control mr-sm-2" type="search" placeholder="Search for a movie title..." aria-label="Search" />
                    </div>

                </form>
            </div>
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