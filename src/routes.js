import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { RouterMiddleware } from '@/helpers/router/middleware';

import App from '@/modules/core/components/App';
import { Error, Home, Ticket, Artist, Package, Events, Sales, NotFound } from '@/modules/core/pages';

const middleware = new RouterMiddleware();

const routes = (
    <Route onEnter={middleware.onEnter} onChange={middleware.onChange}>
        <Route path="error" component={Error} />
        <Route path="/" component={App}>
            <IndexRoute label="Home" component={Home} />
            <Route path="/tickets" component={Ticket} />
            <Route path="/artist" component={Artist} />
            <Route path="/package" component={Package} />
            <Route path="/events" component={Events} />
            <Route path="/sales" component={Sales} />


            <Route path="*" component={NotFound} status={404} />
        </Route>
    </Route>
);

export default routes;
export { middleware };
