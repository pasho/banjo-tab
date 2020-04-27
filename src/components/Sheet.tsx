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

type SheetProps = {
  title: string;
  tuning?: string;
  meter?: number;
  notes: string;
}

export const Sheet: React.FunctionComponent<SheetProps> = (props) => {
  const { tuning, meter, title, children } = props;
  const { barsPerStave } = useStyle();
  const notes = props.notes.split(";").map(s => s.trim());

  const sheetContext = {
    tuning: tuning ?? defaultState.tuning,
    meter: meter ?? defaultState.meter
  };
  const staveBarNotes = notes
    .reduce(
      (acc: string[][][], note, noteIndex) => {
        const barIndex = Math.floor(noteIndex / sheetContext.meter);
        const noteIndexInBar = noteIndex % sheetContext.meter;
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
    <SheetContext.Provider value={sheetContext} >
      <h1>{title}</h1>
      <p>{tuning}</p>
      <svg viewBox={`0 0 ${Settings.width} ${sheetHeight}`} preserveAspectRatio="xMidYMid meet" style={{ width: "100%" }}>
        {staveBarNotes.map(
          (barNotes, staveIndex) => {
            return (
              <Stave key={staveIndex} y={.5 * Settings.padding() + Settings.staveHeightWithPadding() * staveIndex} barNotes={barNotes} />
            )
          }
        )}
        {children}
      </svg>
    </SheetContext.Provider >
  )

}