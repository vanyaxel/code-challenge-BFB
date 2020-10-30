import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const key = process.env.REACT_APP_DISCOGS_KEY;
const secret = process.env.REACT_APP_DISCOGS_SECRET;

function useFetchData(page, searchWord) {

    const [results, setResults] = useState([]);

    useEffect(() => {
        Axios.get(`https://api.discogs.com/database/search?q=${searchWord}&key=${key}&secret=${secret}&page=${page}&per_page=${10}`)
            .then(res => setResults(res.data.results));

    }, [page, searchWord]);


    return results;

}

export default useFetchData;
