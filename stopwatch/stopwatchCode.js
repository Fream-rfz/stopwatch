// Объявление переменных для хранения времени и состояния секундомера
let startTime, updatedTime, difference, tInterval;
let running = false; // Флаг, указывающий, запущен ли секундомер

// Получение элементов из HTML 
const timerDisplay = document.getElementById("timer"); // Элемент для отображения времени
const startButton = document.getElementById("startBtn"); // Кнопка "Старт"
const stopButton = document.getElementById("stopBtn"); // Кнопка "Стоп"
const resetButton = document.getElementById("resetBtn"); // Кнопка "Сброс"

// Функция для запуска секундомера
function startTimer() {
    if (!running) { // Проверка, запущен ли секундомер
        startTime = new Date().getTime(); // Запоминаем время старта
        running = true; // Устанавливаем флаг, что секундомер запущен
        tInterval = setInterval(updateTimer, 10); // Запускаем интервал для обновления времени каждые 10 миллисекунд
    }
}

// Функция для остановки секундомера
function stopTimer() {
    if (running) { // Проверка, запущен ли секундомер
        clearInterval(tInterval); // Останавливаем интервал
        running = false; // Устанавливаем флаг, что секундомер остановлен
    }
}

// Функция для сброса секундомера
function resetTimer() {
    clearInterval(tInterval); // Останавливаем интервал
    running = false; // Устанавливаем флаг, что секундомер не запущен
    difference = 0; // Обнуляем разницу времени
    timerDisplay.innerHTML = "00:00:00"; // Сбрасываем отображаемое время
}

// Функция для обновления времени
function updateTimer() {
    updatedTime = new Date().getTime(); // Получаем текущее время
    difference = updatedTime - startTime; // Вычисляем разницу между текущим временем и временем старта

    // Вычисляем часы, минуты и секунды 
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Форматируем время для отображения (добавляем 0 перед числами меньше 10)
    const formattedTime = (hours < 10 ? "0" + hours : hours) + ":" +
                          (minutes < 10 ? "0" + minutes : minutes) + ":" +
                          (seconds < 10 ? "0" + seconds : seconds);
    
    timerDisplay.innerHTML = formattedTime; // Обновляем элемент с отображением времени
}

// Добавление обработчиков событий для кнопок
startButton.addEventListener("click", startTimer); // При нажатии на кнопку "Старт" запускаем секундомер
stopButton.addEventListener("click", stopTimer); // При нажатии на кнопку "Стоп" останавливаем секундомер
resetButton.addEventListener("click", resetTimer); // При нажатии на кнопку "Сброс" сбрасываем секундомер
