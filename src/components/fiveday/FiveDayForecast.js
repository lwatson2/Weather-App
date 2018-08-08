import React from 'react'
import './Time.css'


const Time = (props) => {
	const { list } = props
	
	const uuidv4 = require('uuid/v4');
	
 


	let newList = Object.keys(list).map((txt) => {
		if(list[txt].dt_txt.includes('12:00'))return list[txt]
	})
		
	Object.keys(newList).forEach((key) => (newList[key] === undefined) && delete newList[key]);
	
	return (
		<div className='LookAhead'>
		<h3> A look ahead at the next 5 days at noon </h3>
		<div className="List">
		{Object.keys(newList).map((list) => (

			<ul key = {uuidv4()} className='WeatherList'>
				<li key = {uuidv4()}>{newList[list].main.temp}°F</li>
				<li key = {uuidv4()}>{newList[list].weather[0].description}</li>
				<li key = {uuidv4()}><img alt='weather icon'className="T-Icon" src={`http://openweathermap.org/img/w/${newList[list].weather[0].icon}.png`}/></li>
				</ul>
			))}
		</div>
		</div>
		)
}
export default Time