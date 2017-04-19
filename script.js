console.log('script src');


$(document).ready(onReady);


function onReady() {
  console.log('in onReady');
  // request data from omdb on the jaws
  // when response comes back from the server
  // run success function which will log response
  gatherData();
}

function gatherData(){
  $('#clickme').on('click', function(){
  $.ajax({
    url: 'http://www.omdbapi.com/?t=happy+feet',
    success: function(response) {
      console.log('this is the response ->', response);
      // cLog('movie title ->', response.Title);
      // cL'movie poster ->', response.Poster);
      $('#movie-holder').append('<div class="movie-title" id="title">' + response.Title + '</div>');
      $('#movie-holder').prepend('<div id="theDiv">' + '</div>').prepend($('<img>',{id:'imgFeet',src:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyNTkxMjUwMV5BMl5BanBnXkFtZTcwMDQ2NTU0MQ@@._V1_SX300.jpg"}));
      $('#movie-ratings').prepend('<div class="movie-ratings">' + 'Actors: ' + response.Actors + '</div>');
      $('#movie-ratings').prepend('<div class="movie-ratings">' + 'BoxOffice numbers: ' + response.BoxOffice + '</div>');
      $('#movie-ratings').prepend('<div class="movie-ratings">' + 'Country: ' + response.Country + '</div>');
      $('#movie-ratings').prepend('<div class="movie-ratings">' + 'Plot: ' + response.Plot + '</div>');

    }//end success function
  });// end $.ajax
            });//end line 16 clickme
          } //end Ajax call



$('body').click(function(){
    $("p").css({
        "color":"turqoise",
        "background-color":"#4679BD",
        "font-family":"Arial",
        "font-size":"20px",
        "padding":"5px",
        "margin":"5px"
    });
  }
);//End Click me

  // error: function(response) {
    //   console.log('error case: response ->', response);
//End Click me
//   function gatherOther(){
//     $('#clickme').on('click', function(){
//       $.ajax({
//         url: 'http://www.omdbapi.com/?t=happy+feet',
//         success: function(response) {
// //           var text = '{"employees" : [' +
// // '{ "Year":"2006"},' + '{"Rated":"PG"},' + '{"Released":"17 Nov 2006"},' + '{"Runtime":"108 min"},' + '{"Genre":"Animation"},' + '{"Comedy", "Family","Director":"George Miller"},' +  '{"Warren Coleman", "Judy Morris"},' + '{"Writer":"George Miller", "John Collee", "Judy Morris", "Warren Coleman"},' + '{"Actors":"Carlos Alazraqui", "Lombardo Boyar", "Jeffrey Garcia", "Johnny A. Sanchez"},' + '{"Plot":"Into the world of the Emperor Penguins, who find their soul mates through song, a penguin is born who cannot sing. But he can tap dance something fierce!"},' + '{"Language":"English"},' + '{"Country":"USA"},' + '{"Australia","Awards":"Won 1 Oscar. Another 18 wins & 24 nominations."},' + '{"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyNTkxMjUwMV5BMl5BanBnXkFtZTcwMDQ2NTU0MQ@@._V1_SX300.jpg"},' + '{"Ratings":"{"Source":"Internet Movie Database","Value":"6.5/10"},' + '{"Source":"Rotten Tomatoes","Value":"75%"},' + '{"Source":"Metacritic","Value":"77/100"},' + '{"Metascore":"77"},' + '{"imdbRating":"6.5"},' + '{"imdbVotes":"139,805"},' + '{"imdbID":"tt0366548"},' + '{"Type":"movie"},' + '{"DVD":"27 Mar 2007"},' + '{"BoxOffice":"$197,800,000.00"},' + '{"Production":"Warner Bros. Pictures"},' +'{"Website":"http://www.happyfeetmovie.com/"},' + '{"Response":"True" },' + ']}';
// //           var obj = JSON.parse(text);
// //           console.log(obj);
//       $('#movie-holder').prepend('<div class="movie-ratings">' + response.Ratings[0] + '</div>');
//           }
//
//         });
//     });
//   }//End gatherOther
//end gather data script
