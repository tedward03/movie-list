import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Movies from './react-applications/movielist/Movies';
import Landing from './react-applications/landing/Landing';
import ClickApp from './react-applications/clique/ClickApp';
import TodoList from './react-applications/todolist/Todo.component';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoReducer from "./react-applications/todolist/Todo.reducer";

const store = createStore(todoReducer);

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/movies" component={Movies}/>
                <Route path="/clickapp" component={ClickApp}/>
                <Route path="/slides" component={SlideShow}/>
                <Route path="/todo" component={TodoList}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
