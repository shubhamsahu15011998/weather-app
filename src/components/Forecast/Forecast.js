import React, { useState } from 'react';

const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});

    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "115e5d084dmshc7574d0783db844p1da38djsne98e5d501609",
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                }
            })
            .then(response => response.json())
            .then(responseObj => {
                setResponseObj(responseObj)
            })
            .catch(err => {
                console.error(err);
            });
    }

    return ( <
        div >
        <
        h2 > Find Current Weather Conditions < /h2> <
        div > { JSON.stringify(responseObj) } <
        /div> <
        button onClick = { getForecast } > Get Forecast < /button> <
        /div>
    )
}

export default Forecast;