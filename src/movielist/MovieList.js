import React, { Component } from 'react';
import './MovieList.css';
import movies from '../resources/movies.json';


function SideBar(movies){
  console.log(movies);
    return (
      <div id="side-bar-container" className="col-sm-3 sidenav">
        <h4 id="side-bar-title">Movie List</h4>
      </div>
      );
}

function renderListItem({movies}){
  console.log(movies)
    return (
      movies.map((movie) => (
        <li>movie.movie_id</li>
      ))
    );
}


function List(movies) {
  console.log(movies);
    return (
        <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-2 text-center">
                sdlkfwjfwkjlf
              </div>
              <div className="col-sm-10">
                <ul>
                  {renderListItem(movies)}
                </ul>
              </div>
              <div className="col-sm-2 text-center">
                stuff
              </div>
              <div className="col-sm-10">
                <div className="row">
                  <div className="col-sm-2 text-center">
                          blah blah 
                  </div>
                  <div className="col-xs-10">
                     bunch of stuff
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
}

class MovieList extends Component {

  render() {
    return (
      <div id="full-app" className="container-fluid">
        <div id="" className="row content">
         <SideBar movies={movies} />
         <List  movies={movies} />
        </div>
      </div>
    );
  };
}

// <footer class="container-fluid">
//   <p>Footer Text</p>
// </footer>





export default MovieList;
