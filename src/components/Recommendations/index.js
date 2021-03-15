import { useParams } from "react-router";
import useFetch from '../../hooks/useFetch';
import { Grid } from '@material-ui/core';
import Product from '../Product'
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../context";


function Recommendations() {
    const [recommended, setRecommended] = useState([]);
    let { id } = useParams();
    const { response, query, setQuery } = useFetch(`movie/${id}/similar`, '');
    useEffect(() => {
        setQuery(`movie/${id}/similar`, '');
    }, [id]);
    
    const {listOfProducts} = useContext(ProductsContext);
    let shuffledListOfProducts = listOfProducts.sort(() => 0.5 - Math.random);
    shuffledListOfProducts= shuffledListOfProducts.filter(product => product.id != id);

    useEffect(() => {
        setRecommended(response.results);
    }, [response]);

    console.log(recommended);


    return (
        <div className="row">
            {recommended && recommended.length != 0 ?
                recommended.slice(0, 4).map((product) => (
                    <div className="col-3">
                        <Product key={product.id} id={product.id} title={product.title} description={""} price={product.vote_average} poster={product.poster_path}></Product>
                    </div>
                )) :
                shuffledListOfProducts.slice(0, 4).map((product) => (
                    <div className="col-3">
                        <Product key={product.id} id={product.id} title={product.title} description={""} price={product.vote_average} poster={product.poster_path}></Product>
                    </div>
                ))}
        </div>
    );
};

export default Recommendations;