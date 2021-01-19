import logo from './logo.svg';
import './App.css';
import React from 'react';
import Logo from './components/Logo';
import Forecast from "./components/Forecast/Forecast";

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        h1 > React Weather App < /h1> <
        div class = "header-img" >
        <
        img src = "https://www.noaa.gov/sites/default/files/styles/crop_394x394/public/thumbnails/image/FocusArea__Weather-02.jpg"
        alt = "Weather"
        width = "200px"
        height = "200px" >
        <
        /img> <
        /div> <
        /header> <
        main >
        <
        Forecast / >
        <
        /main>

        <
        footer >
        Page created by Shubham <
        /footer>

        <
        /div>
    );
}

export default App;