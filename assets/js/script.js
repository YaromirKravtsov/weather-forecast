
const nextHoursWeather = document.querySelector('.next-hours-weather__main');

let date = new Date(); // Получаем текущую дату и время
let actualHours = date.getHours();
let nextHoursWeatherString = ''; // Инициализируем пустую строку для вывода

for (let i = 0; i < 20; i++) {
    if (actualHours + i >= 24) {
        inputTime = (actualHours + i - 24).toString().padStart(2, '0'); // Преобразуем в строку и добавляем ведущий ноль
    } else {
        inputTime = (actualHours + i).toString().padStart(2, '0'); // Преобразуем в строку и добавляем ведущий ноль
    }

    nextHoursWeatherString += `
    <div class="next-hours__block">
        <div class="next-hours__block-time">
            <div id="next-hours-time">${inputTime}:00</div>
        </div>
        <div class="next-hours-icon"></div>
        <div class="next-hours-degrees">17°С</div>
        <div class="next-hours-rain-percentage">
            <div class="rain-percentage-icon"></div>
            <div class="rain-percentage--value">90%</div>
        </div>
    </div>
    `;
}





nextHoursWeather.innerHTML =nextHoursWeatherString;