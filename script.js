const container = document.querySelector('.container')
const input = document.querySelector('.input')
const button = document.getElementById('button')


const handleGetWeather = () => {
    console.log('11111111')
    fetch(`http://api.weatherapi.com/v1/current.json?key=f6b0abef3649462ca1c131844233007&q=${input.value}`)
        .then(res => res.json())
        .then(weather => {
            container.innerHTML = `
                <div class="search-wrapper">
                    <img src=${weather.current.condition.icon} alt="">
                    <h3>${weather.location.name}</h3>
                    <p>${weather.location.country}</p>
                    <p>${weather.current.temp_c}°C</p> 
                </div>
                `
            })
        .catch(err => console.log(err))
}
button.addEventListener('click',handleGetWeather, true)
