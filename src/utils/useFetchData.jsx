import { useEffect, useState } from 'react';

const api = process.env.REACT_APP_DISCOGS_URL;
const key = process.env.REACT_APP_DISCOGS_KEY;
const secret = process.env.REACT_APP_DISCOGS_SECRET;
const user = process.env.REACT_APP_DISCOGS_USER;

export function useFetchResults(page, artist, album) {

    const [results, setResults] = useState([]);

    let url = `${api}/database/search?release_title=${album}&artist=${artist}&type=release&key=${key}&secret=${secret}&page=${page}&per_page=${10}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setResults(data.results));

    }, [page, artist, album]);

    return results;
}



export function useFetchCollection() {

    const [collection, setCollection] = useState([]);

    useEffect(() => {
        fetch(`${api}${user}/collection/folders/0/releases`)
            .then(res => res.json())
            .then(res => setCollection(res.releases));
    }, []);

    return collection;
}