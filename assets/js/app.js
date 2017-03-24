var edamamAPI = 'https://api.edamam.com/search'

function getDataFromAPI(ingredients, callback) {
  var query = {
    app_id: 'beebcb5b',
    app_key: '4b9349dfde7418640003d84c1dcbba18',
    q: ingredients
  };
  $.getJSON(edamamAPI, query, callback);
}

function displayRecipes(data) {
  var resultElement = ''
  if (data.hits) {
    data.hits.forEach(function(hit) {
      resultElement += '<p class="page-header recipe">' + '<a href=' + '"' + hit.recipe.url + '"' + '>' + hit.recipe.label + '</a></p>' + '<img class="img-rounded" src=' + '"' + hit.recipe.image + '">'
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  $('.text-center').html(resultElement);
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