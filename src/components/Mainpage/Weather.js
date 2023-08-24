import { useState, useEffect } from 'react'
import { findCityWeather } from '../../actions/Mainpage/weather_api';
import { get } from 'lodash';
import { reverseGeocoding } from '../../actions/Mainpage/reverse_geocoding_api';
import Clear from '../../images/clear.jpeg'
import Clouds from '../../images/cloudy.jpg'
import Rain from '../../images/Rain.jpg'
import Haze from '../../images/Haze.jpg'
import Mist from '../../images/Mist.jpg'


function Weather() {
    const [weatherData, setWeatherData] = useState('')
    const [cityName, setCityName] = useState('')
    const [currentCity, setCurrentCity] = useState('')

    useEffect(() => {
        //const Geolocation = Navigator.geolocation
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        function success(pos) {
            const crd = pos.coords;
            console.log(`Your current position is:> Latitude : ${crd.latitude} Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
            reverseGeoCode(crd.latitude, crd.longitude)
        }
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        navigator.geolocation.getCurrentPosition(success, error, options);
    }, [])

    const reverseGeoCode = (lat, lon) => {
        reverseGeocoding(lat, lon).then((res) => {
            let data = get(res, 'data', [])
            setCurrentCity(data)
        })
    }

    useEffect(() => {
        const cityname = get(currentCity, 'address.city', '')
        cityname && findCityWeather(cityname).then((res) => {
            let data = get(res, 'data', [])
            setWeatherData(data)
        }).catch((error)=>{
            console.log(error,"error")
        })
    }, [currentCity])

    const handleCityname = (e) => {
        setCityName(e.target.value)
    }

    const findTemperature = () => {
        findCityWeather(cityName).then((res) => {
            let data = get(res, 'data', [])
            setWeatherData(data)
        })
    }

    const findTemperatureEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            findTemperature()
        }
    }

    const getTempInCelcius = () => {
        let temp = get(weatherData, 'main.temp') - 273.15
        return temp.toFixed(2)
    }
    const weatherImage={
        Clouds:Clouds,
        Clear:Clear,
        Rain:Rain,
        Haze:Haze,
        Mist:Mist
    }
    const backGroundImage = () => {
        return get(weatherData, 'weather[0].main')
    }
//Haze Rain Mist
    return (
        <div
            className="box-ip-weather"
            style={{
                //backgroundColor: 'lightskyblue',
                //margin: 0,
                backgroundImage: `url(${weatherImage[backGroundImage()]})`,
                backgroundSize: 'cover',
                boxShadow:'-3px 3px 3px lightgrey'

            }}
        >
            <div style={{ display: 'flex', margin: '7px', height: '30px' }}>
                <input placeholder='Cityname' style={{ width: '100%', borderRadius: '10px' }} onKeyDownCapture={findTemperatureEnter} onChange={handleCityname}></input>
                <button onClick={findTemperature} style={{ backgroundColor: 'lightgreen', borderRadius: '10px' }} >Search</button>
            </div>
            <div >
                <h1 style={{ margin: 0 ,color:'white',textShadow:'3px 3px 3px black'}}> {cityName ? weatherData.name : (get(currentCity, 'address.city', '')?get(currentCity, 'address.city', ''):get(currentCity, 'address.state', ''))}</h1>
                {getTempInCelcius() && <p style={{color:'white',textShadow:'1px 1px 3px black' }}>
                    <strong>Current Temp :</strong> {getTempInCelcius()} <sup>O</sup>C
                </p>}
                { <p style={{color:'white',textShadow:'1px 1px 3px black'}}>
                    <strong>Humidity :</strong> {get(weatherData,'main.humidity')}
                </p>}
                { <p style={{color:'white',textShadow:'1px 1px 3px black'}}>
                     {get(weatherData, 'weather[0].main')}
                </p>}
            </div>
        </div>
    );
}

export default Weather

