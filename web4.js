$(function() {
  $('.toggle-nav, .back').click(function() {
    $('.main-content').toggleClass('main-content-active');
    $('.navbar-menu').toggleClass('nav-anim-ds nav-anim');
  });
  $('.tp-card').each(function(d) {
    setTimeout(function() {
      $('.tp-card').eq(d).addClass('card-anim');
    }, 300 * d);
  });
})
