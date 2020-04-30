import * as React from "react";
import { Stave } from "./Stave";
import { useContext } from "react";
import { useSettings } from "./Settings";
import { merge } from "../utils";

const defaultSheetInfo = {
  tuning: "gDGBd",
  meter: 4,
};

const SheetInfoContext = React.createContext(defaultSheetInfo);

export const useSheetInfo = () => useContext(SheetInfoContext);

type SheetProps = {
  title: string;
  tuning?: string;
  meter?: number;
  notes: string;
};

export const Sheet: React.FunctionComponent<{
  title: string;
  tuning?: string;
  meter?: number;
  notes: string;
}> = ({ notes, tuning, meter, title, children }) => {
  const settings = useSettings();
  const notesArray = notes.split(";").map((s) => s.trim());

  const sheetInfo = merge(useSheetInfo(), { tuning, meter });

  const staveBarNotes = notesArray.reduce(
    (acc: string[][][], note, noteIndex) => {
      const barIndex = Math.floor(noteIndex / sheetInfo.meter);
      const noteIndexInBar = noteIndex % sheetInfo.meter;
      const staveIndex = Math.floor(barIndex / settings.barsPerStave);
      const barIndexInStave = barIndex % settings.barsPerStave;

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
    0.5 * settings.padding +
    settings.staveHeightWithPadding * staveBarNotes.length;

  return (
    <SheetInfoContext.Provider value={sheetInfo}>
      <h1>{title}</h1>
      <p>{tuning}</p>
      <svg
        viewBox={`0 0 ${settings.width} ${sheetHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {staveBarNotes.map((barNotes, staveIndex) => {
          return (
            <Stave
              key={staveIndex}
              y={
                0.5 * settings.padding +
                settings.staveHeightWithPadding * staveIndex
              }
              barNotes={barNotes}
            />
          );
        })}
        {children}
      </svg>
    </SheetInfoContext.Provider>
  );
};
