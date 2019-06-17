ymaps.ready(() => {
  const map = new ymaps.Map("map", {
    center: [55.75519455, 37.62768222],
    controls: ['geolocationControl', 'zoomControl'],
    zoom: 11,
  });

  const mitino = new ymaps.Placemark([55.847674, 37.349434], {
    hintContent: '3-й Митинский переулок, дом 3',
    balloonContent: 'адрес дописать...'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/map_marker_brown.svg',
    iconImageSize: [30, 60],
    iconImageOffset: [-15, -50]
  });
  const bodyhtml = '<h2 class="map__title">это разметка</h2>';

  const tushino = new ymaps.Placemark([55.828202, 37.439679], {
    //https://tech.yandex.ru/maps/jsbox/2.1/balloon_html todo: доделать когда будет понятно что всавляем
    hintContent: 'всплывающая подсказка',
    balloonContent: 'содержимое геобъекта',
    balloonContentHeader: 'заголовок балуна',
    balloonContentBody: 'main',
    balloonContentFooter: 'footer'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/map_marker_brown.svg',
    iconImageSize: [30, 60],
    iconImageOffset: [-15, -50]
  });
  const zhivopisnaya = new ymaps.Placemark([55.784435, 37.45707], {
    hintContent: 'ул. Живописная, дом. 12 корп. 1',
    balloonContent: 'адрес дописать...'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/map_marker_brown.svg',
    iconImageSize: [30, 60],
    iconImageOffset: [-15, -50]
  });
  const shelkovskoe = new ymaps.Placemark([55.809813, 37.799858], {
    hintContent: 'Щелковское шоссе, дом 56/72',
    balloonContent: 'адрес дописать...'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/map_marker_brown.svg',
    iconImageSize: [30, 60],
    iconImageOffset: [-15, -50]
  });
  const sokolniki = new ymaps.Placemark([55.789952, 37.678541], {
    hintContent: 'Сокольническая площадь 4а.​',
    balloonContent: 'адрес дописать...'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/map_marker_brown.svg',
    iconImageSize: [30, 60],
    iconImageOffset: [-15, -50]
  });
  const basmanniy = new ymaps.Placemark([55.837778, 37.46149], {
    hintContent: '1-й Басманный переулок, 5/20с1​',
    balloonContent: 'адрес дописать...'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/map_marker_brown.svg',
    iconImageSize: [30, 60],
    iconImageOffset: [-15, -50]
  });
  const office = new ymaps.Placemark([55.837778, 37.46149], {
    hintContent: ' Лодочная улица, 27Ас3​',
    balloonContent: 'адрес дописать...'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/map_marker_red.svg',
    iconImageSize: [30, 60],
    iconImageOffset: [-15, -50]
  });

  map.behaviors.disable(['drag', 'scrollZoom', 'dblClickZoom']);

  map.geoObjects
    .add(mitino)
    .add(tushino)
    .add(zhivopisnaya)
    .add(shelkovskoe)
    .add(sokolniki)
    .add(basmanniy)
    .add(office);
});
//todo: сделать подписи и возможно фото к каждой точке! отцентровать карту...
