import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import SettingsContext from "./SettingsContext";
import tunes from "./tunes";
import { TopBar } from "./TopBar";

import "./App.css";
import { TunesList } from "./TunesList";

const App = () => {
  const [showNotes, setShowNotes] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const tune = tunes.find((tune) => tune.path === location.pathname);
    const title = tune?.title;

    document.title = title ? `Banjo Tabs :: ${title}` : "Banjo Tabs";
  }, [location]);

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
              <Route exact path="/">
                <TunesList {...{ tunes }} />
              </Route>
            </Switch>
          </SettingsContext>
        </div>
      </div>
    </>
  );
};

export default App;
