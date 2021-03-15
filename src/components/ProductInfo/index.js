import { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router";
import { Container, Grid, Box } from '@material-ui/core'
import ProductsContext from "../../context";
import './index.css';
import Recommendations from "../Recommendations";
import useFetch from "../../hooks/useFetch";

function ProductInfo() {

    const { listOfProducts } = useContext(ProductsContext);
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
                <Box className='img-container' style={{backgroundImage: `url(${posterUrl})`}} item xs={5} m={5}>
                </Box>
                <Box className='info-container' item xs={4} m={5}>
                    <p>Title: {`${productInfo.title}`}</p>
                    <p>Description: {`${productInfo.overview}`}</p>
                    <p>Price: {`${productInfo.vote_average}`}</p>
                </Box>
            </Grid>
            <Recommendations/>
        </Container>
    )
}

export default ProductInfo;