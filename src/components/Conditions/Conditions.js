import classes from './Conditions.module.css';
import React from 'react';
import { isoCountries } from "../HelperData/CountryCode";

const conditions = (props) => {


        return ( <
                div className = { classes.Wrapper } > {
                    props.loading && < div className = { classes.Loader } > Loading... < /div>}       {
                        props.responseObj.cod === 200 ?
                            <
                            div > {
                                props.responseObj.main.temp && < p > It is currently { Math.round(props.responseObj.main.temp) }
                                degrees. < /p>} {
                                    props.responseObj.weather[0] && < p > Outside is { props.responseObj.weather[0].description }. < /p>} {
                                        props.responseObj.main.pressure && < p > The pressure is { props.responseObj.main.pressure }
                                        pa. < /p>} {
                                                props.responseObj.main.humidity && < p > The humidity is { props.responseObj.main.humidity }. < /p>} { props.responseObj.sys.country && < p > < strong > At { props.responseObj.name }, { isoCountries[props.responseObj.sys.country] } < /strong></p > } <
                                                    /div>: null
                                            } <
                                            /div>
                                    )
                                }

                                export default conditions;