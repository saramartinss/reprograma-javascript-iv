import '../styles/main.scss'
import credentials from './credentials'
import google_image_search from './resources/google'
import musicbrainz_artist_search from './resources/musicbrainz';

// manipulação do dom
const form = document.querySelector('form');
const input = form.querySelector('input');
const div = document.getElementById('content');
const img = document.getElementById('bg');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    img.style.opacity = 0;
    div.innerHTML = `<p>Carregando...</p>`
    musicbrainz_artist_search(input.value)
    .then(function(mb_data) {
        google_image_search(mb_data.name)
        .then (function (g_data) {
            div.innerHTML = "";
            
            const h1 = document.createElement("h1");
            h1.textContent = mb_data.name;
            const h3 = document.createElement("h3");
            h3.textContent = mb_data.life_span;
            const p = document.createElement("p");
            p.textContent = mb_data.musicbrainz_artist_search;

            div.appendChild(h1);
            div.appendChild(h3);
            div.appendChild(p);

            img.src = g_data;
        })
        .catch (function (error) {
            console.error("google", error)
            const error_msg = error === "Nenhum resultado encontrado" ? error : "Erro de conexão";
            div.innerHTML = `<p>${error_msg}</p>`
        })
    })
    .catch(function(error) {
        console.error(error);
        const error_msg = error === "Nenhum resultado encontrado" ? error : "Erro de conexão";
        div.innerHTML = `<p>${error_msg}</p>`;
    })    
})