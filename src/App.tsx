import React from 'react';
import './App.css';

const range = (length: number) => Array.from(Array(length).keys());

const Settings = {
  width: 800,
  height: 600,
  padding: 50,
  lineSpacing: 10,
  staveHeight: () => Settings.lineSpacing * 4,
  staveHeightWithPadding: () => Settings.staveHeight() + Settings.padding,
  staveWidth: () => Settings.width - Settings.padding * 2,
  barsPerStave: 4,
  barWidth: () => Settings.staveWidth() / Settings.barsPerStave,
  // Accounts for font size and svg discrepancies.
  noteDigitCentreOffset: {
    x: -4,
    y: 4
  },
  // Accounts for different widths of vertical and horizontal lines and ugly edges.
  noteHorizontalLineAdjustment: 0.5
}

const BarLine = (props: {
  x: number;
  y: number;
}) => <line x1={props.x} y1={props.y} x2={props.x} y2={props.y + Settings.staveHeight()} className="bar-line" />

const StaveLine = (props: {
  y: number
  width: number
}) => <line x1={Settings.padding} y1={props.y} x2={Settings.padding + props.width} y2={props.y} className="tab-line" />

const SingleNote = (props: {
  strings: string;
  x: number;
  y: number;
  width: number;
}) => {
  const stringFrets = range(5)
    .map(stringIndex => ({ stringIndex, fret: props.strings[stringIndex] }))
    .filter(({ fret }) => fret !== undefined);

  const lowestStringIndex = stringFrets[stringFrets.length - 1]?.stringIndex ?? 0;
  const noteTailY1 = props.y + Settings.lineSpacing * (lowestStringIndex + .5)
  const noteTailY2 = props.y + Settings.staveHeight() + Settings.lineSpacing;
  const noteCentreX = props.x + props.width * .5;
  const noteDigitX = noteCentreX + Settings.noteDigitCentreOffset.x;

  return (
    <>
      {stringFrets
        .map(({ stringIndex, fret }) => {
          const noteY = props.y + stringIndex * Settings.lineSpacing + Settings.noteDigitCentreOffset.y;
          return <text key={stringIndex} x={noteDigitX} y={noteY} className="note">{fret}</text>
        })}
      <line x1={noteCentreX} y1={noteTailY1} x2={noteCentreX} y2={noteTailY2} className="note-vertical-line" />
    </>
  );
}

const BrushNote = (props: {
  strings: string;
  x: number;
  y: number;
  width: number;
}) => {
  const horizontalLineY = props.y + Settings.staveHeight() + Settings.lineSpacing;
  const horizontalLineX1 = props.x + props.width * .25 - Settings.noteHorizontalLineAdjustment;
  const horizontalLineX2 = props.x + props.width * .75 + Settings.noteHorizontalLineAdjustment;
  return (
    <>
      <SingleNote {...props} width={props.width * .5} />
      <SingleNote strings="    0" width={props.width / 2} x={props.x + props.width / 2} y={props.y} />
      <line x1={horizontalLineX1} y1={horizontalLineY} x2={horizontalLineX2} y2={horizontalLineY} className="note-horizontal-line" />
    </>
  );
}

const Stave = (props: {
  y: number;
  barNotes: string[][]
}) => {
  const noteSpaceWidth = Settings.barWidth() / 4;
  const staveWidth = Settings.barWidth() * props.barNotes.length;
  return (
    <>
      {range(5).map(i => <StaveLine key={i} y={props.y + i * Settings.lineSpacing} width={staveWidth} />)}
      {range(props.barNotes.length + 1).map(i => <BarLine key={i} y={props.y} x={Settings.padding + i * Settings.barWidth()} />)}
      {props.barNotes.map((notes, barIndex) => {
        const barX = Settings.padding + barIndex * Settings.barWidth();
        return notes.map(
          (noteString, noteIndex) => {
            const noteX = barX + noteIndex * noteSpaceWidth;
            const noteType = noteString[0];
            const strings = noteString.substr(1);
            return noteType === "b"
              ? <BrushNote key={noteIndex} strings={strings} x={noteX} y={props.y} width={noteSpaceWidth} />
              : <SingleNote key={noteIndex} strings={strings} x={noteX} y={props.y} width={noteSpaceWidth} />
          }
        )
      })}      
    </>
  )
};

const Sheet = (props: {
  notes: string
}) => {
  const notes = props.notes.split(";").map(s => s.trim()).filter(s => s);

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

  return (
    <>
      {staveBarNotes.map(
        (barNotes, staveIndex) => {
          return (
            <Stave key={staveIndex} y={Settings.padding + Settings.staveHeightWithPadding() * staveIndex} barNotes={barNotes} />
          )
        }
      )}
    </>
  )

}

function App() {
  const notesInput = `
  m  0;b0000;m 0;b0000;m  0;b2102;m 1;b2102;m  2;b0120;m 1;b0120;m  2;b3123;m 1;b3123;
  m  0;b0000;m 0;b0000;m  0;b2102;m 1;b2102;m  2;b0120;m 1;b0120;m  2;b3123;m 1;b3123;
  `;
  return (
    <div className="App">
      <svg height={Settings.height} width={Settings.width}>
        <Sheet notes={notesInput} />
        {/* {range(5).map(i => <Stave key={i} y={Settings.padding + Settings.staveHeightWithPadding() * i} />)} */}
      </svg>
    </div>
  );
}

export default App;
