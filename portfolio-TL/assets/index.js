 console.log("hello");
$(document).ready(function () {
   
$(window).on("scroll", function() {
    if ($(window).scrollTop()){
      $("#nb").addClass("sticky")
    }
    else{
      $("#nb").removeClass("sticky")
    }
  });
});
