// Функция, вызываемая после загрузки API Яндекс.Карт
ymaps.ready(init);
function init() {
    // Создание карты с указанием центра и масштаба
    var myMap = new ymaps.Map("map", {
        center: [53.715, 91.429], // Координаты центра карты
        zoom: 12 // Уровень масштабирования
    });
    // Массив меток на карте с их координатами и названиями
    var placemarks = [
        { coordinates: [53.725, 91.443], name: 'Спортивный комплекс «Абакан»' },
        { coordinates: [53.718, 91.409], name: 'Краеведческий музей' },
        { coordinates: [53.706, 91.412], name: 'Спортивный комплекс «Саяны»' },
        { coordinates: [53.719, 91.444], name: 'Преображенский парк' },
        { coordinates: [53.717, 91.421], name: 'Парк культуры и отдыха' },
        { coordinates: [53.727, 91.445], name: 'Парк возле водоема Баранка' }
    ];
    // Добавление каждой метки на карту с соответствующими событиями
    placemarks.forEach(function (place) {
        var placemark = new ymaps.Placemark(place.coordinates, {
            hintContent: place.name // Всплывающая подсказка при наведении на метку
        });
        // Добавление события клика на метку для отображения списка доступных электросамокатов
        placemark.events.add('click', function () {
            alert('Список доступных электросамокатов для ' + place.name);
        });
        myMap.geoObjects.add(placemark); // Добавление метки на карту
    });
}