import * as React from "react";
import { useContext, useMemo } from "react";
import { merge } from "../utils";
import { useSheetInfo } from "./Sheet";

export const defaultBarsPerStave = 4;
export const defaultMeter = 4;

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
const getNoteWidth = (barWidth: number, meter: number) => barWidth / meter;

const padding = getPadding(lineSpacing);
const staveHeight = getStaveHeight(lineSpacing);
const sidePadding = getSidePadding(sidePaddingEnabled, padding);

const staveHeightWithPadding = staveHeight + padding;
const staveWidth = width - sidePadding * 2;
const barWidth = getBarWidth(staveWidth, defaultBarsPerStave);
const noteWidth = getNoteWidth(barWidth, defaultMeter);

const DerivedSettingsContext = React.createContext({
  padding,
  staveHeight,
  sidePadding,
  staveHeightWithPadding,
  staveWidth,
  barWidth,
  noteWidth,
});

export const useSettings = () => ({
  ...useContext(CoreSettings),
  ...useContext(DerivedSettingsContext),
});

const Settings: React.FunctionComponent<Partial<typeof coreSettings>> = (
  props
) => {
  const { barsPerStave, meter } = useSheetInfo();
  const coreSettings = merge(useCoreSettings(), props);
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
  const barWidth = useMemo(() => getBarWidth(staveWidth, barsPerStave), [
    staveWidth,
    barsPerStave,
  ]);
  const noteWidth = useMemo(() => getNoteWidth(barWidth, meter), [
    barWidth,
    meter,
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
          noteWidth,
        }}
      >
        {props.children}
      </DerivedSettingsContext.Provider>
    </CoreSettings.Provider>
  );
};

export default Settings;
