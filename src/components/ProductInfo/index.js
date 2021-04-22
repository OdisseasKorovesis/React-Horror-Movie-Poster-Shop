import { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router";
import { Container, Grid, Box, Button } from '@material-ui/core'
import ProductsContext from "../../context";
import './index.css';
import Recommendations from "../Recommendations";
import useFetch from "../../hooks/useFetch";
import { Euro } from "@material-ui/icons";

function ProductInfo() {

    const { listOfProducts, cartProducts, addToCart, removeFromCart } = useContext(ProductsContext);

    let { id } = useParams();
    
    const {response, query, setQuery} = useFetch(`movie/${id}`, '');

    useEffect(() => {
        setQuery(`movie/${id}`, '');
    }, [id])

    
    const productInfo = response;
    
    const posterUrl = `https://image.tmdb.org/t/p/original/${productInfo.poster_path}`;

    return (
        <Container className="container" fixed>
            <Grid container spacing={2}>
                <Box className='img-container border border-white' style={{backgroundImage: `url(${posterUrl})`}} item xs={5} m={5}>
                </Box>
                <Box className='info-container text-white' item xs={4} m={5}>
                    <p className="movie-title">{`${productInfo.title}`}</p>
                    <p>{`${productInfo.overview}`}</p>
                    <p>Price: {`${productInfo.vote_average}€`}</p>
                    <button className="btn add-button" onClick={() => addToCart(id)}>Add to cart</button>
                </Box>
                
            </Grid>
            <Recommendations/>
        </Container>
    )
}

export default ProductInfo;