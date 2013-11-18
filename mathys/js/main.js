$(document).ready(function()
{

  $.getJSON("data/data.json", function(data) {
      $.each( data, function( index, image) {
        $('#images').append('<li class="thumbnail"><a href="' + image.big + '"><img alt="' + image.title + '" src="' + image.small + '"></img></a></li>');
      });  
  });
});


