$("#playlist").hide();
$("#music-buttons").on("click", "button", function(){
  console.log($(this).attr("data-id"))
  var playlistId = $(this).attr("data-id");
  var playlistUrl = "https://open.spotify.com/embed/playlist/" + playlistId
  console.log(playlistUrl)
  $("#playlist").attr("src",playlistUrl);
  $("#playlist").show();
});