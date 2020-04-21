import * as React from "react";
import * as Settings from "../settings";

export type StyleState = {
  barsPerStave: number;
  showNotes: boolean;
}

export const defaultState: StyleState = {
  barsPerStave: Settings.defaultBarsPerStave,
  showNotes: false
};

export const StyleContext = React.createContext<StyleState>(defaultState);