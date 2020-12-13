import React from 'react'
import Home from './Components/Home'
import { Switch, Route } from 'react-router'

export default function Router() {
    return(
        <Switch>
            <Route exact path = "/"  component = {Home}>
                <Home />
            </Route>
        </Switch>
    )
}
