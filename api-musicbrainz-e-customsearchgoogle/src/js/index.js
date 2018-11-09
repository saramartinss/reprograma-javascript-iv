import '../styles/main.scss'
import credentials from './credentials'
import getImage from './resources/google'
import musicbrainz_artist_search from './resources/musicbrainz'

// manipulação do dom
const input = document.querySelector('input');
const div = document.getElementById('content');
const form = document.querySelector('form');
const img = document.getElementById('bg')


form.addEventListener("submit", function(e) {
    e.preventDefault();
    getImage(input.value).then(function(data) {
        img.src = data.data.items[0].link;
        img.style.opacity = 1;
    })
})