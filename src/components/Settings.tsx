import * as React from "react";
import { useContext, useMemo } from "react";

const coreSettings = {
  width: 800,
  lineSpacing: 10,
  sidePaddingEnabled: true,
  barsPerStave: 4,
  meter: 4,
  // Accounts for font size and svg discrepancies.
  textCharCentreOffset: {
    x: -3.5,
    y: 4,
  },
  // Accounts for different widths of vertical and horizontal lines and ugly edges.
  noteHorizontalLineAdjustment: 0.5,
  showNotes: false,
};

const CoreSettings = React.createContext(coreSettings);

const useCoreSettings = () => useContext(CoreSettings);

const getDerivedSettings = ({
  width,
  lineSpacing,
  sidePaddingEnabled,
  barsPerStave,
  meter,
}: Pick<
  typeof coreSettings,
  "width" | "lineSpacing" | "sidePaddingEnabled" | "meter" | "barsPerStave"
>) => {
  const padding = 5 * lineSpacing;
  const staveHeight = lineSpacing * 4;
  const sidePadding = sidePaddingEnabled ? padding : 0;
  return {
    padding,
    staveHeight,
    sidePadding,
    staveHeightWithPadding: staveHeight + padding,
    staveWidth: width - sidePadding * 2,
    noteWidth: width / barsPerStave / meter,
  };
};

const SettingsContext = React.createContext({
  ...coreSettings,
  ...getDerivedSettings(coreSettings),
});

export const useSettings = () => useContext(SettingsContext);

const Settings: React.FunctionComponent<Partial<typeof coreSettings>> = (
  props
) => {
  const parentCoreSettings = useCoreSettings();

  const mergedCoreSettings = (Object.keys(
    coreSettings
  ) as (keyof typeof coreSettings)[]).reduce(
    (acc, key) =>
      props[key] !== undefined ? { ...acc, ...{ [key]: props[key] } } : acc,
    { ...parentCoreSettings }
  );

  const derivedSettings = useMemo(
    () => getDerivedSettings(mergedCoreSettings),
    [mergedCoreSettings]
  );

  const settings = {
    ...mergedCoreSettings,
    ...derivedSettings,
  };
  return (
    <CoreSettings.Provider value={mergedCoreSettings}>
      <SettingsContext.Provider value={settings}>
        {props.children}
      </SettingsContext.Provider>
    </CoreSettings.Provider>
  );
};

export default Settings;
