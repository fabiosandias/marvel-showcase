import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Cart from '../cart/Cart';
import ProductDetail from '../product-detail/ProductDetail';
import Showcase from '../showcase/Showcase';

export default props =>  {
    return (
            <Switch>
                {/*<Route component={() => (<div>Page 404</div>)} />*/}
                <Route path="/" component={Showcase} exact />
                <Route path="/product-detail/:comicId" component={ProductDetail} />
                <Route path="/cart" component={Cart} />
            </Switch>
    )
}
