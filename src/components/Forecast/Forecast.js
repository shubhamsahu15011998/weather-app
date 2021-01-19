import classes from './Forecast.module.css';
import Conditions from "../Conditions/Conditions";
import Errors from '../Errors/Errors';
import React, { useState } from 'react';

const Forecast = () => {

    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});

    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(event) {

        event.preventDefault();

        if (city.length === 0) {
            return setError(true);
        }

        setError(false);

        setResponseObj({});

        setLoading(true);


        let uriEncodedCity = encodeURIComponent(city);

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                }
            })
            .then(response => response.json())
            .then(responseObj => {
                setResponseObj(responseObj);
                setLoading(false);
            });
    }

    return ( <
        div >
        <
        h2 > Find Current Weather Conditions < /h2> <
        form onSubmit = { getForecast } >
        <
        input type = "text"
        placeholder = "Enter City"
        maxLength = "50"
        className = { classes.textInput }
        value = { city }
        onChange = {
            (event) => setCity(event.target.value) }
        /> <
        label className = { classes.Radio } >
        <
        input type = "radio"
        name = "units"
        checked = { unit === "imperial" }
        value = "imperial"
        onChange = {
            (event) => setUnit(event.target.value) }
        />
        Fahrenheit <
        /label> <
        label className = { classes.Radio } >
        <
        input type = "radio"
        name = "units"
        checked = { unit === "metric" }
        value = "metric"
        onChange = {
            (event) => setUnit(event.target.value) }
        />
        Celcius <
        /label>

        <
        button className = { classes.Button }
        type = "submit" >
        Get Forecast <
        /button> <
        /form> {
            error == true ?
                <
                p > Please enter a city name < /p> :
                (responseObj.cod === 200 ?
                    <
                    Conditions responseObj = { responseObj }
                    error = { error }
                    loading = { loading }
                    /> :
                    <
                    Errors responseObj = { responseObj }
                    />   
                )
        }


        <
        /div>
    )
}

export default Forecast;