import '../styles/main.scss'
import credentials from './credentials'
import google_image_search from './resources/google'
import musicbrainz_artist_search from './resources/musicbrainz'

// manipulação do dom
const input = document.querySelector('input');
const div = document.getElementById('content');
const form = document.querySelector('form');


form.addEventListener("submit", function(e) {
    e.preventDefault()
    google_image_search(input.value, div);
})