import React, { Component} from 'react'
import { Link } from "react-router-dom";

export default class Notfoundpage extends  Component {

    render(){

    return (
        <div className='bodymaster'>
            <center>
            <h1>404</h1>
            <center><Link to='/' className='homebtn'>Click here to stay with us.</Link></center>
            
            <div className='Oops'>
            The page you're looking for can't be found
            <br/>
            </div>
            <br/>
            
            <h3>AUTOMATED BILLING SYSTEM.</h3>
            </center>

        </div>
    )
}
}
