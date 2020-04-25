import * as React from "react";
import * as Settings from "../settings";
import { Stave } from "./Stave";
import { useStyle } from "./StyleProvider";
import { useContext, useState } from "react";

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

type Editor = {
  position: number;
  addNote: (note: string) => void;
  move: (direction: "left" | "right" | "up" | "down") => void;
  del: () => void;
  backspace: () => void;
}

const EditorContext = React.createContext<Editor>({
  position: 0,
  addNote: _ => { },
  move: _ => { },
  del: () => { },
  backspace: () => { }
});

export const useEditor = () => useContext(EditorContext);

type SheetProps = {
  title: string;
  tuning?: string;
  meter?: number;
  notes: string;
}

export const Sheet: React.FunctionComponent<SheetProps> = (props) => {
  const { tuning, meter, title, children } = props;
  const { barsPerStave } = useStyle();
  const [notes, setNotes] = useState(props.notes.split(";").map(s => s.trim()));
  const [position, setPosition] = useState(0);
  const maxPosition = notes.length;

  const sheetContext = {
    tuning: tuning ?? defaultState.tuning,
    meter: meter ?? defaultState.meter,
    notes,
    setNotes
  };
  const editorContext: Editor = {
    position,
    move: (direction) => {
      switch (direction) {
        case "left":
          setPosition(Math.max(0, position - 1));
          break;
        case "right":
          setPosition(Math.min(maxPosition, position + 1));
          break;
      }
    },
    addNote: (note) => {
      setNotes(notes =>
        [
          ...notes.slice(0, position),
          note,
          ...notes.slice(position)
        ]
      );
      setPosition(Math.min(maxPosition, position + 1));
    },
    del: () => {
      if (position < notes.length) {
        setNotes(notes =>
          [
            ...notes.slice(0, position),
            ...notes.slice(position + 1)
          ]);
      }
    },
    backspace: () => {
      setNotes(notes =>
        [
          ...notes.slice(0, position - 1),
          ...notes.slice(position)
        ]);
      setPosition(Math.max(0, position - 1));
    }
  }
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
      <EditorContext.Provider value={editorContext}>
        <h1>{title}</h1>
        <p>{tuning}</p>
        <svg viewBox={`0 0 ${Settings.width} ${sheetHeight}`} preserveAspectRatio="xMidYMid meet" style={{ maxWidth: `${Settings.width}px` }}>
          {staveBarNotes.map(
            (barNotes, staveIndex) => {
              return (
                <Stave key={staveIndex} y={.5 * Settings.padding() + Settings.staveHeightWithPadding() * staveIndex} barNotes={barNotes} />
              )
            }
          )}
          {children}
        </svg>
      </EditorContext.Provider>
    </SheetContext.Provider >
  )

}