var recipePuppyAPI = 'https://cors-anywhere.github.com/http://www.recipepuppy.com/api/'

function getDataFromAPI(ingredients, callback) {
  var query = {
    i: ingredients
  }
  $.getJSON(recipePuppyAPI, query, callback)
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