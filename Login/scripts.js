document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения полей
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    // Проверяем условие для перехода на другую страницу
    if (phone === '89233334444' && password === '12345678') {
        window.location.href = '../Account_Personal/profile.html'; // Перенаправляем на другую страницу
    } else {
        alert('Неверный номер телефона или пароль. Попробуйте снова.');
    }
});

document.getElementById('zar').addEventListener('click', function() {
    // Перенаправление на другую страницу
    window.location.href = "../Registration/register.html";
});