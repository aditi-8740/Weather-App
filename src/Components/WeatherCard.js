import React, { useEffect, useState } from 'react'

const WeatherCard = ({weatherInfo}) => {
    const [weatherMoodState , setWeatherMoodState] = useState('')
    const {
        temp,
        pressure,
        humidity,
        weathermood,
        speed,
        country,
        name,
        sunset
      } = weatherInfo;

    useEffect(() => {
      if(weathermood){
        switch (weathermood) {
            case 'Clouds':
                setWeatherMoodState('wi-day-cloudy')
                break;
            case 'Sunny':
                setWeatherMoodState('wi-day-sunny')
                break;
            case 'Haze':
                setWeatherMoodState('wi-day-fog')
                break;
        
            default:
                setWeatherMoodState('wi-day-sunny')
        }
      }
    }, [weathermood])

    let dateObj = new Date(sunset * 1000) // Convert seconds to milliseconds
    // const formatTime = `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherMoodState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{name}, {country}</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}  </div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {dateObj.toLocaleTimeString()} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p> <i className={"wi wi-humidity"}></i></p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p> <i className={"wi wi-rain"}></i> </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p> <i className={"wi wi-strong-wind"}></i> </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard
