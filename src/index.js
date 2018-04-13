import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Movies from './react-applications/movielist/Movies';
import Landing from './react-applications/landing/Landing';
import ClickApp from './react-applications/clique/ClickApp';
import {BrowserRouter,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/movies" component={Movies} />
            <Route path="/clickapp" component={ClickApp} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
