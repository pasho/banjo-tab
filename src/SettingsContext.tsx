import * as React from "react";
import { useContext, useMemo } from "react";
import { merge } from "./utils";

const width = 800;
const lineSpacing = 10;
const sidePaddingEnabled = true;
// Accounts for font size and svg discrepancies.
const textCharCentreOffset = {
  x: -3.5,
  y: 4,
};
// Accounts for different widths of vertical and horizontal lines and ugly edges.
const noteHorizontalLineAdjustment = 0.5;
const showNotes = false;

const coreSettings = {
  width,
  lineSpacing,
  sidePaddingEnabled,
  textCharCentreOffset,
  noteHorizontalLineAdjustment,
  showNotes,
};

const getPadding = (lineSpacing: number) => 5 * lineSpacing;
const getStaveHeight = (lineSpacing: number) => lineSpacing * 4;
const getSidePadding = (sidePaddingEnabled: boolean, padding: number) =>
  sidePaddingEnabled ? padding : 0;
const getStaveHeightWithPadding = (staveHeight: number, padding: number) =>
  staveHeight + padding;
const getStaveWidth = (width: number, sidePadding: number) =>
  width - sidePadding;

const padding = getPadding(lineSpacing);
const staveHeight = getStaveHeight(lineSpacing);
const sidePadding = getSidePadding(sidePaddingEnabled, padding);

const staveHeightWithPadding = staveHeight + padding;
const staveWidth = width - sidePadding * 2;

const derivedSettings = {
  padding,
  staveHeight,
  sidePadding,
  staveHeightWithPadding,
  staveWidth,
};

const Settings = React.createContext({
  ...coreSettings,
  ...derivedSettings,
});

export const useSettings = () => useContext(Settings);

const SettingsContext: React.FunctionComponent<Partial<typeof coreSettings>> = (
  props
) => {
  const coreSettings = merge(useSettings(), props);
  const { lineSpacing, sidePaddingEnabled, width } = coreSettings;

  const padding = useMemo(() => getPadding(lineSpacing), [lineSpacing]);
  const staveHeight = useMemo(() => getStaveHeight(lineSpacing), [lineSpacing]);
  const sidePadding = useMemo(
    () => getSidePadding(sidePaddingEnabled, lineSpacing),
    [sidePaddingEnabled, lineSpacing]
  );
  const staveHeightWithPadding = useMemo(
    () => getStaveHeightWithPadding(staveHeight, padding),
    [staveHeight, padding]
  );
  const staveWidth = useMemo(() => getStaveWidth(width, sidePadding), [
    width,
    sidePadding,
  ]);

  return (
    <Settings.Provider
      value={{
        ...coreSettings,
        padding,
        staveHeight,
        sidePadding,
        staveHeightWithPadding,
        staveWidth,
      }}
    >
      {props.children}
    </Settings.Provider>
  );
};

export default SettingsContext;
