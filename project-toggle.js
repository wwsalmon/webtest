$(function(){
  allProjects = $(".projects");
  allTabs = $("label.small-head");
  allProjects.fadeOut(0);
  changeTab()
});

$(".home-tabs input").on('change', function(){
  changeTab();
})

function changeTab(){
  category = $(".home-tabs input[name=home-tabs]:checked").attr("id");

  selectedProjects = $("." + category);
  fadeProjects = allProjects.not(selectedProjects);

  console.log(fadeProjects);

  fadeProjects.fadeOut(100);
  selectedProjects.fadeIn(200);

  console.log(category);

  allTabs.removeClass("selected");
  selectedTab = $("label.small-head[for='" + category + "']");
  selectedTab.addClass("selected");
};
