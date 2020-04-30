import * as React from "react";
import { useContext, useMemo } from "react";
import { merge } from "../utils";

const coreSettings = {
  width: 800,
  lineSpacing: 10,
  sidePaddingEnabled: true,
  barsPerStave: 4,
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
}: Pick<
  typeof coreSettings,
  "width" | "lineSpacing" | "sidePaddingEnabled"
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
  const mergedCoreSettings = merge(useCoreSettings(), props);

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
