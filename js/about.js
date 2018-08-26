aboutInit(true);

$(window).resize(function(){
  aboutInit(false);
});

function aboutInit(isFirst){
  $(".about-item-outer").each(function(){
    var aboutItem = $(this);
    var aboutButton = aboutItem.find(".about-item");
    var aboutContent = aboutItem.find(".about-more-info");

    aboutContent.css("height","unset");

    aboutItem.data("checked",false);
    aboutItem.data("contentHeight",0)

    if (isFirst){
      aboutContent.imagesLoaded(function(){
        var contentHeight = aboutContent.outerHeight();
        aboutItem.data("contentHeight",contentHeight);
        aboutContent.css("height","0");
      })
    }
    else{
      var contentHeight = aboutContent.outerHeight();
      aboutItem.data("contentHeight",contentHeight);
      aboutContent.css("height","0");
      console.log("ran");
    }

    aboutButton.click(function(){
      var aboutChecked = aboutItem.data("checked");
      aboutChecked = !aboutChecked;
      if (aboutChecked){
        aboutContent.css("height",aboutItem.data("contentHeight"));
        aboutButton.addClass("aboutChecked");
      }
      else{
        aboutContent.css("height","0");
        aboutButton.removeClass("aboutChecked");
      }
      aboutItem.data("checked",aboutChecked);
    });
  });
}
