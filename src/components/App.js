import { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import NavBar from './NavBar/NavBar';


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Route
          path="/"
          component={Home}
          exact
        />
        <Route
          path="/about"
          component={About}
          exact
        />
        <Route
          path="/projects"
          component={Projects}
          exact
        />
        <Route
          path="/skills"
          component={Skills}
          exact
        />
        <Route
          path="/contact"
          component={Contact}
          exact
        />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
