import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, HashRouter, Link } from "react-router-dom";

import HopHighLadies from "./tunes/HopHighLadies";
import WorriedMansBlues from "./tunes/WorriedMansBlues";
import InteractiveEditor from "./interactive-editor/Editor";
import TextEditor from "./text-editor/Editor";
import RoseTatoo from "./tunes/RoseTatoo";

import "./App.css";
import SettingsContext from "./components/SettingsContext";
import SandyRiverBelle from "./tunes/SandyRiverBelle";
import RussianAnthem from "./tunes/RussianAnthem";
import Korobeiniki from "./tunes/Korobeiniki";
import Kalinka from "./tunes/Kalinka";
import MortalKombat from "./tunes/MortalKombat";
import Lambada from "./tunes/Lambada";
import MoonlightShadow from "./tunes/MoonlightShadow";
import PrinceIgor from "./tunes/PrinceIgor";
import Sokolov from "./tunes/Sokolov";

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
            {/* <Link to="/worried-man">Worried Man's Blues</Link> */}
            {/* :: */}
            {/* <Link to="/rose-tattoo">Rose Tattoo</Link> */}
            {/* :: */}
            <Link to="/russian-anthem">Russian Anthem</Link>
            ::
            <Link to="/korobeiniki">Korobeiniki</Link>
            ::
            {/* <Link to="/mortal-kombat">Mortal Kombat</Link> */}
            {/* :: */}
            <Link to="/lambada">Lambada</Link>
            ::
            <Link to="/prince-igor">Prince Igor</Link>
            ::
            <Link to="/sokolov">Sokolov's Polka</Link>
            {/* ::
            <Link to="/moonlight-shadow">Moonlight Shadow</Link> */}
          </span>
          <SettingsContext {...{ showNotes }}>
            <Switch>
              <TitleRoute path="/worried-man" title="Worried Man's Blues">
                <WorriedMansBlues />
              </TitleRoute>
              <TitleRoute path="/hop-high-ladies" title="Hop High Ladies">
                <HopHighLadies />
              </TitleRoute>
              <TitleRoute path="/rose-tattoo" title="Rose Tattoo">
                <RoseTatoo />
              </TitleRoute>
              <TitleRoute path="/interactive-editor" title="Interactive Editor">
                <InteractiveEditor />
              </TitleRoute>
              <TitleRoute path="/text-editor" title="Text Editor">
                <TextEditor />
              </TitleRoute>
              <TitleRoute path="/sandy-river-belle" title="Sandy River Belle">
                <SandyRiverBelle />
              </TitleRoute>
              <TitleRoute path="/russian-anthem" title="Russian Anthem">
                <RussianAnthem />
              </TitleRoute>
              <TitleRoute path="/korobeiniki" title="Korobeiniki">
                <Korobeiniki />
              </TitleRoute>
              <TitleRoute path="/kalinka" title="Kalinka">
                <Kalinka />
              </TitleRoute>
              <TitleRoute path="/mortal-kombat" title="Mortal Kombat">
                <MortalKombat />
              </TitleRoute>
              <TitleRoute path="/lambada" title="Lambada">
                <Lambada />
              </TitleRoute>
              <TitleRoute path="/moonlight-shadow" title="Moonlight Shadow">
                <MoonlightShadow />
              </TitleRoute>
              <TitleRoute path="/prince-igor" title="Prince Igor">
                <PrinceIgor />
              </TitleRoute>
              <TitleRoute path="/sokolov" title="Sokolov's Polka">
                <Sokolov />
              </TitleRoute>

              <Route path="/">
                <Redirect to="/sokolov" />
              </Route>
            </Switch>
          </SettingsContext>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
