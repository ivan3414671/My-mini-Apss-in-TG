// Получаем объект WebApp из SDK
const tg = window.Telegram.WebApp;

// Сообщаем Telegram, что приложение готово и его нужно развернуть на весь экран
tg.ready();
tg.expand();

// Получаем данные пользователя, если они есть
const user = tg.initDataUnsafe?.user;
if (user) {
    document.getElementById('greeting').innerText = `Привет, ${user.first_name}!`;
}

// Обработчик для кнопки: отправляем данные обратно боту
document.getElementById('sendDataBtn').addEventListener('click', () => {
    // Эта функция закроет приложение и отправит строку в бот в поле web_app_data
    tg.sendData('Пользователь нажал на кнопку!');
});