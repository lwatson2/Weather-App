import React, { Component } from 'react';
import Current from './current/Current'
import ListHandler from './fiveday/ListHandler'
import Time from './fiveday/FiveDayForecast'
import Search from './search/Search'



   const API_URL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/'

class App extends Component {
 /*
  Have to define the state in the origin this.state then set it equal to the data inside the fetch API
 */ 
 

  constructor(props){
    super(props)
    this.state = {
      conditions: [],
      name: '',
      loading: true,
      currentTemp: [],
      fivedayforecast: [],
      //searchQuery: '',
      lat: '',
      lon: '',
      user: false,
    }
  

  this.FetchCurrentWeather = this.FetchCurrentWeather.bind(this)
  this.FetchFiveWeather = this.FetchFiveWeather.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.getLocation = this.getLocation.bind(this)
  this.FetchUserWeather = this.FetchUserWeather.bind(this)
  
    }

    

    componentDidMount(){

      //this.FetchCurrentWeather()
      //this.FetchFiveWeather()
     this.getLocation()
      
      }

    

     
  FetchCurrentWeather(props){
            
  
              fetch(`${API_URL}weather?q=${this.state.searchQuery}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
              .then(response => response.json())
              .then(parsedJSON => 
                  
                 this.setState({ 
                  conditions: parsedJSON.weather[0],
                  name: parsedJSON.name,
                  loading: false,
                  currentTemp: parsedJSON.main,
                  }))

                .catch(error => console.log('This is an error', error))
                   
      }

  FetchFiveWeather(props){
          
     fetch(`${API_URL}forecast?q=${this.state.searchQuery}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
      .then(response => response.json())
      .then(parsedJSON => 
      this.setState({
        fivedayforecast: parsedJSON,
        loading: true,
      }))
    .catch(error => console.log('This is an error', error))
      
  }
  FetchUserFiveDay(props){
    
    fetch(`${API_URL}forecast?lat=${this.state.lat}&lon=${this.state.lon}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(parsedJSON => 
      this.setState({
        fivedayforecast: parsedJSON,
        loading: true,
      }))
    .catch(error => console.log('This is an error', error))
      
  }
  FetchUserWeather(props){
    
    fetch(`${API_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(parsedJSON => 
                  
         this.setState({ 
          conditions: parsedJSON.weather[0],
          name: parsedJSON.name,
          loading: true,
          currentTemp: parsedJSON.main,
          
          }))

        .catch(error => console.log('This is an error', error))
                   
  }
      
  handleSubmit(event, value){
     
      this.setState({ searchQuery: value }, () => {
        (() => { this.FetchCurrentWeather() })();
        (() => { this.FetchFiveWeather() })(); })
      
  }



  getLocation(){
    //Pass the lat and lon to the weather api inside of component did mount an have seperate functions for original locations
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ 
        loading: true,
        lat: position.coords.latitude,
        lon: position.coords.longitude,
       
      }, () => {
        (() => { this.FetchUserWeather() })();
        (() => { this.FetchUserFiveDay() })();
      })
    })
  
    }
  render() {
    const { loading, conditions, currentTemp, fivedayforecast, name } = this.state
       
      

      
      if(!loading){
      return  <div>Loading....</div>
      } else {
      return (
      

      <div className="App">
        <Search submit={this.handleSubmit}/>
       
        
        
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
