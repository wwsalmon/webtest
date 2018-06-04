function addNavbar(page){
  var navbarCode = `
  <script>
  $('.hamburger').click(function(){
    $('.navbar').toggleClass('open');
  })
  </script>
  <div class='hamburger'><span><i class="fa fa-bars"></i></span></div>
  <div class='navbar'>
    <div class='navbar-item' style='opacity: 1.0;'><a href='../index.html'><span style='color: #546e8d; font-weight: 600;'>Samson Zhang</span></a></div>
    <div class='navbar-item navbar-item-dropdown'><span>Case Studies</span>
    </div>
    <div class='navbar-dropdown'>
      <div class='navbar-dropdown-arrow-outer'>
        <div class='navbar-dropdown-arrow'></div>
      </div>
      <div class='navbar-dropdown-item navbar-dropdown-item-all'><a href='../projects.html'>All Projects</a></div>
      <div class='navbar-dropdown-item'><a href='../andover/index.html'>Phillips Academy Admissions (Video)</a></div>
      <div class='navbar-dropdown-item'><a href='../moments/index.html'>Moments (Video)</a></div>
      <div class='navbar-dropdown-item'><a href='../holland4harlem/index.html'>Holland4Harlem (Graphics)</a></div>
      <div class='navbar-dropdown-item'><a href='../p6/index.html'>P6 Headphones (Video)</a></div>
      <div class='navbar-dropdown-item'><a href='../2train/index.html'>2 Train Robotics (Video)</a></div>
      <div class='navbar-dropdown-item'><a href='../ragtime/index.html'>Ragtime (Photo)</a></div>
      <div class='navbar-dropdown-item'><a href='../columbiasecondary/index.html'>Columbia Secondary (Photo)</a></div>
    </div>
    <div class='navbar-item'><a href='../blog/index.html'><span>Blog Posts</span></a></div>
    <div class='navbar-item'><a href=''><span>What I'm Up To</span></a></div>
    <div class='navbar-item'><a href='../about/index.html'><span>About / Resume</span></a></div>
  </div>
  <div class='intro-spacer'></div>
  `
  if (page == "home") {navbarCode = navbarCode.split("../").join('');}

  if (page == "double-page") {navbarCode = navbarCode.split('../').join('../../');}

  $("body").append(navbarCode);
};
