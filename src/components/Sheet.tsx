import * as React from "react";
import { Stave } from "./Stave";
import { useContext } from "react";
import Settings, {
  useSettings,
  defaultMeter,
  defaultBarsPerStave,
} from "./Settings";
import { merge } from "../utils";

const defaultSheetInfo = {
  tuning: "gDGBd",
  meter: defaultMeter,
  barsPerStave: defaultBarsPerStave,
};

const SheetInfoContext = React.createContext(defaultSheetInfo);

export const useSheetInfo = () => useContext(SheetInfoContext);

export const Sheet: React.FunctionComponent<{
  title: string;
  notes: string;
  tuning?: string;
  meter?: number;
  barsPerStave?: number;
}> = (props) => {
  const { notes, title, children } = props;
  const { width, padding, staveHeightWithPadding } = useSettings();
  const notesArray = notes.split(";").map((s) => s.trim());

  const sheetInfo = merge(useSheetInfo(), props);
  const { barsPerStave, tuning } = sheetInfo;

  const staveBarNotes = notesArray.reduce(
    (acc: string[][][], note, noteIndex) => {
      const barIndex = Math.floor(noteIndex / sheetInfo.meter);
      const noteIndexInBar = noteIndex % sheetInfo.meter;
      const staveIndex = Math.floor(barIndex / barsPerStave);
      const barIndexInStave = barIndex % barsPerStave;

      if (!acc[staveIndex]) {
        acc[staveIndex] = [];
      }

      if (!acc[staveIndex][barIndexInStave]) {
        acc[staveIndex][barIndexInStave] = [];
      }

      acc[staveIndex][barIndexInStave][noteIndexInBar] = note;
      return acc;
    },
    []
  );

  const sheetHeight =
    0.5 * padding + staveHeightWithPadding * staveBarNotes.length;

  return (
    <SheetInfoContext.Provider value={sheetInfo}>
      <Settings>
        <h1>{title}</h1>
        <p>{tuning}</p>
        <svg
          viewBox={`0 0 ${width} ${sheetHeight}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {staveBarNotes.map((barNotes, staveIndex) => {
            return (
              <Stave
                key={staveIndex}
                y={0.5 * padding + staveHeightWithPadding * staveIndex}
                barNotes={barNotes}
              />
            );
          })}
          {children}
        </svg>
      </Settings>
    </SheetInfoContext.Provider>
  );
};
