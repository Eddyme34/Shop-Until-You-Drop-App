// A static server using Node and Express
const express = require("express");
const fetch = require('node-fetch');
const app = express();

// app.set('trust proxy', true);

app.use(function (request, response, next) {
  console.log("got request",request.url);
  next();
})




app.get('/query', async function (request, response) {
  let sep = request.url.split("&");
  let key = sep[0].split("=");
  let uni = sep[1].split("=");
  console.log(key[key.length-1])
  console.log(uni[uni.length-1]);
  await fetch("https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=" + key[key.length-1] +'&school.name=' + uni[uni.length-1] + '&fields=2018.cost,school.city,school.state').then(res => res.json())
    .then(json => {
                    console.log(json)
                    response.json(json)});
})


app.get('/list', async function (request,response){
  console.log('got get request for uni list');
  await fetch("https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=BZacuXZnENzSYeVWjDoAHxi7cMpEilN4U8BtvRP0&school.state=CA&school.degrees_awarded.predominant=3&fields=school.name&per_page=99")
  .then(res => res.json())
  .then(json => {  
           console.log(json);});
})

// listen for requests :)
const listener = app.listen(3000, () => {
  console.log("The static server is listening on port " + listener.address().port);
});
