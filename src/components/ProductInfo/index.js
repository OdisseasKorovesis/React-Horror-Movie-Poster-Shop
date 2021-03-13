import { useContext } from "react";
import { useParams } from "react-router";
import { Container, Grid, Box } from '@material-ui/core'
import ProductsContext from "../../context";
import './index.css';

function ProductInfo() {

    const { listOfProducts } = useContext(ProductsContext);
    let { id } = useParams();
    const productInfo = listOfProducts.find((product) => product.id == id);
    const posterUrl = `https://image.tmdb.org/t/p/original/${productInfo.poster_path}`;

    return (
        <Container className="container" fixed>
            <Grid container spacing={2}>
                <Box className='img-container' style={{backgroundImage: `url(${posterUrl})`}} item xs={5} m={5}>
                </Box>
                <Box className='info-container' item xs={4} m={5}>
                    <p>Title: {`${productInfo.title}`}</p>
                    <p>Description: {`${productInfo.overview}`}</p>
                    <p>Price: {`${productInfo.vote_average}`}</p>
                </Box>
            </Grid>
        </Container>
    )
}

export default ProductInfo;