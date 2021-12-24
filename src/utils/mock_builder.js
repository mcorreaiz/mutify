const Builder = {
    spotifyItem: ({
        name = "TestName",
        spotify_url = "test.com/123456abcdef",
        href = "api.spotify.com/test",
        id = "123456abcdef",
        uri = "spotify:test:123456abcdef"
    } = {}) => ({
        name,
        spotify_url,
        href,
        id,
        uri
    }),
    trackFeatures: ({
        acousticness = 0.5,
        danceability = 0.5,
        energy = 0.5,
        instrumentalness = 0.5,
        liveness = 0.5,
        loudness = 0.5,
        speechiness = 0.5,
        valence = 0.5
    } = {}) => ({
        acousticness,
        danceability,
        energy,
        instrumentalness,
        liveness,
        loudness,
        speechiness,
        valence
    }),
    track: ({
        duration_ms = 12345,
        artists = [Builder.spotifyItem({ name: "TestArtist" })],
        album = Builder.spotifyItem({ name: "TestAlbum" }),
        popularity = 100,
        features = Builder.trackFeatures()
    } = {}) => ({
        duration_ms,
        artists,
        album,
        popularity,
        features
    }),
}

export default Builder;