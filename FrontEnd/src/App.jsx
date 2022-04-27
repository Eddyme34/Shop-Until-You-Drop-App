import React, { useState } from 'react';
import './App.css';
import useAsyncFetch from './useAsyncFetch'; // a custom hook
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Shop from './pages/Shop';  //importing shop page
import Price from './pages/Price';  //importing price page
import Income from './pages/Income';
import Total from './pages/Total';

function App() {

  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Shop} />   
        <Route exact path="/income" component={Income} />
        <Route exact path="/price" component={Price} />
        <Route exact path="/total" component={Total} />
      </Switch>
    </Router>
  )
}

// A component that fetches its own data
function MovieList() {

  console.log("in MovieList");

  // static var will contain the list of movies
  const [movies, setMovies] = useState([]);

  // call the custom fetch hook, passing it the callback functions that it can use
  useAsyncFetch("query?key=BZacuXZnENzSYeVWjDoAHxi7cMpEilN4U8BtvRP0",  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }, thenFun, catchFun);
  

  function thenFun (result) {
    console.log(result.results[0]['2018.cost.tuition.in_state'])
    setMovies(result.results[0]);
  }

  function catchFun (error) {
    console.log(error);
  }

  // finally, render the list
  return (
    <main>
      <p>Tuition: {movies['2018.cost.tuition.in_state']}</p>
      <p>Fees, Supplies, and Living Expenses: {movies["2018.cost.attendance.academic_year"] - movies['2018.cost.tuition.in_state']}</p>
      <p>Total Retail Price: {movies["2018.cost.attendance.academic_year"]}</p>
    </main>
  )
}

export default App;