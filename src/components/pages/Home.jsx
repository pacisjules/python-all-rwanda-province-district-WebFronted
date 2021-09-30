import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Routes as RouteUrl} from '../../utils';


export default class Home extends Component {
    render() {
        return (
            
            <div>
                Hallo I am Home...
                <Link to={RouteUrl.About}>GO TO ABAUT</Link>
            </div>

        )
    }
}
