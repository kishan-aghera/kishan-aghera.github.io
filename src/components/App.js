import { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/about"
          component={About}
        />
        <Route
          path="/projects"
          component={Projects}
        />
        <Route
          path="/skills"
          component={Skills}
        />
        <Route
          path="/contact"
          component={Contact}
        />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
