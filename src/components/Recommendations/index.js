import { useParams } from "react-router";
import useFetch from '../../hooks/useFetch';
import { Grid } from '@material-ui/core';
import Product from '../Product'
import { useEffect, useState } from "react";


function Recommendations() {

    let { id } = useParams();
    const { response, query, setQuery } = useFetch(`movie/${id}/similar`, '');
    const [recommended, setRecommended] = useState([]);
    
    useEffect(() => {
        setRecommended(response.results);
    }, [response]);
    

    return (
        <div className="row">
            {recommended && recommended.slice(0, 4).map((product) => (
                <div className="col-3">
                    <Product key={product.id} id={product.id} title={product.title} description={""} price={product.vote_average} poster={product.poster_path}></Product>
                </div>
            ))}
        </div>
    );
};

export default Recommendations;