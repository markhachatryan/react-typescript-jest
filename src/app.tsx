import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/home';

const Repo = () => <div>Repo</div>;

class App extends React.Component <any> {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact phat="/" component={Home}/>
            <Route phat="/repository/:id" component={Repo}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;