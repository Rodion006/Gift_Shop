
function countdownTimer() {
    const newYearDate = new Date('January 1, 2027 00:00:00').getTime();
    const now = new Date().getTime();
    const timeDifference = newYearDate - now;

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Отображаем значения в HTML
    document.getElementById('days').textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

    // Если Новый год наступил
    if (timeDifference < 0) {
        document.getElementById('countdown').innerHTML = "<h2>Happy New Year!</h2>";
        clearInterval(interval);
    }
}

// Запускаем таймер каждую секунду
const interval = setInterval(countdownTimer, 1000);