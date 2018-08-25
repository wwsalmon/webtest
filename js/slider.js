var animTime = 200;

$(function(){
  $(".slider").each(function(){
    var container = $(this);
    var slides = container.find(".slider-img");
    var sliderMain = container.find(".slider-main");
    var slideHeights = [];

    slides.each(function(){
      slideHeights.push($(this).height());
      $(this).addClass("maxHeight");
    });
    var maxHeight = Math.max.apply(null,slideHeights);
    sliderMain.css("height",maxHeight);

    sliderMain.append(`
      <div class='slider-nav slider-prev'>&lt;</div>
      <div class='slider-nav slider-next'>&gt;</div>
    `)

    container.data("slide",0);
    slides.fadeOut(animTime);
    changeSlide(0,$(this));
  });

  $(".slider-next").click(function(){
    changeSlide(1, $(this));
  });

  $(".slider-prev").click(function(){
    changeSlide(-1, $(this));
  });

  $(".slider-select").click(function(){
    goToSlide($(this).index(), $(this));
  });
});

function goToSlide(slideNum,el){
  var container = el.closest(".slider");
  var n = slideNum - container.data("slide");
  changeSlide(n,el);
}

function changeSlide(n,el){
  var container = el.closest(".slider");
  var slides = container.find(".slider-img");
  var selectorContainer = container.find(".slider-selector-container");
  var selectors = container.find(".slider-select");

  var slide = container.data("slide");

  slides.eq(slide).fadeOut(animTime);
  selectors.eq(slide).removeClass("slide-selected");

  slide += n;
  if (slide > slides.length - 1) {slide = 0;}
  if (slide < 0) {slide = slides.length - 1}

  slides.eq(slide).fadeIn(animTime);
  selectors.eq(slide).addClass("slide-selected");

  container.data("slide",slide);

  selContLeft = selectors.eq(slide).position().left;
  selContWidth = selectorContainer.width();
  selWidth = selectors.eq(slide).width();

  selContScroll = selContLeft - (selContWidth / 2) + (selWidth / 2); 

  selectorContainer.animate({scrollLeft: selContScroll}, animTime);

}
