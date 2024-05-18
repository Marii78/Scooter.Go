let registrationForm = document.getElementById("registrationForm");
//функция для проверки введеных значений
registrationForm.addEventListener("submit", function(event) { 
    //получаем элементы формы
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let middleName = document.getElementById("middleName");
    let tele = document.getElementById("tele");
    let dobInput = document.getElementById('dob');
    let seria = document.getElementById("seria");
    let nomer = document.getElementById("nomer");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let errorFirstName = document.getElementById("errorFirstName");
    let errorLastName = document.getElementById("errorLastName");
    let errorMiddleName = document.getElementById("errorMiddleName");
    let errorTele = document.getElementById("errorTele");
    let errorDob = document.getElementById('errorDob');
    let errorSeria = document.getElementById("errorSeria");
    let errorNomer = document.getElementById("errorNomer");
    let errorPassword = document.getElementById("errorPassword");
    let errorConfirmPassword = document.getElementById("errorConfirmPassword");
    let errorAgreeRules = document.getElementById("errorAgreeRules");
    //условия для проверки полей
    if (!/^[А-Я][А-Яа-яЁё\s\-]+$/.test(firstName.value)) {
        firstName.style.borderColor = "red";
        errorFirstName.textContent = "Имя должно быть написано только кириллицей с заглавной буквы.";
        event.preventDefault();
    } else {
        firstName.style.borderColor = "";
        errorFirstName.textContent ="";
    }
    if (!/^[А-Я][А-Яа-яЁё\s\-]+$/.test(lastName.value)) {
        lastName.style.borderColor = "red";
        errorLastName.textContent = "Фамилия должна быть написана только кириллицей с заглавной буквы.";
        event.preventDefault();
    } else {
        lastName.style.borderColor = "";
        errorLastName.textContent ="";
    }
    if (!/^[А-Я][А-Яа-яЁё\s\-]+$/.test(middleName.value) && middleName.value!="") {
        middleName.style.borderColor = "red";
        errorMiddleName.textContent = "Отчество должно быть написано только кириллицей с заглавной буквы.";
        event.preventDefault();
    } else {
        middleName.style.borderColor = "";
        errorMiddleName.textContent ="";
    }
    if (!/^[7-8] \(\d{3}\) \d{3}-\d{4}$/.test(tele.value)) {
        tele.style.borderColor = "red";
        errorTele.textContent = "Телефон должен содержать только цифры.";
        event.preventDefault();
    } else {
        tele.style.borderColor = "";
        errorTele.textContent ="";
    }
    dobInput.addEventListener('change', function() { //функция для проверки даты рождения
        let dobValue = new Date(dobInput.value);
        let minDate = new Date('1920-01-01');
        let maxDate = new Date('2018-12-31');
    
        if (dobValue < minDate || dobValue > maxDate) {
            errorDob.textContent = 'Год рождения должен быть в промежутке с 1920 по 2018';
            dobInput.style.borderColor = 'red';
        } else {
            errorDob.textContent = '';
            dobInput.style.borderColor = '';
        }
    });
    if (!/^\d{4}$/.test(seria.value)) {
        seria.style.borderColor = "red";
        errorSeria.textContent = "Серия паспорта должна состоять из 4 цифр";
        event.preventDefault();
    } else {
        seria.style.borderColor = "";
        errorSeria.textContent ="";
    }
    if (!/^\d{6}$/.test(nomer.value)) {
        nomer.style.borderColor = "red";
        errorNomer.textContent = "Номер паспорта должн состоять из 8 цифр";
        event.preventDefault();
    } else {
        nomer.style.borderColor = "";
        errorNomer.textContent ="";
    }
    if (password.value.length < 8) {
        password.style.borderColor = "red";
        errorPassword.textContent = "Пароль должен содержать не менее 8 символов.";
        event.preventDefault();
    } else {
        password.style.borderColor = "";
        errorPassword.textContent ="";
    }
    if (password.value !== confirmPassword.value) {
        confirmPassword.style.borderColor = "red";
        errorConfirmPassword.textContent = "Подтверждение пароля не совпадает с паролем.";
        event.preventDefault();
    } else {
        confirmPassword.style.borderColor = "";
        errorConfirmPassword.textContent ="";
    }
    if (!document.getElementById("agreeRules").checked) {
        errorAgreeRules.textContent = "Вы должны согласиться с правилами регистрации.";
        event.preventDefault();
    } else {
        errorAgreeRules.textContent ="";
    }
});
tele.addEventListener('input', function (e) { //метод шаблона для номера телфона
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
    if (x) {
        e.target.value = !x[2] ? x[1] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '');
    }
});
//метод для отправки формы и переход на другую страницу
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let middleName = document.getElementById("middleName");
    let tele = document.getElementById("tele");
    let seria = document.getElementById("seria");
    let nomer = document.getElementById("nomer");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    if ((/^[А-Я][А-Яа-яЁё\s\-]+$/.test(firstName.value)) &&
    (/^[А-Я][А-Яа-яЁё\s\-]+$/.test(lastName.value)) &&
    (/^[А-Я][А-Яа-яЁё\s\-]+$/.test(middleName.value) && middleName.value !== "") &&
    (/^8 \(\d{3}\) \d{3}-\d{4}$/.test(tele.value)) &&
    (/^\d{4}$/.test(seria.value)) &&
    (/^\d{6}$/.test(nomer.value)) &&
    (password.value.length >= 8) && (password.value === confirmPassword.value)) {
    // Если все условия выполняются, происходит перенаправление на другую страницу
    window.location.href = "../Account_Personal/profile.html";
    }
});