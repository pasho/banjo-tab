import * as React from "react";
import * as Settings from "../settings";

export type SheetState = {
  tuning: string;
}

export const defaultState: SheetState = {
  tuning: "gDGBd"
};

export const SheetContext = React.createContext<SheetState>(defaultState);