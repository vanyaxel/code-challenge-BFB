import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/styles.css';

const api = process.env.REACT_APP_DISCOGS_URL;
const key = process.env.REACT_APP_DISCOGS_KEY;
const secret = process.env.REACT_APP_DISCOGS_SECRET;
const user = process.env.REACT_APP_DISCOGS_USER;
const token = process.env.REACT_APP_DISCOGS_TOKEN;
const verifier = process.env.REACT_APP_DISCOGS_VERIFIER;
let timeStamp = Date.now();

export function postReleases(id) {

    let myHeaders = new Headers();

    myHeaders.append("Authorization", `OAuth oauth_consumer_key=${key},oauth_token=${token},oauth_signature_method=HMAC-SHA1,oauth_timestamp=${timeStamp},oauth_nonce=B6BVG5a9fJK,oauth_version=1.0,oauth_verifier=${verifier},oauth_signature=${secret}&`);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`${api}${user}/collection/folders/2347170/releases/${id}`, requestOptions)
        .then(response => {
            response.text();
            toast.warning('¡Se ha agregado a la colección!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: 'toastColor'
            });
        })
        .catch(error => {
            console.log('error', error);
            toast.warning('Lo lamento, no se agrego', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: 'toastColor'
            });
        });
}
