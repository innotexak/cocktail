import './index.css';

import Home from './pages/Home';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';
import About from './pages/About';

import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/single-cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
