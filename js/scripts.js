$(document).ready(function(){
//declares variables and passes in user values as int's//
  $("#survey").submit(function (event) {
    var userArt = parseInt($("#art").val());
    var userLeftRight = parseInt($("#leftright").val());
    var userCareer = parseInt($("#career").val());
    var userLike = parseInt($("#like").val());
    var userAffinity = parseInt($("#affinity").val());
    var userName = $("#name").val();

//logic for determining course//
  // $("#nameprint").text(userName);

    if (userLike === 1 && userAffinity === 3) {
      $("#outputTrack").text("C#/.NET");
    } else if (userLike === 1 && userAffinity !== 3) {
      $("#outputTrack").text("C#/.NET");
    } else if (userLike === 2 && userAffinity === 3) {
      $("#outputTrack").text("Ruby/Rails");
    } else if (userLike === 2 && userAffinity === 1) {
      $("#outputTrack").text("CSS/React");
    } else if (userLike === 3 && userArt === 1) {
      $("#outputTrack").text("CSS/React");
    } else {
      $("#outputTrack").text("Java/Android");
    }

    event.preventDefault();
  });
});
