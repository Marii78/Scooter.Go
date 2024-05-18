// Получаем элементы формы и ошибок
const registrationForm = document.getElementById("customerForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const middleName = document.getElementById("middleName");
const tele = document.getElementById("tele");
const seria = document.getElementById("seria");
const nomer = document.getElementById("nomer");
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorMiddleName = document.getElementById("errorMiddleName");
const errorTele = document.getElementById("errorTele");
const errorSeria = document.getElementById("errorSeria");
const errorNomer = document.getElementById("errorNomer");
const cardNumberInput = document.getElementById('card-number');
const card = document.getElementById('creditCard');
// Добавляем слушатель события на форму
registrationForm.addEventListener("submit", validateForm);
// Функция валидации формы
function validateForm(event) {
  event.preventDefault();
  // Валидация имени
  if (!validateName(firstName.value)) {
    firstName.style.borderColor = "red";
    errorFirstName.textContent = "Имя должно быть написано только кириллицей с заглавной буквы.";
  } else {
    firstName.style.borderColor = "";
    errorFirstName.textContent = "";
  }
  // Валидация фамилии
  if (!validateName(lastName.value)) {
    lastName.style.borderColor = "red";
    errorLastName.textContent = "Фамилия должна быть написана только кириллицей с заглавной буквы.";
  } else {
    lastName.style.borderColor = "";
    errorLastName.textContent = "";
  }
  // Валидация отчества
  if (!validateName(middleName.value) && middleName.value!== "") {
    middleName.style.borderColor = "red";
    errorMiddleName.textContent = "Отчество должно быть написано только кириллицей с заглавной буквы.";
  } else {
    middleName.style.borderColor = "";
    errorMiddleName.textContent = "";
  }
  // Валидация телефона
  if (!validateTele(tele.value)) {
    tele.style.borderColor = "red";
    errorTele.textContent = "Телефон должен содержать только цифры.";
  } else {
    tele.style.borderColor = "";
    errorTele.textContent = "";
  }
  // Валидация серии паспорта
  if (!validateSeria(seria.value)) {
    seria.style.borderColor = "red";
    errorSeria.textContent = "Серия паспорта должна состоять из 4 цифр";
  } else {
    seria.style.borderColor = "";
    errorSeria.textContent = "";
  }
  // Валидация номера паспорта
  if (!validateNomer(nomer.value)) {
    nomer.style.borderColor = "red";
    errorNomer.textContent = "Номер паспорта должен состоять из 6 цифр";
  } else {
    nomer.style.borderColor = "";
    errorNomer.textContent = "";
  }
}
// Функция валидации имени
function validateName(value) {
  return /^[А-Я][а-яё\s\-]+$/i.test(value);
}
// Функция валидации телефона
function validateTele(value) {
  return /^8 \(\d{3}\) \d{3}-\d{4}$/.test(value);
}
// Функция валидации серии паспорта
function validateSeria(value) {
  return /^\d{4}$/.test(value);
}
// Функция валидации номера паспорта
function validateNomer(value) {
  return /^\d{6}$/.test(value);
}
// Добавляем слушатель события на инпут телефона
tele.addEventListener('input', formatTele);
// Функция форматирования телефона
function formatTele(e) {
  let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
  if (x) {
    e.target.value =!x[2]? x[1] : x[1] + '' + x[2] + ') ' + x[3] + (x[4]? '-' + x[4] : '');
  }
}
// Добавляем слушатель события на инпут карты
cardNumberInput.addEventListener('input', formatCardNumber);
// Функция форматирования номера карты
function formatCardNumber() {
  let trimmedValue = this.value.replace(/\s/g, '');
  if (trimmedValue.length > 16) {
    trimmedValue = trimmedValue.substr(0, 16);
  }
  let formattedValue = '';
}