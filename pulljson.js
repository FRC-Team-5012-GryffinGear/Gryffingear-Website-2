/*$.getJSON( "http://www.thebluealliance.com/api/v2/team/frc5012/events?X-TBA-App-Id=frc5012:website-data:1", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( ".json" );
});*/

$.ajax({
  url: 'http://www.thebluealliance.com/api/v2/team/frc5012/events?X-TBA-App-Id=frc5012:website-data:1',
  dataType: 'json',
  success: function (data, textStatus, jqXHR) {
    //the variable 'data' will have the JSON object
    // In your example, the following will work:
    alert(data.disclaimer);
   error: function(jqXHR, textStatus, errorThrown) {
     //Error handling code
     alert('Oops there was an error');
   }
  }
});