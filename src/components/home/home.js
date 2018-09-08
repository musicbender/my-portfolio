import React, { Component } from 'react';
import Header from '../header';
import Work from '../work';
import Skills from '../skills';
import About from '../about';
import Footer from '../footer';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="home">
        <Header />
        <Work />
        <Skills />
        <About />
        <Footer />
      </main>
    );
  }
}
export default Home;
