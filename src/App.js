import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Booking from './Components/Booking/Booking';
import NotFound from './Components/NotFound/NotFound';
import MovieDetails from './Components/MovieDetails/MovieDetails';

function App() {
  return (
  <Router>
    <Header/>
    <Switch>
      <Route path="/Home">
        <Home/>
      </Route>
      <Route path="/About">
        <About/>
      </Route>
      <Route path="/Booking">
        <Booking/>
      </Route>
      <Route path="/movie/:id">
        <MovieDetails/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
