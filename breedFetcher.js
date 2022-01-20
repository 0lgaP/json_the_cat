const request = require('request');
const input = process.argv;
const breed = input[2]


const url = 'https://api.thecatapi.com/v1/breeds/' + `search?q=${breed}`

request(url, (error, responce, body) => {
  // console.log(error);
  if(error) {
    return console.log("Request Failed due to bad URL, error Message: ", error.message);
  }
  let content = JSON.parse(body)
  let breedKey = content[0];
  if(!breedKey){
    return console.log(breed + " is not a listed breed")
  }
  console.log(breedKey.description);
});
