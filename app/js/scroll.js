$(() => {
  $('.nav__link').on('click', function (e){
    e.preventDefault();
    let $this = $(this);
    let elemId = $this.attr('href');

    $('html, body').animate({scrollTop:$(elemId).position().top}, 300);
  });
});
