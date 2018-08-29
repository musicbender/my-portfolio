import React, { Component } from 'react';
import Header from '../header';
import Work from '../work';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main">
        <Header />
        <Work />
      </main>
    );
  }
}
export default Home;
