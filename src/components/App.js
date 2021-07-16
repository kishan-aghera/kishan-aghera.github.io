import { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import NavBar from './NavBar/NavBar';

import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
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
        <Route
          path="/"
          component={Home}
          exact
        />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
