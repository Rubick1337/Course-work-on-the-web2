let cord = [53.9080520193559, 30.3440202444921];
function init() {
  var map = new ymaps.Map("map", {
    center: cord,
    zoom: [18],
    // controls: ['routePanelControl'],
  });
  // let access_controls = map.controls.get('routePanelControl');
  // let city = "Могилёв"
  // access_controls.routePanel.state.set({
  //     type: 'masstransit',
  //     fromEnabled:true,
  //     toEnabled:false,
  //     to: `${city}, бульвар Ленина, 5`,
  // })
  var placemark = new ymaps.Placemark(
    cord,
    {
      balloonContentHeader: "БЕЛОРУССКО-РОССИЙСКИЙ УНИВЕРСИТЕТ",
      balloonContentBody: "Лучший университет",
      balloonContentFooter:
        "<a href=http://bru.by/?ysclid=lv9kj2s9ku301248247>http://bru.by/?ysclid=lv9kj2s9ku301248247</a>",
    },
    {
      iconLayout: "default#image",
      iconImageHref: "images/marker.png",
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -20],
    }
  );
  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.geoObjects.add(placemark);
}

ymaps.ready(init);
