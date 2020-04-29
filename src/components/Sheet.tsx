import * as React from "react";
import { Stave } from "./Stave";
import { useContext } from "react";
import { useSettings } from "./Settings";

type SheetState = {
  tuning: string;
  meter: number;
};

const defaultState: SheetState = {
  tuning: "gDGBd",
  meter: 4,
};

const SheetContext = React.createContext<SheetState>(defaultState);

export const useSheet = () => useContext(SheetContext);

type SheetProps = {
  title: string;
  tuning?: string;
  meter?: number;
  notes: string;
};

export const Sheet: React.FunctionComponent<SheetProps> = (props) => {
  const { tuning, meter, title, children } = props;
  const settings = useSettings();
  const notes = props.notes.split(";").map((s) => s.trim());

  const sheetContext = {
    tuning: tuning ?? defaultState.tuning,
    meter: meter ?? defaultState.meter,
  };
  const staveBarNotes = notes.reduce((acc: string[][][], note, noteIndex) => {
    const barIndex = Math.floor(noteIndex / sheetContext.meter);
    const noteIndexInBar = noteIndex % sheetContext.meter;
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
  }, []);

  const sheetHeight =
    0.5 * settings.padding +
    settings.staveHeightWithPadding * staveBarNotes.length;

  return (
    <SheetContext.Provider value={sheetContext}>
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
    </SheetContext.Provider>
  );
};
