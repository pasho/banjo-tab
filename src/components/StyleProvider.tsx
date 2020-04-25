import * as React from "react";
import * as Settings from "../settings";
import { useContext } from "react";

type StyleState = {
  barsPerStave: number;
  showNotes: boolean;
}

const defaultState: StyleState = {
  barsPerStave: Settings.defaultBarsPerStave,
  showNotes: false
};

const StyleContext = React.createContext<StyleState>(defaultState);

export const useStyle = () => useContext(StyleContext);

const StyleProvider: React.FunctionComponent<Partial<StyleState>> = props => (
  <StyleContext.Provider value={{
    ...defaultState,
    ...props
  }}>{props.children}</StyleContext.Provider>
);

export default StyleProvider;