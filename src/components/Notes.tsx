import * as React from "react";
import * as Settings from "../settings";
import * as Utils from "../utils";

export type NoteProps = {
  strings: string;
  x: number;
  y: number;
  width: number;
};

export const SingleNote = ({ x, y, width, strings }: NoteProps) => {
  const stringFrets = Utils.getStringFrets(strings)
    .map(({stringIndex, fret}) => {
      if(Settings.showNotes){
        const fretNote = Utils.getNote("gDGBd", stringIndex, fret);
        return {stringIndex, fret: fret + fretNote};
      }
      return {stringIndex, fret};
    });


  const lowestStringIndex = Utils.getLowestStringIndex(strings) ?? 0;
  const noteTailY1 = y + Settings.lineSpacing * (lowestStringIndex + .5)
  const noteTailY2 = y + Settings.staveHeight() + Settings.lineSpacing;
  const noteCentreX = x + width * .5;

  return (
    <>
      {stringFrets
        .map(({ stringIndex, fret }) => {
          const noteX = noteCentreX + Settings.textCharCentreOffset.x * fret.length;
          const noteY = y + stringIndex * Settings.lineSpacing + Settings.textCharCentreOffset.y;
          return <text key={stringIndex} x={noteX} y={noteY}>{fret}</text>
        })}
      <line x1={noteCentreX} y1={noteTailY1} x2={noteCentreX} y2={noteTailY2} strokeWidth={1} stroke="black" />
    </>
  );
}

export const DoubleNote = (props: NoteProps) => {
  const horizontalLineY = props.y + Settings.staveHeight() + Settings.lineSpacing;
  const horizontalLineX1 = props.x + props.width * .25 - Settings.noteHorizontalLineAdjustment;
  const horizontalLineX2 = props.x + props.width * .75 + Settings.noteHorizontalLineAdjustment;
  const [strings1, strings2] = props.strings.split(",");
  return (
    <>
      <SingleNote strings={strings1} width={props.width * .5} x={props.x} y={props.y} />
      <SingleNote strings={strings2} width={props.width * .5} x={props.x + props.width * .5} y={props.y} />
      <line x1={horizontalLineX1} y1={horizontalLineY} x2={horizontalLineX2} y2={horizontalLineY} strokeWidth={3} stroke="black" />
    </>
  );
}

export const BrushNote = (props: NoteProps) => <DoubleNote x={props.x} y={props.y} width={props.width} strings={props.strings + ",    0"} />;

export const SlurNote = (props: NoteProps & {
  label: string;
}) => {
  const [strings1, strings2] = props.strings.split(",");
  const highestString1 = Utils.getHighestStringIndex(strings1) ?? 0;
  const highestString2 = Utils.getHighestStringIndex(strings2) ?? 0;

  const arcX1 = props.x + props.width * .25;
  const arcX2 = props.x + props.width * .75;
  const arcY1 = props.y + (highestString1 - 0.5) * Settings.lineSpacing;
  const arcY2 = props.y + (highestString2 - 0.5) * Settings.lineSpacing;

  const arcControlX1 = arcX1 + .5 * Settings.lineSpacing;
  const arcControlX2 = arcX2 - .5 * Settings.lineSpacing;
  const arcControlY1 = arcY1 - .5 * Settings.lineSpacing;
  const arcControlY2 = arcY2 - .5 * Settings.lineSpacing;
  const arcControlY = Math.min(arcControlY1, arcControlY2);

  const labelLength = props.label.length;
  const labelX = props.x + 0.5 * props.width + Settings.textCharCentreOffset.x * labelLength;
  const labelY = props.y + Settings.staveHeight() + 2 * Settings.lineSpacing + Settings.textCharCentreOffset.y;

  return (
    <>
      <DoubleNote x={props.x} y={props.y} width={props.width} strings={props.strings} />
      <path d={`M ${arcX1} ${arcY1} C ${arcControlX1} ${arcControlY}, ${arcControlX2} ${arcControlY}, ${arcX2} ${arcY2}`} stroke="black" strokeWidth={1} fill="transparent" />
      <text x={labelX} y={labelY}>{props.label}</text>
    </>
  );
}

export const HammerOnNote = (props: NoteProps) => <SlurNote {...props} label="H" />

export const PullOffNote = (props: NoteProps) => <SlurNote {...props} label="P" />

export const SlideNote = (props: NoteProps) => <SlurNote {...props} label="SL" />

export const Note = (props: NoteProps & { noteType: "m" | "b" | "d" | "h" | "p" | "s" | unknown }) => {
  switch (props.noteType) {
    case "b":
      return <BrushNote {...props} />;
    case "h":
      return <HammerOnNote {...props} />;
    case "p":
      return <PullOffNote {...props} />;
    case "s":
      return <SlideNote {...props} />;
    case "m":
      return <SingleNote {...props} />;
    case "d":
      return <DoubleNote {...props} />
    default:
      return null;
  }
}