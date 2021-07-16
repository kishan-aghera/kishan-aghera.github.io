import { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';

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
      <HashRouter>
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
      </HashRouter>
    </Fragment>
  );
}

export default App;
