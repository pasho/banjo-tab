import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router, Link } from 'react-router-dom';
import HopHighLadies from "./tunes/HopHighLadies";
import WorriedMansBlues from "./tunes/WorriedMansBlues";
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <span>
          <Link to="/worried-man">Worried Man's Blues</Link>
          ::
          <Link to="/hop-high-ladies">Hop High Ladies</Link>
        </span>
        <Switch>
          <Route path="/worried-man">
            <WorriedMansBlues />
          </Route>
          <Route path="/hop-high-ladies">
            <HopHighLadies />
          </Route>
          <Route path="/">
            <Redirect to="/worried-man"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
