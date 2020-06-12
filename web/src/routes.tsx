import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';

import Home from '../src/pages/Home';
import CreatePoint from '../src/pages/CreatePoint';

const Routs = () => {

   return (
       <BrowserRouter>
            <Route component={Home} path='/' exact/>
            <Route component={CreatePoint} path='/create-point'/>
       </BrowserRouter>
   )     


}

export default Routs;