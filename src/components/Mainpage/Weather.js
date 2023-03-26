import { useState, useEffect } from 'react'
import { findCityWeather } from '../../actions/Mainpage/weather_api';
import { get } from 'lodash';
import { reverseGeocoding } from '../../actions/Mainpage/reverse_geocoding_api';
import Clear from '../../images/clear.jpeg'
import Clouds from '../../images/cloudy.jpg'

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
            console.log("hhhhhhhhhhhhhhhhhhhhhhhhhkj")
            let data = get(res, 'data', [])
            setWeatherData(data)
        }).catch((error)=>{
            console.log(error,"errorrrrrrrrrrrrrrrr")
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
    const backGroundImage = () => {
        return get(weatherData, 'weather[0].main')
    }

    return (
        <div
            className="ip-address"
            style={{
                //backgroundColor: 'lightskyblue',
                margin: 0,
                backgroundImage: `url(${backGroundImage() === 'Clouds' ? Clouds : Clear})`,
                backgroundSize: 'cover',

            }}
        >
            <div style={{ display: 'flex', margin: '7px', height: '30px' }}>
                <input placeholder='Cityname' style={{ width: '100%', borderRadius: '10px' }} onKeyDownCapture={findTemperatureEnter} onChange={handleCityname}></input>
                <button onClick={findTemperature} onMouseEnter style={{ backgroundColor: 'lightgreen', borderRadius: '10px' }} >Search</button>
            </div>
            <div >
                <h1 style={{ margin: 0 }}> {cityName ? weatherData.name : get(currentCity, 'address.city', '')}</h1>
                {getTempInCelcius() && <p style={{ }}>
                    <strong>Current Temp :</strong> {getTempInCelcius()} <sup>O</sup>C
                </p>}
                { <p style={{}}>
                    <strong>Humidity :</strong> {get(weatherData,'main.humidity')}
                </p>}
            </div>
        </div>
    );
}

export default Weather

