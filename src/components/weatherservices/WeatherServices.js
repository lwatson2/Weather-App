

const API_URL = 'http://api.openweathermap.org/data/2.5/'

export function CurrentWeatherCall(props) {
	
	return fetch(`${API_URL}weather?q=London&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
      .then(response => response.json())
      			
} 

export function FiveDayCall(props){
	return fetch(`${API_URL}forecast?q=London&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
	.then(response => response.json())
}
