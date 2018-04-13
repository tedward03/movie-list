import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './react-applications/todolist/ToDoList';
import Movies from './react-applications/movielist/Movies'
import SimpleApiApp from './react-applications/simpleapi/SimpleApiApp'
import ClickApp from './react-applications/clique/ClickApp'


import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Movies />, document.getElementById('root'));
registerServiceWorker();
