import React, { Component } from 'react';
import Current from './current/Current'
import { CurrentWeatherCall, FiveDayCall } from './weatherservices/WeatherServices'
import ListHandler from './sevenday/ListHandler'
import Time from './sevenday/Time'





class App extends Component {
 /*
  Have to define the state in the origin this.state then set it equal to the data inside the fetch API
 */ 


  constructor(props){
    super(props)
    this.state = {
      conditions: [],
      name: '',
      loading: false,
      currentTemp: [],
      fivedayforecast: [],
    }
  

  this.FetchCurrentWeather = this.FetchCurrentWeather.bind(this)
  this.FetchFiveWeather = this.FetchFiveWeather.bind(this)
  
    }

    

    componentDidMount(){
      this.FetchCurrentWeather()
      this.FetchFiveWeather()
      

    }

  FetchCurrentWeather(){
    
  
              CurrentWeatherCall().then(parsedJSON => 
                  
                 this.setState({ 
                  conditions: parsedJSON.weather[0],
                  name: parsedJSON.name,
                  loading: true,
                  currentTemp: parsedJSON.main,
                  }))

                .catch(error => console.log('This is an error', error))
                   
      }

  FetchFiveWeather(){
    
    FiveDayCall().then(parsedJSON => 
      this.setState({
        fivedayforecast: parsedJSON,
        loading: true,
      }))
    .catch(error => console.log('This is an error', error))
      
  }
      

  render() {
    const { loading, conditions, currentTemp, fivedayforecast, name } = this.state
       
      

      
      if(!loading){
      return  <div>Loading....</div>
      } else {
      return (
      

      <div className="App">
        
       
        
        
        <Current
        conditions={conditions}
        currentTemp={currentTemp}
        name={name}
        />
           <ListHandler
        fivedayforecast={fivedayforecast}/>


        
      </div>
    )}
  }
}



export default App;
