document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('location-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;
        getWeather(city, country);
    });
});

function getWeather(city, country) {
    const apiKey = '99d5ed509956ddf32cc640fb215f54f3';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const iconCode = data.weather[0].icon;
            const temp = Math.round(data.main.temp);
            const desc = data.weather[0].description;
            const location = `${data.name}, ${data.sys.country}`;

            document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            document.getElementById('temperature').textContent = `${temp}°C`;
            document.getElementById('description').textContent = desc;
            document.getElementById('location').textContent = location;
        })
        .catch(error => console.error('Error fetching the weather data:', error));
}
