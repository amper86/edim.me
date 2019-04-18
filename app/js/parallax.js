$(function () {
  $('.popular').on('mousemove', function (e) {
    //console.log('hi');
    let initialX = (window.innerWidth / 2) - e.pageX;
    let initialY = (window.innerHeight / 2) - e.pageY;
    //console.log(initialX);
    //console.log(initialY);
    const layer = $('.popular__parallax-layer');
    let divider = 1 / 100;
    let positionX = initialX * divider;
    let positionY = initialY * divider;
    let stringPosition = 'translate(' + positionX + 'px, ' + positionY / 5 + 'px)';

    //console.log(bottomPosition);
    //console.log(stringPosition);

    layer.css('transform', stringPosition);
    // image.css('bottom', '-' + bottomPosition + 'px');
  });
});
