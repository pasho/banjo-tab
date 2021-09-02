import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, HashRouter, Link } from "react-router-dom";

import SettingsContext from "./components/SettingsContext";
import tunes from "./tunes";

import "./App.css";

type TitleRouteProps = {
  path: string;
  title: string;
};

const TitleRoute: React.FunctionComponent<TitleRouteProps> = ({
  path,
  title,
  children,
}) => {
  useEffect(() => {
    document.title = "Banjo Tab :: " + title;
  });
  return <Route {...{ path }}>{children}</Route>;
};

const App = () => {
  const [showNotes, setShowNotes] = useState(false);
  return (
    <HashRouter>
      <div className="App">
        <div className="content">
          <span>
            <input
              type="checkbox"
              id="showNotes"
              checked={showNotes}
              onChange={() => setShowNotes(!showNotes)}
            />
            <label htmlFor="showNotes">Show Notes</label>
            <br />
            {tunes.map((tune, i) => {
              const isLast = i + 1 === tunes.length;
              return (
                <>
                  <Link to={tune.path}>{tune.title}</Link>
                  {!isLast ? "::" : ""}
                </>
              );
            })}
          </span>
          <SettingsContext {...{ showNotes }}>
            <Switch>
              {tunes.map((tune) => {
                return (
                  <TitleRoute path={tune.path} title={tune.title}>
                    {tune.component}
                  </TitleRoute>
                );
              })}
              <Route exact path="/"></Route>
            </Switch>
          </SettingsContext>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
