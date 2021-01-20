import classes from './Errors.css';
import React from 'react';

const Errors = (props) => {

    return ( <
        div className = { classes.Wrapper } >
        <
        div >
        <
        p > < strong > { props.responseObj.message } < /strong></p >
        <
        /div> <
        /div>
    )
}

export default Errors;