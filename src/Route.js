import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Product from './Components/Product';
import ProductItems from './Components/ProductItems';
import NavBar from './Components/NavBar'

function RouteConfig() {
    
    return (
        <div>
            <Router>
            <NavBar></NavBar>
            <div><h4>Shoe Store - Kashif Hussain</h4></div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/product" component={Product} />
                    <Route path="/product/:id" component={ProductItems} />
                    <Route path="*" component={()=><h2>404 Not Found</h2>} />
                </Switch>
            </Router>
        </div>
    )
}

export default RouteConfig;
