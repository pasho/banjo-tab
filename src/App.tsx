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
import Anthems from "./tunes/Anthems";

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
            <Link to="/worried-man">Worried Man's Blues</Link>
            ::
            <Link to="/hop-high-ladies">Hop High Ladies</Link>
            ::
            <Link to="/rose-tattoo">Rose Tattoo</Link>
            ::
            <Link to="/sandy-river-belle">Sandy River Belle</Link>
            ::
            <Link to="/anthems">Anthems</Link>
            {/* ::
          <Link to="/interactive-editor">Interactive Editor</Link> */}
            ::
            <Link to="/text-editor">Text Editor</Link>
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
              <TitleRoute path="/anthems" title="Anthems">
                <Anthems />
              </TitleRoute>
              <Route path="/">
                <Redirect to="/worried-man" />
              </Route>
            </Switch>
          </SettingsContext>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
