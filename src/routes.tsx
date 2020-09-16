import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import PlanosControle from './Pages/PlanosControle';
import PlanosPos from './Pages/PlanosPos';
import Aparelhos from './Pages/Aparelhos';
import Checkout from './Pages/Checkout';


const Routes = () => {

    return (

        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route path="/planos-controle" component={PlanosControle} />
            <Route path="/planos-pos" component={PlanosPos} />
            <Route path="/aparelhos" component={Aparelhos} />
            <Route path="/checkout" component={Checkout} />
        </BrowserRouter>
    )
}

export default Routes;