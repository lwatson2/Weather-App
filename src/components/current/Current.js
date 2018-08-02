import React from 'react'
import  './Current.css'



 const Current = (props) =>  {
	const imgUrl = 'http://openweathermap.org/img/w/'
	const { conditions, currentTemp, name } = props
	
	

	

	
	
	return (
		

		<div>
			<h1 className='C-Conditions'> Current Conditions for {name}</h1>
		<div className="Current-Conditions">
			
			<h4 className='C-Temp'> Tempature: {currentTemp.temp}°F</h4>


			<h4 className='C-Description'> Weather: {conditions.description}  </h4>
			<img  alt= "current weather icon" className='C-Icon' src={`${imgUrl}${conditions.icon}.png`} />
		</div>


		
		</div>
	)

}

export default Current