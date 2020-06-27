import * as React from "react";
import { Stave } from "./Stave";
import { useContext, useMemo } from "react";
import { useSettings } from "./SettingsContext";
import { merge } from "../utils";

const defaultSheetInfo = {
  tuning: "gDGBd",
  meter: 4,
  barsPerStave: 4,
  barWidth: 0,
  noteWidth: 0,
};

const getBarWidth = (staveWidth: number, barsPerStave: number) =>
  staveWidth / barsPerStave;
const getNoteWidth = (barWidth: number, meter: number) => barWidth / meter;

const SheetInfoContext = React.createContext(defaultSheetInfo);

export const useSheetInfo = () => useContext(SheetInfoContext);

export const Sheet: React.FunctionComponent<{
  notes: string;
  tuning?: string;
  meter?: number;
  barsPerStave?: number;
}> = (props) => {
  const { notes, children } = props;
  const { width, padding, staveHeightWithPadding, staveWidth } = useSettings();

  const sheetInfo = merge(useSheetInfo(), props);
  const { barsPerStave, meter } = sheetInfo;

  const barWidth = useMemo(() => getBarWidth(staveWidth, barsPerStave), [
    staveWidth,
    barsPerStave,
  ]);
  const noteWidth = useMemo(() => getNoteWidth(barWidth, meter), [
    barWidth,
    meter,
  ]);

  const notesArray = notes.split(";").map((s) => s.trim());

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
    <SheetInfoContext.Provider value={{ ...sheetInfo, barWidth, noteWidth }}>
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
    </SheetInfoContext.Provider>
  );
};

export const SheetTemplate: React.FunctionComponent<{
  title: string;
  description?: string;
  notes: string;
  tuning?: string;
  meter?: number;
  barsPerStave?: number;
}> = (props) => {
  const { title, description, tuning } = props;
  return (
    <>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <p>{tuning}</p>
      <Sheet {...props} />
    </>
  );
};
