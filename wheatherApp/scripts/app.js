const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {
    console.log(data);
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //destructure properties!!!!!!!!!!!!!!
    const {cityDets, weather } = data;




    //update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName} - ${cityDets.AdministrativeArea.LocalizedName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span> &deg;C</span>
    </div>
    `

    //update the noite dia imagens
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    console.log(weather.WeatherIcon);
    console.log(icon)
    icon.setAttribute('src', iconSrc);




    let timeSrc = null;
    // if (weather.IsDayTime) {
    //     timeSrc = 'img/day.svg'
    // }
    // else{
    //     timeSrc = 'img/night.svg'
    // }
    timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);

    //remove the d-none class present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key)

    // return {
    //     cityDets: cityDets,
    //     weather: weather
    // };

    //object shorthand quando o objeto e o valor tem o mesmo nome, pode apagar um
    return {
        cityDets,
        weather
    };


};


cityForm.addEventListener('submit', e => {
    //para nao recarregar
    e.preventDefault();
    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui com a nova cidade
    updateCity(city)
        .then(data => {updateUI(data)})
        .catch(err => {console.log(err)});
})