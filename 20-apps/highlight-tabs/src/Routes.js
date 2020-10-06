import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Features from './pages/Features';
import Home from './pages/Home';


export default function Router() {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/features">
                <Features />
            </Route>
            <Route path="/" exact={true}>
                <Home />
            </Route>
        </Switch>
    )
}