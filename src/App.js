import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Skills from './Skills/Skills';
import Exp from './Exp/Exp';
import Projects from './Projects/Projects';

export default class App extends Component {
  render() {
    return (
      <>
      <div className="container">
        <Navbar/>
        <About />
        <Skills />
        <Exp />
        <Projects />
      </div>
      </>
    )
  }
}

