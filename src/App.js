import React, { Component } from 'react'
import axios from 'axios';

import {Routes} from './routes';


axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
export default class App extends Component {

  render() {

    
    return (

      <div>
        <Routes/>
      </div>

    );
  }
}
