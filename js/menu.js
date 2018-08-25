var clicked = false;
$(".topbar").click(function(){
  $(".sidebar").toggleClass("show-sidebar");
  clicked = !clicked
  if (clicked == true){
    $(".topbar-button span").html("back");
  }
  else{
    $(".topbar-button span").html("menu");
  }
});
