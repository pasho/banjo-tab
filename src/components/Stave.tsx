import * as React from "react";
import * as Settings from "../settings";
import * as Utils from "../utils";
import { Chord } from "./Chord";
import { Note } from "./Notes";
import { useStyle } from "./StyleProvider";

const BarLine = (props: {
  x: number;
  y: number;
}) => <line x1={props.x} y1={props.y} x2={props.x} y2={props.y + Settings.staveHeight()} strokeWidth={1} stroke="black" />

const StaveLine = (props: {
  y: number
  width: number
}) => <line x1={Settings.padding()} y1={props.y} x2={Settings.padding() + props.width} y2={props.y} strokeWidth={1} stroke="black" />

export const Stave = (props: {
  y: number;
  barNotes: string[][]
}) => {
  const { barsPerStave } = useStyle();
  const barWidth = () => Settings.staveWidth() / barsPerStave;
  const noteSpaceWidth = barWidth() / 4;
  const staveWidth = barWidth() * props.barNotes.length;
  return (
    <>
      {Utils.range(5).map(i => <StaveLine key={i} y={props.y + i * Settings.lineSpacing} width={staveWidth} />)}
      {Utils.range(props.barNotes.length + 1).map(i => <BarLine key={i} y={props.y} x={Settings.padding() + i * barWidth()} />)}
      {props.barNotes.map((notes, barIndex) => {
        const barX = Settings.padding() + barIndex * barWidth();
        return notes.map(
          (noteString, noteIndex) => {
            const noteX = barX + noteIndex * noteSpaceWidth;
            const { noteType, strings, chord } = noteString.split(":")
              .map(s => s.trim())
              .reduce((acc, part) => {
                if (part[0]) {
                  if (part[0] === part[0].toUpperCase()) {
                    //chord
                    return { ...acc, chord: part };
                  }
                  else if (part[0] === part[0].toLowerCase()) {
                    //note
                    return { ...acc, noteType: part[0], strings: part.substr(1) };
                  }
                }
                return acc;
              },
                {
                  noteType: '',
                  strings: '',
                  chord: ''
                });

            return (
              <React.Fragment key={noteIndex}>
                <Chord chord={chord} noteX={noteX} staveY={props.y} width={noteSpaceWidth} />
                <Note noteType={noteType} {...{
                  noteType,
                  strings,
                  x: noteX,
                  y: props.y,
                  width: noteSpaceWidth
                }} />
              </React.Fragment>
            )
          }
        )
      })}
    </>
  )
};