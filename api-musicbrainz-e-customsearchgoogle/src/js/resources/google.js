import axios from 'axios'
import credentials from '../credentials'

function google_image_search(input, img) { 
    axios.get(`https://www.googleapis.com/customsearch/v1?key=${credentials.google.key}&cx=${credentials.google.cx}&q=${input}&searchType=image&imgSize=huge`)
        .then(function (response) {
            img.src = response.data.items[0].link;
            img.style.opacity = 1;            
        })
        .catch(function (error) {
            console.log('erro', error);
        });
}

export default google_image_search