const express = require('express')
const app = express()
const pug = require('pug');
var pokedata = JSON.parse(require('fs').readFileSync('pokemon.json', 'utf8'));

app.get('/', function (req, res) {
  res.render('index.pug');
})

app.get('/pokemon', function (req, res) {
  var id = capitalizeFirstLetter(req.param('id'));
  var answer = pokemonData(id);
  res.send(answer);
})

function pokemonData(id) {
  var answer = 'Invalid pokemon.';

  for (var i =0; i < pokedata.length; i++) {
    if(pokedata[i]['Name'] == id) {
          answer = pokedata[i];
    }
  }

  return answer;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


