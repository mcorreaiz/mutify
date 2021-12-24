import express from 'express';
import request from 'request';
import querystring from 'querystring';

const router = express.Router()

var tokenCookie = 'spotify_access_token';

router.get('/', (req, res, next) => {
    var access_token = req.cookies[tokenCookie]
    console.log(access_token)

    var options = {
        url: 'https://api.spotify.com/v1/recommendations?' + querystring.stringify({
            seed_artists: null,
            seed_genres: 'country',
            seed_tracks: null
        }),
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true,
    };
    var options = {
        url: 'https://api.spotify.com/v1/me/tracks',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true,
    };

    // use the access token to access the Spotify Web API
    request.get(options, function (error, response, body) {
        console.log(body);
        res.send(body)
    });
})

export default router;