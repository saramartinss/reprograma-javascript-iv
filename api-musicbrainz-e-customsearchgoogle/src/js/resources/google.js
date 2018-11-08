import axios from 'axios'
import credentials from '../credentials'

function google_image_search(input, div) { 
    axios.get(`https://www.googleapis.com/customsearch/v1?key=${credentials.google.key}&cx=${credentials.google.cx}&q=${input}&searchType=image&imgSize=huge`)
        .then(function (response) {
            console.log('sucesso', response.data);
        })
        .catch(function (error) {
            console.log('erro', error);
        });
}

export default google_image_search