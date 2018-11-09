import axios from 'axios'
import credentials from '../credentials'

function getImage (input) {
    return new Promise( function google_image_search(resolve, reject) { 
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${credentials.google.key}&cx=${credentials.google.cx}&q=${input}&searchType=image&imgSize=huge`)
        .then(function (response) {
            resolve(response);    
        })
        .catch(function (error) {
            reject(error);
        });
    })
}

export default getImage