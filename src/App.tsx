import React, { useState, useEffect } from "react";
import { Switch, Route, HashRouter, useLocation } from "react-router-dom";

import SettingsContext from "./components/SettingsContext";
import tunes from "./tunes";
import { TopBar } from "./TopBar";

import "./App.css";

const App = () => {
  const [showNotes, setShowNotes] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const tune = tunes.find((tune) => tune.path === location.pathname);
    const title = tune?.title;

    document.title = title ? `Banjo Tabs :: ${title}` : "Banjo Tabs";
  }, [location, tunes]);

  return (
    <>
      <TopBar {...{ tunes, showNotes, setShowNotes }} />
      <div className="App">
        <div className="content">
          <SettingsContext {...{ showNotes }}>
            <Switch>
              {tunes.map((tune) => {
                return <Route path={tune.path}>{tune.component}</Route>;
              })}
              <Route exact path="/"></Route>
            </Switch>
          </SettingsContext>
        </div>
      </div>
    </>
  );
};

export default App;
