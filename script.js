const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a711dd47dmsh8e31d48bf875c11p1cccc8jsn796a607592e3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityname.innerHTML = city
 
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)

	.then(response => response.json())
	.then((response) => {
		console.log(response)

		temp.innerHTML = response.temp
	}) 
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Jhajha")