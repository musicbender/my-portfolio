import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// components
import Home from './home';
import CaseStudy from './case-study';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="">
        <Route exact path="/" component={Home} />
        {/* <Route path="/case-study/:case" component={CaseStudy}/> */}
      </main>
    );
  }
}

export default App;
