const request = require('request');
const nameOFBreed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${nameOFBreed}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode);
   if(error){
       console.log("PAGE NOT FOUND");
   } 
 
  const data = JSON.parse(body);
  if(data.length === 0){
      console.log("BREED NOT FOUND");
  }
  console.log(data[0].description);
});
