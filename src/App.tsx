import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, HashRouter, Link } from 'react-router-dom';
import HopHighLadies from "./tunes/HopHighLadies";
import WorriedMansBlues from "./tunes/WorriedMansBlues";
import './App.css';
import { StyleProvider } from './components/StyleProvider';

type TitleRouteProps = {
  path: string;
  title: string;
};

const TitleRoute: React.FunctionComponent<TitleRouteProps> = ({ path, title, children }) => {
  useEffect(() => {document.title = "Banjo Tab :: " + title;}, []);
  return (
    <Route {...{ path }}>
      {children}
    </Route>
  );
}


const App = () => {
  const [showNotes, setShowNotes] = useState(false);
  return (
    <HashRouter>
      <div className="App">
        <span>
          <input type="checkbox" id="showNotes" checked={showNotes} onClick={() => setShowNotes(!showNotes)} />
          <label htmlFor="showNotes">Show Notes</label>
          <br />
          <Link to="/worried-man">Worried Man's Blues</Link>
          ::
          <Link to="/hop-high-ladies">Hop High Ladies</Link>
        </span>
        <Switch>
          <StyleProvider {...{ showNotes }}>
            <TitleRoute path="/worried-man" title="Worried Man's Blues">
              <WorriedMansBlues />
            </TitleRoute>
            <Route path="/hop-high-ladies" title="Hop High Ladies">
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
