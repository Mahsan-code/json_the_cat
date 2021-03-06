const request = require('request');

const fetchBreedDescription = function (breedName, callback) {

    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode);

        if (error) {
            callback("PAGE NOT FOUND", null);
        }

        const data = JSON.parse(body);
        // console.log(data);
        if (data.length === 0) {
            callback("BREED NOT FOUND", null);
        } else callback(null, data[0].description);
    });
};

module.exports = { fetchBreedDescription }