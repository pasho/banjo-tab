import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, HashRouter, Link } from 'react-router-dom';
import HopHighLadies from "./pages/tunes/HopHighLadies";
import WorriedMansBlues from "./pages/tunes/WorriedMansBlues";
import './App.css';
import { StyleProvider } from './components/StyleProvider';
import Editor from './pages/Editor';

type TitleRouteProps = {
  path: string;
  title: string;
};

const TitleRoute: React.FunctionComponent<TitleRouteProps> = ({ path, title, children }) => {
  useEffect(() => { document.title = "Banjo Tab :: " + title; });
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
          <input type="checkbox" id="showNotes" checked={showNotes} onChange={() => setShowNotes(!showNotes)} />
          <label htmlFor="showNotes">Show Notes</label>
          <br />
          <Link to="/worried-man">Worried Man's Blues</Link>
          ::
          <Link to="/hop-high-ladies">Hop High Ladies</Link>
          ::
          <Link to="/editor">Editor</Link>
        </span>
        <StyleProvider {...{ showNotes }}>
          <Switch>
            <TitleRoute path="/worried-man" title="Worried Man's Blues">
              <WorriedMansBlues />
            </TitleRoute>
            <TitleRoute path="/hop-high-ladies" title="Hop High Ladies">
              <HopHighLadies />
            </TitleRoute>
            <TitleRoute path="/editor" title="Editor">
              <Editor />
            </TitleRoute>
            <Route path="/">
              <Redirect to="/worried-man" />
            </Route>
          </Switch>
        </StyleProvider>
      </div>
    </HashRouter>
  );
}

export default App;
