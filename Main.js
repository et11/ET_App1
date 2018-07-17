import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import About from './About';
import Paintings from './Paintings';
import Drawings from './Drawings';

const Main = () => (
    <Switch>
        <Route exact path = "/" component={LandingPage} />
        <Route path = "/" component={Paintings} />
        <Route path = "/" component={Drawings} />
        <Route path = "/" component={About} />
    </Switch>
);
export default Main;
