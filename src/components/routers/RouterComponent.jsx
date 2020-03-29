import React from 'react'
// import { Router, Route } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";

import Cart from '../cart/Cart';
import ProductDetail from '../product-detail/ProductDetail';
import Showcase from '../showcase/Showcase';
import App from "../../App";

const customHistory = createBrowserHistory();

export default props =>  {
    return (
        <BrowserRouter history={customHistory}>
            <Switch>
                <Route exact path="/" component={Showcase} />
                <Route exact path="/product-detail/:comicId" component={ProductDetail} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}
