import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieList from './movielist/MovieList';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<MovieList />, document.getElementById('root'));
registerServiceWorker();
