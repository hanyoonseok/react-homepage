import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Home from './Home';
import Skin from './Skin';

function App() {
  return (
    <section>
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
