function addBlogList(blogpage){
  var navbarCode = `
  <div class='blog-list'>

    <div class='small-links'><span>Recent Posts</span></div>

    <div class='blog-list-item'>
      <h3>New Website Design and wwsalmon.com History</h3>
      <div class='blog-list-subtitle'><span>Update - March 9, 2018</span></div>
    </div>

    <div class='blog-list-item'>
      <h3>"Lily": a 24 Hour Flash Film</h3>
      <div class='blog-list-subtitle'><span>Project - March 9, 2018</span></div>
    </div>

    <div class='blog-list-item'>
      <h3>Dell XPS 13 Review</h3>
      <div class='blog-list-subtitle'><span>Review - March 9, 2018</span></div>
    </div>

    <div class='blog-list-item'>
      <h3>CSS-Only Responsive Hamburger/Topbar Navigation</h3>
      <div class='blog-list-subtitle'><span>Tutorial - March 9, 2018</span></div>
    </div>

    <div class='blog-list-item'>
      <h3>Dell XPS 13 Review</h3>
      <div class='blog-list-subtitle'><span>Review - March 9, 2018</span></div>
    </div>

  </div>
  `
  if (blogpage == "home"){
    navbarCode = navbarCode.split("../").join('');
  }

  $(".blog-outer").append(navbarCode);
};
