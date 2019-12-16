function is_touch_device() {
  return !!('ontouchstart' in window); //проверяем есть ли поддержка touch эвентов
}

$(function () {

  //console.log(is_touch_device());

  if (!is_touch_device()) {
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
  } else {
    //alert('touch');
    const parallaxLayer1 = document.querySelector('.popular__parallax');
    const parallaxLayer2 = document.querySelector('.popular__parallax-layer');

    parallaxLayer1.style.display = 'none';
    parallaxLayer2.style.display = 'none';
  }
});
