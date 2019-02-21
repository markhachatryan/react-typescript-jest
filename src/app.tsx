import * as React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/home/home';
import Owner from './components/owner/owner';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/owner/:login" component={Owner}/>
          <Route render={() => <div>OOPS ......</div>}/>
        </Switch>
      </Router>
    </div>
  )
};

export default App;