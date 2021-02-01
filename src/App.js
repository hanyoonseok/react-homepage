import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Services from './Services';
import Products from './Products';
import Signup from './Signup';

function App() {
  return (
    <section>
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/sign-up' component={Signup}/>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
