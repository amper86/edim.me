$(function () {
  $('.popular').on('mousemove', function (e) {
    //console.log('hi');
    let initialX = (window.innerWidth / 2) - e.pageX;
    let initialY = (window.innerHeight / 2) - e.pageY;
    //console.log(initialX);
    //console.log(initialY);
    const layerTable = $('.popular__parallax-layer');
    const layerBackground = $('.popular__parallax');

    let divider = 1 / 100;
    let positionX = initialX * divider;
    let positionY = initialY * divider;
    let stringPositionBackground = 'translate(' + positionX + 'px, ' + positionY + 'px)';
    let stringPositionTable = 'translate(-' + positionX + 'px)';

    //console.log(bottomPosition);
    //console.log(stringPosition);

    layerBackground.css('transform', stringPositionBackground);
    layerTable.css('transform', stringPositionTable);
    // image.css('bottom', '-' + bottomPosition + 'px');
  });
});
