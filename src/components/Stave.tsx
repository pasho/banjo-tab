import * as React from "react";
import * as Utils from "../utils";
import { Chord } from "./Chord";
import { Note } from "./Notes";
import { useSheetInfo } from "./Sheet";
import { useSettings } from "./Settings";

const BarLine = (props: { x: number; y: number }) => {
  const settings = useSettings();
  return (
    <line
      x1={props.x}
      y1={props.y}
      x2={props.x}
      y2={props.y + settings.staveHeight}
      strokeWidth={1}
      stroke="black"
    />
  );
};

const StaveLine = (props: { y: number; width: number }) => {
  const settings = useSettings();
  return (
    <line
      x1={settings.sidePadding}
      y1={props.y}
      x2={settings.sidePadding + props.width}
      y2={props.y}
      strokeWidth={1}
      stroke="black"
    />
  );
};

export const Stave = (props: { y: number; barNotes: string[][] }) => {
  const settings = useSettings();
  const { meter } = useSheetInfo();
  const barWidth = settings.barWidth;
  const noteSpaceWidth = barWidth / meter;
  const staveWidth = barWidth * props.barNotes.length;

  return (
    <>
      {Utils.range(5).map((i) => (
        <StaveLine
          key={i}
          y={props.y + i * settings.lineSpacing}
          width={staveWidth}
        />
      ))}
      {Utils.range(props.barNotes.length + 1).map((i) => (
        <BarLine key={i} y={props.y} x={settings.sidePadding + i * barWidth} />
      ))}
      {props.barNotes.map((notes, barIndex) => {
        const barX = settings.sidePadding + barIndex * barWidth;
        return notes.map((noteString, noteIndex) => {
          const noteX = barX + noteIndex * noteSpaceWidth;
          const { noteType, strings, chord } = noteString
            .split(":")
            .map((s) => s.trim())
            .reduce(
              (acc, part) => {
                if (part[0]) {
                  if (part[0] === part[0].toUpperCase()) {
                    //chord
                    return { ...acc, chord: part };
                  } else if (part[0] === part[0].toLowerCase()) {
                    //note
                    return {
                      ...acc,
                      noteType: part[0],
                      strings: part.substr(1),
                    };
                  }
                }
                return acc;
              },
              {
                noteType: "",
                strings: "",
                chord: "",
              }
            );

          return (
            <React.Fragment key={noteIndex}>
              <Chord
                chord={chord}
                noteX={noteX}
                staveY={props.y}
                width={noteSpaceWidth}
              />
              <Note
                noteType={noteType}
                {...{
                  noteType,
                  strings,
                  x: noteX,
                  y: props.y,
                  width: noteSpaceWidth,
                }}
              />
            </React.Fragment>
          );
        });
      })}
    </>
  );
};
