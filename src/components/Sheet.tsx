import * as React from "react";
import * as Settings from "../settings";
import { Stave } from "./Stave";
import { useStyle } from "./StyleProvider";
import { useContext } from "react";

type SheetState = {
  tuning: string;
  meter: number;
}

const defaultState: SheetState = {
  tuning: "gDGBd",
  meter: 4
};

const SheetContext = React.createContext<SheetState>(defaultState);

export const useSheet = () => useContext(SheetContext);

export const Sheet = ({ title, tuning, notes, meter }: {
  title: string;
  tuning?: string;
  meter?: number;
  notes: string;
}) => {
  const { barsPerStave } = useStyle();
  const sheetState = {
    tuning: tuning ?? defaultState.tuning, 
    meter: meter ?? defaultState.meter
  };
  const staveBarNotes = notes.split(";").map(s => s.trim())
    .reduce(
      (acc: string[][][], note, noteIndex) => {
        const barIndex = Math.floor(noteIndex / sheetState.meter);
        const noteIndexInBar = noteIndex % sheetState.meter;
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

  const sheetHeight = .5 * Settings.padding() + Settings.staveHeightWithPadding() * staveBarNotes.length;

  return (
    <SheetContext.Provider value={sheetState} >
      <h1>{title}</h1>
      <p>{tuning}</p>
      <svg viewBox={`0 0 ${Settings.width} ${sheetHeight}`} preserveAspectRatio="xMidYMid meet" style={{maxWidth: `${Settings.width}px`}}>
        {staveBarNotes.map(
          (barNotes, staveIndex) => {
            return (
              <Stave key={staveIndex} y={.5 * Settings.padding() + Settings.staveHeightWithPadding() * staveIndex} barNotes={barNotes} />
            )
          }
        )}
      </svg>
    </SheetContext.Provider >
  )

}