console.log('script src');


$(document).ready(onReady);


function onReady() {
  console.log('in onReady');
  // request data from omdb on the jaws
  // when response comes back from the server
  // run success function which will log response
  gatherData();
  changePage();
  posterGrow();
}

function gatherData(){
  $('#clickme').on('click', function(){
  $.ajax({
    url: 'http://www.omdbapi.com/?t=happy+feet',
    success: function(response) {
      console.log('this is the response ->', response);
      $('#movie-ratings').prepend('<div class="movie-ratings" id="plot">' + 'Actors: ' + response.Actors + '</div>');
      $('#movie-ratings').prepend('<div class="movie-ratings" id="numbers">' + 'BoxOffice numbers: ' + response.BoxOffice + '</div>');
      $('#movie-ratings').prepend('<div class="movie-ratings" id="plot">' + 'Country: ' + response.Country + '</div>');
      $('#movie-ratings').prepend('<div class="movie-ratings" id="plotty">' + '<p>' + 'Plot: ' + response.Plot + '</p>' + '</div>');
      $('#movie-ratings').css({'color':'#00FFFF'});
      console.log('this is gather data ', gatherData);
      $('#numbers').toggle( "scale", 'content' );

    }//end success function
  });// end $.ajax
            });//end line 16 clickme
          } //end Ajax call

function posterGrow(){
  $('#poster').on('click', function(){
    $.ajax({
      url: 'http://www.omdbapi.com/?t=happy+feet',
      success: function(response) {
        $('#movie-holder').prepend('<div id="theDiv" class="test">' + '</div>').prepend($('<img>',{id:'imgFeet',src:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyNTkxMjUwMV5BMl5BanBnXkFtZTcwMDQ2NTU0MQ@@._V1_SX300.jpg"}));

        var transforms = [
            'skewY(-45deg) scale(.66)',
            'translate(20px) skewY(-45deg) scale(.66)',
            'translate(150px,50px) scale(1.5,1)',
            'translate(280px) skewY(45deg) scale(.66)',
            'translate(300px) skewY(45deg) scale(.66)'
          ],
          $squares = $('.test').each(function(i) {
            $(this).css({ transform: transforms[i] });
          });
        $('#movie-holder').mouseenter(function() {
          $squares.each(function(i) {
            $(this).animate({ transform: transforms[i+1] });
          });
        }).mouseleave(function() {
          $squares.each(function(i) {
            $(this).animate({ transform: transforms[i] });
          });
        });



        // $('#movie-holder').animate({transform: 'rotate(135deg)'});
        // $('#movie-holder').toggle('clip', 10000);
        // $('#theDiv').on("mouseover", function() {
        //  $(this).animate({height: '+=20px'},500);
      //  $('#theDiv').on("mouseout", function() {
      //          $(this).animate({height: '-=20px'},500);
      //  });

      }
    });
  });
}


function changePage(){
$('#setCssProperties').on('click', function(){
$('body').css({'background-image': "url('firey.gif')"});
console.log('this is changePage', changePage);
$(this).effect( "pulsate", {times:5}, 5000 );
$(this).effect( "explode", {times:5}, 2000 );

      }); //end 2nd-inner function
  } //end change page
//End Click me


//   }//End gatherOther
//end gather data script
