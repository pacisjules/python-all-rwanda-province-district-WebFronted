import React, { Component } from 'react'
import { Routes as RouteUrl} from '../../utils';
import { Link } from "react-router-dom";

export default class About extends Component {
    render() {
        return (

            <div>
                I am on About.
                <Link to={RouteUrl.Home}>GO TO HOME</Link>
                <p>Wow it's working</p>
            </div>
            
        )
    }
}
