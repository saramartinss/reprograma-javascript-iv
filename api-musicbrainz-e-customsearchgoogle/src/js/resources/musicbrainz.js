import axios from 'axios'

function musicbrainz_artist_search() {
    axios.get('/user?ID=12345')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default musicbrainz_artist_search


// api : http://musicbrainz.org/ws/2/artist/?query=nirvana&fmt=json