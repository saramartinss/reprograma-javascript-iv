import axios from 'axios'
import credentials from '../credentials'

function google_image_search(input) {
    return new Promise( function(resolve, reject) { 
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${credentials.google.key}&cx=${credentials.google.cx}&q=${input}&searchType=image&imgSize=huge`)
        .then(function (response) {
            if (response.data.items[0]) {
                resolve(response.data.items[0].link); 
            }
            else {
                reject("Nenhum resultado encontrado");
            }
        })
        .catch(function (error) {
            reject(error);
        });
    })
}

export default google_image_search