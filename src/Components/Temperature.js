// https://api.openweathermap.org/data/2.5/weather?q=kangra&appid=17eacbdaed5d50d781caa4770a8381dd
import React, { useEffect, useState } from 'react'
import './style.css'
import WeatherCard from './WeatherCard'

const API_KEY = process.env.REACT_APP_API_KEY
const Temperature = () => {
  const [inputData , setInputData] = useState('kangra')
  const [weatherInfo , setWeatherInfo] = useState({})

  const getWeatherInfo = async ()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&appid=${API_KEY}`
    try {
      let res = await fetch(url)
      let data = await res.json()
      const {temp, pressure, humidity} = data.main
      const {main:weathermood} = data.weather[0]
      const {name} = data
      const {speed} = data.wind
      const {country, sunset} = data.sys
  
      const fetchedWeatherInfoObj = {
        temp,
        pressure,
        humidity,
        weathermood,
        speed,
        country,
        name,
        sunset
      }
      setWeatherInfo(fetchedWeatherInfoObj)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWeatherInfo();
  }, [])
  

  return (
    <>
    {/* Search Bar */}
      <div className="wrap">
        <div className="search">
          <input type="search" placeholder='search...' autofocus className='searchTerm' id="search"
            value={inputData}
            onChange= {(e)=> setInputData(e.target.value) } />

          <button type="button" className='searchButton' onClick={getWeatherInfo}>
            Search
          </button>

        </div>
      </div>

      {/* Temperature Card */}
      <WeatherCard weatherInfo={weatherInfo}/>
      
    </>
  )
}

export default Temperature

