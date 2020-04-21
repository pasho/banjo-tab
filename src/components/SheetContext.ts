import * as React from "react";
import * as Settings from "../settings";

export type SheetState = {
  tuning: string;
  barsPerStave: number;
  showNotes: boolean;
}

export const defaultState: SheetState = {
  tuning: "gDGBd",
  barsPerStave: Settings.defaultBarsPerStave,
  showNotes: false
};

export const SheetContext = React.createContext<SheetState>(defaultState);