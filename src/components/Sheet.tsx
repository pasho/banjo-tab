import * as React from "react";
import * as Settings from "../settings";
import { Stave } from "./Stave";
import { SheetContext, SheetState } from "./SheetContext";

export const Sheet = ({ title, tuning, notes, barsPerStave, showNotes }: {
  title: string,
  tuning: string,
  notes: string,
  barsPerStave?: number,
  showNotes?: boolean
}) => {
  const sheetState: SheetState = {
    tuning,
    barsPerStave: barsPerStave ?? Settings.defaultBarsPerStave,
    showNotes: showNotes ?? false
  }
  const staveBarNotes = notes.split(";").map(s => s.trim())
    .reduce(
      (acc: string[][][], note, noteIndex) => {
        const barIndex = Math.floor(noteIndex / 4);
        const noteIndexInBar = noteIndex % 4;
        const staveIndex = Math.floor(barIndex / sheetState.barsPerStave);
        const barIndexInStave = barIndex % sheetState.barsPerStave;

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
    <SheetContext.Provider value={sheetState}>
      <h1>{title}</h1>
      <p>{tuning}</p>
      <svg width={Settings.width} height={sheetHeight}>
        {staveBarNotes.map(
          (barNotes, staveIndex) => {
            return (
              <Stave key={staveIndex} y={.5 * Settings.padding() + Settings.staveHeightWithPadding() * staveIndex} barNotes={barNotes} />
            )
          }
        )}
      </svg>
    </SheetContext.Provider>
  )

}