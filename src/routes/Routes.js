import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Routes as RouteUrl} from '../utils'
import {Home, About, Notfoundpage} from '../components/pages'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>

                        
                        {/* Home Path as home root */}
                        <Route path='/' exact>
                            <Home />
                        </Route>
                        {/*End of Home Path as Home root */}

                        {/* About Path */}
                        <Route path={RouteUrl.About} exact>
                            <About />
                        </Route>
                        {/*End of About */}



                        <Route component={Notfoundpage} />
                        <Route exact path="/404" component={Notfoundpage} />



                    </Switch>
                </Router>
            </div>
        )
    }
}