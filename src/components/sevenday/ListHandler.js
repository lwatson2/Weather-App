import React from 'react'
import Time from './Time'



const Sevenday = (props) => {
	
		  const { fivedayforecast } = props
		
		
		 
		  if(fivedayforecast.list){
		  return (
	<Time list={fivedayforecast.list}/>)
	}
	
		

	
	return(
		<div>
		
		</div>
		)

		}
 
export default Sevenday