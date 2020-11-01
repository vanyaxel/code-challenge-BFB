/* import { useEffect, useState } from 'react';
import Axios from 'axios';

const key = process.env.REACT_APP_DISCOGS_KEY;
const secret = process.env.REACT_APP_DISCOGS_SECRET;

export function useFetchData(page, artist, album) {

    const [results, setResults] = useState([]);

    let url = `https://api.discogs.com/database/search?release_title=${album}&artist=${artist}&type=release&key=${key}&secret=${secret}&page=${page}&per_page=${10}`;

    useEffect(() => {
        Axios.get(url)
            .then(res => {
                setResults(res.data.results);
                console.log(res);
            });

    }, [page, artist, album]);

    return results;
}

export function useFetchCollection() {

    const [collection, setCollection] = useState([]);

    useEffect(() => {
        Axios.get(`https://api.discogs.com/users/vanyaxel/collection/folders/0/releases`)
            .then(res => {
                setCollection(res.data.releases);

            });
    }, []);

    return collection;
}
 */
import { useEffect, useState } from 'react';
import Axios from 'axios';

const key = process.env.REACT_APP_DISCOGS_KEY;
const secret = process.env.REACT_APP_DISCOGS_SECRET;

export function useFetchData(page, artist, album) {

    const [results, setResults] = useState([]);

    let url = `https://api.discogs.com/database/search?release_title=${album}&artist=${artist}&type=release&key=${key}&secret=${secret}&page=${page}&per_page=${10}`;

    useEffect(() => {
        Axios.get(url)
            .then(res => {
                setResults(res.data.results);
                console.log(res);
            });

    }, [page, artist, album]);

    return results;
}

export function useFetchCollection() {

    const [collection, setCollection] = useState([]);

    useEffect(() => {
        Axios.get(`https://api.discogs.com/users/vanyaxel/collection/folders/0/releases`)
            .then(res => {
                setCollection(res.data.releases);

            });
    }, []);

    return collection;
}
