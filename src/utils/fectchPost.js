export function postReleases(id) {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "OAuth oauth_consumer_key=\"APfaGNnkOUxUvwAZCJcf\",oauth_token=\"UJqDiGUcdRSkyRATNccuHBocAetWApuPoWlnWxTT\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1604242507\",oauth_nonce=\"B6BVG5a9fJK\",oauth_version=\"1.0\",oauth_verifier=\"zWRjYdTQfi\",oauth_signature=\"IsAk%2BJWihSRnOeNc6dQj6dZU528%3D\"");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://api.discogs.com/users/vanyaxel/collection/folders/2347170/releases/${id}`, requestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error));
}
