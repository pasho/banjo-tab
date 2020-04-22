import React, { useState } from 'react';
import { Switch, Route, Redirect, HashRouter, Link } from 'react-router-dom';
import HopHighLadies from "./tunes/HopHighLadies";
import WorriedMansBlues from "./tunes/WorriedMansBlues";
import './App.css';
import { StyleProvider } from './components/StyleProvider';


const App = () => {
  const [showNotes, setShowNotes] = useState(false);
  return (
    <HashRouter>
      <div className="App">
        <span>
          <Link to="/worried-man">Worried Man's Blues</Link>
          ::
          <Link to="/hop-high-ladies">Hop High Ladies</Link>
          ::
          <input type="checkbox" id="showNotes" checked={showNotes} onClick={() => setShowNotes(!showNotes)} />
          <label htmlFor="showNotes">Show Notes</label>
        </span>
        <Switch>
          <StyleProvider {...{ showNotes }}>
            <Route path="/worried-man">
              <WorriedMansBlues />
            </Route>
            <Route path="/hop-high-ladies">
              <HopHighLadies />
            </Route>
            <Route path="/">
              <Redirect to="/worried-man" />
            </Route>
          </StyleProvider>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
