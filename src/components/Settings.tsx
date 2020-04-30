import * as React from "react";
import { useContext, useMemo } from "react";
import { merge } from "../utils";

const width = 800;
const lineSpacing = 10;
const sidePaddingEnabled = true;
const barsPerStave = 4;
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
  barsPerStave,
  textCharCentreOffset,
  noteHorizontalLineAdjustment,
  showNotes,
};

const CoreSettings = React.createContext(coreSettings);

const useCoreSettings = () => useContext(CoreSettings);

const getPadding = (lineSpacing: number) => 5 * lineSpacing;
const getStaveHeight = (lineSpacing: number) => lineSpacing * 4;
const getSidePadding = (sidePaddingEnabled: boolean, padding: number) =>
  sidePaddingEnabled ? padding : 0;
const getStaveHeightWithPadding = (staveHeight: number, padding: number) =>
  staveHeight + padding;
const getStaveWidth = (width: number, sidePadding: number) =>
  width - sidePadding;
const getBarWidth = (staveWidth: number, barsPerStave: number) =>
  staveWidth / barsPerStave;

const padding = getPadding(coreSettings.lineSpacing);
const staveHeight = getStaveHeight(coreSettings.lineSpacing);
const sidePadding = getSidePadding(coreSettings.sidePaddingEnabled, padding);

const staveHeightWithPadding = staveHeight + padding;
const staveWidth = coreSettings.width - sidePadding * 2;
const barWidth = getBarWidth(staveWidth, coreSettings.barsPerStave);

const DerivedSettingsContext = React.createContext({
  padding,
  staveHeight,
  sidePadding,
  staveHeightWithPadding,
  staveWidth,
  barWidth,
});

export const useSettings = () => ({
  ...useContext(CoreSettings),
  ...useContext(DerivedSettingsContext),
});

const Settings: React.FunctionComponent<Partial<typeof coreSettings>> = (
  props
) => {
  const coreSettings = merge(useCoreSettings(), props);
  const { lineSpacing, sidePaddingEnabled, width, barsPerStave } = coreSettings;

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
  const barWidth = useMemo(() => getBarWidth(staveWidth, barsPerStave), [
    staveWidth,
    barsPerStave,
  ]);
  return (
    <CoreSettings.Provider value={coreSettings}>
      <DerivedSettingsContext.Provider
        value={{
          padding,
          staveHeight,
          sidePadding,
          staveHeightWithPadding,
          staveWidth,
          barWidth,
        }}
      >
        {props.children}
      </DerivedSettingsContext.Provider>
    </CoreSettings.Provider>
  );
};

export default Settings;
