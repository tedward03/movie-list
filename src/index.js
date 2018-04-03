import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './react-components/todolist/ToDoList';
import Movies from './react-components/movielist/Movies'
import SimpleApiApp from './react-components/simpleapi/SimpleApiApp'
import ClickApp from './react-components/clique/ClickApp'


import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Movies />, document.getElementById('root'));
registerServiceWorker();
