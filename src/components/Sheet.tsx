import * as React from "react";
import * as Settings from "../settings";
import { Stave } from "./Stave";

export const Sheet = (props: {
  title: string,
  tuning: string,
  notes: string
}) => {
  const notes = props.notes.split(";").map(s => s.trim());

  const staveBarNotes = notes.reduce(
    (acc: string[][][], note, noteIndex) => {
      const barIndex = Math.floor(noteIndex / 4);
      const noteIndexInBar = noteIndex % 4;
      const staveIndex = Math.floor(barIndex / Settings.barsPerStave);
      const barIndexInStave = barIndex % Settings.barsPerStave;

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
    <>
      <h1>{props.title}</h1>
      <p>{props.tuning}</p>
      <svg width={Settings.width} height={sheetHeight}>
        {staveBarNotes.map(
          (barNotes, staveIndex) => {
            return (
              <Stave key={staveIndex} y={.5 * Settings.padding() + Settings.staveHeightWithPadding() * staveIndex} barNotes={barNotes} />
            )
          }
        )}
      </svg>
    </>
  )

}