import classes from './Forecast.module.css';
import Conditions from "../Conditions/Conditions";
import React, { useState } from 'react';

const Forecast = () => {

    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});

    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {
        e.preventDefault();
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
                if (responseObj.cod !== 200) {
                    throw new Error()
                }
                setResponseObj(responseObj);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
                console.log(err.message);
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
            (e) => setCity(e.target.value) }
        /> <
        label className = { classes.Radio } >
        <
        input type = "radio"
        name = "units"
        checked = { unit === "imperial" }
        value = "imperial"
        onChange = {
            (e) => setUnit(e.target.value) }
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
            (e) => setUnit(e.target.value) }
        />
        Celcius <
        /label>

        <
        button className = { classes.Button }
        type = "submit" >
        Get Forecast <
        /button> <
        /form> <
        Conditions responseObj = { responseObj }
        error = { error } //new
        loading = { loading } //new
        /> <
        /div>
    )
}

export default Forecast;