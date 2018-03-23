//a composite score  that is used in the jquerylogic later//
var compScore = function(art, leftright, career, affinity) {
  return art + leftright + career + affinity
}

$(document).ready(function(){
//declares variables and passes in user values as int's//
  $("#survey").submit(function (event) {
    var userArt = parseInt($("#art").val());
    var userLeftRight = parseInt($("#leftright").val());
    var userCareer = parseInt($("#career").val());
    var userLike = parseInt($("#like").val());
    var userAffinity = parseInt($("#affinity").val());
    var userScore = compScore(userArt, userLeftRight, userCareer, userAffinity)

    if (userLike === 1) {
      if (userScore >= 80) {
        $("#outputTrack").text("C#/.NET");
      } else {
        $("#outputName").text("CSS/React");
    } else if (userLike === 2) {
        if (userScore >= 80) {
          $("#outputTrack").text("Ruby/Rails");
        } else {
          $("#outputTrack").text("C");
    } else
      if (userScore >= 50) {
        $("#outputTrack").text("Java/Android");
      } else {
        $("#outputTrack").text("CSS/React");
      }
    }
    }

    event.preventDefault();
  });






//shows modal upon click submit//
$("#submit").click(function(){
    $("#myModal").css("display", "block");
  });

  $(".close").click(function(){
    $("#myModal").css("display", "none");
    location.reload();
  });
