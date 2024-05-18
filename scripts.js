// Получаем все слайды и контейнер для индикаторов
let slides = document.querySelectorAll('.slide');
let sliderIndicators = document.querySelector('.slider-indicators');
let currentSlide = 0;
// Функция для отображения слайда по индексу
function showSlide(index) { 
  // Перебираем все слайды и отображаем только тот, который соответствует индексу
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}
// Функция для отображения индикатора по индексу
function showIndicator(index) { 
  // Получаем все индикаторы и удаляем класс active у всех
  let indicators = document.querySelectorAll('.slider-indicator');
  indicators.forEach((indicator) => indicator.classList.remove('active'));
  // Добавляем класс active к индикатору, соответствующему индексу
  indicators[index].classList.add('active');
}
// Функция для перехода к следующему слайду
function nextSlide() {
  // Инкрементируем currentSlide, но не более длины массива slides
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  showIndicator(currentSlide);
}
// Инициализируем отображение первого слайда
showSlide(currentSlide);
// Автоматически переключаем слайды каждые 3 секунды
setInterval(nextSlide, 3000);
// Создаем индикаторы для каждого слайда
slides.forEach((slide, index) => {
  let indicator = document.createElement('div');
  indicator.classList.add('slider-indicator');
  // Добавляем обработчик клика на индикатор
  indicator.addEventListener('click', () => {
    showSlide(index);
    showIndicator(index);
    currentSlide = index;
  });
  sliderIndicators.appendChild(indicator);
});
// Получаем форму поиска
const form = document.getElementById('search-form');
// Добавляем обработчик сабмита формы
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Получаем значения полей формы
  const scooterClass = document.getElementById('scooter-class').value;
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  // Проверяем, заполнены ли все поля
  if (scooterClass && brand && model) {
    // Отображаем сообщение с результатами поиска
    alert(`Поиск: Класс - ${scooterClass}, Марка - ${brand}, Модель - ${model}`);
    // Очищаем форму
    form.reset();
  } else {
    // Отображаем сообщение об ошибке
    alert('Пожалуйста, заполните все поля для поиска.');
  }
});