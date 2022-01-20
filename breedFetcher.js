const request = require('request');
const breedName = process.argv[2];


const fetchBreedDescription = (breedName, callback) => {
  const url = 'https://api.thecatapi.com/v1/breeds/' + `search?q=${breedName}`
  
  request(url, (error, responce, body) => {
    if(error) {
      // console.log("Request Failed due to bad URL, error Message: ", error.message);
      return callback(error);
    }
    let content = JSON.parse(body)
    let breedObj = content[0];
    if(!breedObj){
      // console.log(breedName + " is not a listed breed")

      return callback(breedName + " is not a listed breed");
    }
    if(content.length > 1){
      console.log(`your query returned ${content.length} results, here is info on the first`);
    }
    return callback(null, breedObj.description);
  });
}

module.exports = {fetchBreedDescription};
