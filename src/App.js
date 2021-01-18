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
        Logo / >
        <
        h1 > React Weather App < /h1> <
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