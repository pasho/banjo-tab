import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import SettingsContext from "./SettingsContext";
import tunes from "./tunes";
import { TopBar } from "./TopBar";

import "./App.css";
import { TunesList } from "./TunesList";
import { TuneView } from "./TuneView";

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
      <SettingsContext {...{ showNotes }}>
        <Switch>
          {tunes.map((tune) => (
            <Route key={tune.path} path={tune.path}>
              <TuneView {...{ tune }} />
            </Route>
          ))}
          <Route exact path="/">
            <TunesList {...{ tunes }} />
          </Route>
        </Switch>
      </SettingsContext>
    </>
  );
};

export default App;
