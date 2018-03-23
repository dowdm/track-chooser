$(document).ready(function(){
//declares variables and passes in user values as int's or sets value//
  $("#survey").submit(function (event) {
    var userArt = parseInt($("#art").val());
    var userLeftRight = parseInt($("#leftright").val());
    var userCareer = parseInt($("#career").val());
    var userLike = parseInt($("#like").val());
    var userAffinity = parseInt($("#affinity").val());
    var userName = $("#name").val();
    var perfect = " is perfect for you, "
//logic for determining course//
    if (userLike === 1 && userAffinity === 3) {
      $("#outputTrack").text("C#/.NET");
    } else if (userLike === 1 && userAffinity !== 3) {
      $("#outputTrack").text("CSS/React");
    } else if (userLike === 2 && userAffinity === 3) {
      $("#outputTrack").text("Ruby/Rails");
    } else if (userLike === 2 && userAffinity === 1) {
      $("#outputTrack").text("CSS/React");
    } else if (userLike === 3 && userArt === 1) {
      $("#outputTrack").text("CSS/React");
    } else {
      $("#outputTrack").text("Java/Android");
    }
// extra time features: username and fading//

    $("#outputTrack").append(perfect);
    $("#outputTrack").append(userName);
    $("#submit").click(function() {
        $("#outputTrack").fadeToggle("#outputTrack");
    });
    event.preventDefault();
  });
});
