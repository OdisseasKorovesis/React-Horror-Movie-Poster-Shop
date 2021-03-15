import { useState, useEffect } from 'react';

function useFetch(url, params) {
    const [query, setQuery] = useState(url);
    const [response, setResponse] = useState({});

    const apiKey = '382f7f7f00233c7b0b8ec7ca0042ea67';
    const domain = 'https://api.themoviedb.org/3';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }


    useEffect(() => {
        const getResponse = async () => {
            try {
                console.log(query);
                console.log(`${domain}/${query}?api_key=${apiKey}&${params}`);
                const response = await fetch(`${domain}/${query}?api_key=${apiKey}&${params}`, {
                    ...options
                })
                const results = await response.json();
                setResponse(results);
            } catch (error) {
                console.log(error);
            }
        };

        getResponse();
    }, [query])

    return {response, query, setQuery};
}

export default useFetch;