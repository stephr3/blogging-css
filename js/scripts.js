$(function () {
  $(".btn-danger").click(function(){
    $(".post").addClass("dark-background");
  });

  $(".btn-primary").click(function(){
    $(".post").removeClass("dark-background");
  });
});
