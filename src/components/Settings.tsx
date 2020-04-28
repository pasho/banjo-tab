import * as React from "react";
import { useContext } from "react";

const settings = {
  width: 800,
  lineSpacing: 10,
  padding: () => 5 * settings.lineSpacing,
  staveHeight: () => settings.lineSpacing * 4,
  staveHeightWithPadding: () => settings.staveHeight() + settings.padding(),
  staveWidth: () => settings.width - settings.padding() * 2,
  barsPerStave: 4,
  // Accounts for font size and svg discrepancies.
  textCharCentreOffset: {
    x: -3.5,
    y: 4
  },
  // Accounts for different widths of vertical and horizontal lines and ugly edges.
  noteHorizontalLineAdjustment: 0.5,
  showNotes: false
};

const SettingsContext = React.createContext(settings);

export const useSettings = () => useContext(SettingsContext);

const Settings: React.FunctionComponent<Partial<typeof settings>> = props => (
  <SettingsContext.Provider value={{
    ...settings,
    ...props
  }}>{props.children}</SettingsContext.Provider>
);

export default Settings;