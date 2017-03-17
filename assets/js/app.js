var recipePuppyAPI = 'https://crossorigin.me/http://www.recipepuppy.com/api/'

function getDataFromAPI(ingredients, callback) {
  $.ajax({
  url: recipePuppyAPI + '?/i=' + ingredients,
  method: 'GET',
  headers: {
  'Access-Control-Allow-Origin': 'https://huntermotte.github.io'
  },
  success: function(response) {
  callback(response)
  } 
  })
}

function displayRecipes(data) {
  var resultElement = ''
  if (data.results) {
    data.results.forEach(function(result) {
      resultElement += '<p>' + '<a href=' + '"' + result.href + '"' + '>' + result.title + '</a></p>' + '<p>' + result.ingredients + '</p>' + '<p>' + result.href + '</p>'
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  $('.search-results').html(resultElement);
}

function watchSubmit() {
  $('.searchbar').submit(function(event) {
    event.preventDefault();
    var query = $(this).find('.query').val();
    getDataFromAPI(query, displayRecipes)
  });
}
    
$(function(){
  $('.searchbar').submit(function(event) {
    event.preventDefault();
    var query = $(this).find('.query').val();
    getDataFromAPI(query, displayRecipes)
  });
})