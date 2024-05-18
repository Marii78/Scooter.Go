// Получаем элементы страницы
const addCardBtn = document.getElementById('add-card-btn'); // Кнопка добавления карты
const addCardModal = document.getElementById('add-card-modal'); // Модальное окно добавления карты
const closeModalBtn = addCardModal.querySelector('.close'); // Кнопка закрытия модального окна
const cardForm = document.getElementById('card-form'); // Форма добавления карты
const cardsContainer = document.getElementById('cards-container'); // Контейнер для блоков с картами
const cardNumberInput = document.getElementById('card-number'); // Поле ввода номера карты
// Форматируем ввод номера карты
cardNumberInput.addEventListener('input', function () {
  // Удаляем пробелы из ввода
  let trimmedValue = this.value.replace(/\s/g, '');
  // Ограничиваем длину ввода до 16 символов
  if (trimmedValue.length > 16) {
    trimmedValue = trimmedValue.substr(0, 16);
  }
  // Форматируем ввод в формат xxxx xxxx xxxx xxxx
  let formattedValue = '';
  for (let i = 0; i < trimmedValue.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += ' ';
    }
    formattedValue += trimmedValue[i];
  }
  this.value = formattedValue;
});
// Открываем модальное окно добавления карты
addCardBtn.addEventListener('click', function () {
  addCardModal.style.display = 'flex';
});
// Закрываем модальное окно добавления карты
closeModalBtn.addEventListener('click', function () {
  addCardModal.style.display = 'none';
});
// Обработка формы добавления карты
cardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // Получаем значения полей формы
  const cardNumber = document.getElementById('card-number').value;
  const cardHolder = document.getElementById('card-holder').value;
  const cardExpiry = document.getElementById('card-expiry').value;
  const cardCvv = document.getElementById('card-cvv').value;
  // Определение типа карты
  let cardType;
  if (cardNumber.startsWith('1111')) {
    cardType = 'Visa';
  } else if (cardNumber.startsWith('2222')) {
    cardType = 'MasterCard';
  } else if (cardNumber.startsWith('3333')) {
    cardType = 'Мир';
  } else {
    cardType = 'Неизвестный тип';
  }
  // Создаем блок с информацией о карте
  const cardBlock = document.createElement('div');
  cardBlock.innerHTML = `
    <p><strong>Номер карты:</strong>**** **** **** ${cardNumber.slice(-4)}</p>
    <p><strong>Тип карты:</strong> ${cardType}</p>
    <p><strong>Держатель:</strong> ${cardHolder}</p>
    <p><strong>Дата окончания:</strong> ${cardExpiry}</p>
    <p><strong>CVV/CVC:</strong> ${cardCvv}</p>
    <div class="bloc-btn">
    <button class="delete-card-btn">Удалить карту</button>
    </div>`;
  cardsContainer.appendChild(cardBlock);
  cardBlock.className = "cardBlock";
  addCardModal.style.display = 'none';
  // Очистка формы после добавления карты
  cardForm.reset();
});
// Обработка удаления карты
cardsContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-card-btn')) {
    // Находим ближайший родительский элемент, который представляет блок с картой
    const cardBlock = event.target.closest('.cardBlock');
    if (cardBlock) {
      // Удаляем блок с картой из контейнера
      cardsContainer.removeChild(cardBlock);
    }
  }
});