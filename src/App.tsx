import React from 'react';
import './App.css';

const range = (length: number) => Array.from(Array(length).keys());

const Settings = {
  width: 800,
  padding: 50,
  lineSpacing: 10,
  staveHeight: () => Settings.lineSpacing * 4,
  staveHeightWithPadding: () => Settings.staveHeight() + Settings.padding,
  staveWidth: () => Settings.width - Settings.padding * 2,
  barsPerStave: 4,
  barWidth: () => Settings.staveWidth() / Settings.barsPerStave,
  // Accounts for font size and svg discrepancies.
  textCharCentreOffset: {
    x: -3.5,
    y: 4
  },
  // Accounts for different widths of vertical and horizontal lines and ugly edges.
  noteHorizontalLineAdjustment: 0.5
}

const Utils = {
  getStringFrets: (strings: string) =>
    range(5)
      .map(stringIndex => ({ stringIndex, fret: (strings ?? [])[stringIndex] }))
      .filter(({ fret }) => fret !== undefined && fret !== " "),

  getLowestStringIndex: (strings: string) => {
    const stringFrets = Utils.getStringFrets(strings);

    if (stringFrets.length === 0) {
      return undefined;
    }

    return stringFrets[stringFrets.length - 1]?.stringIndex;
  },

  getHighestStringIndex: (strings: string) => {
    const stringFrets = Utils.getStringFrets(strings);

    if (stringFrets.length === 0) {
      return undefined;
    }

    return stringFrets[0]?.stringIndex;
  }
}

const BarLine = (props: {
  x: number;
  y: number;
}) => <line x1={props.x} y1={props.y} x2={props.x} y2={props.y + Settings.staveHeight()} strokeWidth={1} stroke="black" />

const StaveLine = (props: {
  y: number
  width: number
}) => <line x1={Settings.padding} y1={props.y} x2={Settings.padding + props.width} y2={props.y} strokeWidth={1} stroke="black" />

type NoteProps = {
  strings: string;
  x: number;
  y: number;
  width: number;
};

const SingleNote = (props: NoteProps) => {
  const stringFrets = Utils.getStringFrets(props.strings);

  const lowestStringIndex = Utils.getLowestStringIndex(props.strings) ?? 0;
  const noteTailY1 = props.y + Settings.lineSpacing * (lowestStringIndex + .5)
  const noteTailY2 = props.y + Settings.staveHeight() + Settings.lineSpacing;
  const noteCentreX = props.x + props.width * .5;
  const noteDigitX = noteCentreX + Settings.textCharCentreOffset.x;

  return (
    <>
      {stringFrets
        .map(({ stringIndex, fret }) => {
          const noteY = props.y + stringIndex * Settings.lineSpacing + Settings.textCharCentreOffset.y;
          return <text key={stringIndex} x={noteDigitX} y={noteY}>{fret}</text>
        })}
      <line x1={noteCentreX} y1={noteTailY1} x2={noteCentreX} y2={noteTailY2} strokeWidth={1} stroke="black" />
    </>
  );
}

const DoubleNote = (props: NoteProps) => {
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

const BrushNote = (props: NoteProps) => <DoubleNote x={props.x} y={props.y} width={props.width} strings={props.strings + ",    0"} />;

const SlurNote = (props: NoteProps & {
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

const HammerOnNote = (props: NoteProps) => <SlurNote {...props} label="H" />

const PullOffNote = (props: NoteProps) => <SlurNote {...props} label="P" />

const SlideNote = (props: NoteProps) => <SlurNote {...props} label="SL" />

const Note = (props: NoteProps & { noteType: "m" | "b" | "d" | "h" | "p" | "s" | unknown}) => {
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

const Chord = ({chord, noteX, staveY, width}: {
  chord: string,
  noteX: number;
  staveY: number;
  width: number;
}) => {
  if(!chord){
    return null;
  }
  const x = noteX + width / 2 + chord.length * Settings.textCharCentreOffset.x;
  const y = staveY - 1.5 * Settings.lineSpacing + Settings.textCharCentreOffset.y;
  return (
    <text {...{x, y}}>{chord}</text>
  )
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
            const { noteType, strings, chord } = noteString.split(":")
              .map(s => s.trim())
              .reduce((acc, part) => {
                if (part[0]) {
                  if (part[0] === part[0].toUpperCase()) {
                    //chord
                    return { ...acc, chord: part };
                  }
                  else if (part[0] == part[0].toLowerCase()) {
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

            const noteProps: NoteProps = {
              strings,
              x: noteX,
              y: props.y,
              width: noteSpaceWidth
            };
                      
            return (
              <React.Fragment key={noteIndex}>
                <Chord chord={chord} noteX={noteX} staveY={props.y} width={noteSpaceWidth}/>
                <Note noteType={noteType} {...noteProps}/>
              </React.Fragment>
            )
          }
        )
      })}
    </>
  )
};

const Sheet = (props: {
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

  const sheetHeight = .5 * Settings.padding + Settings.staveHeightWithPadding() * staveBarNotes.length;

  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.tuning}</p>
      <svg width={Settings.width} height={sheetHeight}>
        {staveBarNotes.map(
          (barNotes, staveIndex) => {
            return (
              <Stave key={staveIndex} y={.5 * Settings.padding + Settings.staveHeightWithPadding() * staveIndex} barNotes={barNotes} />
            )
          }
        )}
      </svg>
    </>
  )

}

const WorriedMansBlues = () =>
  <Sheet
    title="Worried Man's Blues"
    tuning="gDGBd"
    notes={`
      G;;;m   0;
      m   0;b0000;m   0;m   2;
      m  0;b0000;b0000;m  0;
      m 0;b0000;m 0;m  2;
      m  0;b0000;m  0;m   0;
      C:m   2;b2102;m  0;m   2;
      m  0;b2102;m  0;m   2;
      m  0;b2102;m  0;m   2;

      G:m   0;b0000;b0000;m   0;
      m   0;b0000;m   0;m   2;
      m  0;b0000;b0000;m  0;
      m 0;b0000;m 0;m  2;
      m  0;b0000;m   4;m  0;
      D7:m  2;b0120;b0120;m  2;
      m 0;m  2;m  0;m   4;
      G:m  0;b0000;m0000
    `} />;

const HopHighLadies1 = () =>
  <Sheet
    title="Hop High Ladies v1"
    tuning="gDGBd"
    notes={`
      G:h  0,  2;h 0, 1;m0;m  0;
      s  2,  4;b0040;m 0;b0000;
      h  0,  2;h 0, 1;m0;m  0;
      D7:h  0,  2;b0120;m  2;b0120;
      G:h  0,  2;h 0, 1;m0;m  0;
      m 0;b0000;h 0, 1;m0;
      C:m2;b2102;h0,2;b2102;
      G:p 3, 0;m  0;D7:h  0,  2;b0120;

      G:m  0;m5;p2,0;b0000;
      s  2,  4;b0040;m 0;b0000;
      m  0;m5;p2,0;b0000;
      D7:h  0,  2;b0120;m  2;b0120;
      G:m  0;m5;p2,0;b0000;
      m 0;b0000;h 0, 1;m0;
      C:m2;b2102;h0,2;b2102;
      p 3, 0;m  0;D7:h  0,  2;b0120
    `} />;

const HopHighLadies2 = () =>
  <Sheet
    title="Hop High Ladies v2"
    tuning="gDGBd"
    notes={`
        G:h  0,  2;h 0, 1;m0;m  0;
        s  2,  4;b  4;m 0;d 0,  0;
        h  0,  2;h 0, 1;m0;m  0;
        D7:h  0,  2;d 1,  2;m  2;m   0;
        G:h  0,  2;h 0, 1;m0;m  0;
        m 0;b0;h 0, 1;m0;
        C:m2;d2, 1;h0,2;d2, 1;
        G:p 3, 0;m  0;D7:h  0,  2;d 1,  2;
  
        G:m  0;m5;p2,0;b 0;
        s  2,  4;b  4;m 0;d 0,  0;
        m  0;m5;p2,0;b 0;
        D7:h  0,  2;d 1,  2;m  2;m   0;
        G:m  0;m5;p2,0;b 0;
        m 0;b0;h 0, 1;m0;
        C:m2;d2, 1;h0,2;d2, 1;
        p 3, 0;m  0;D7:h  0,  2;d 1,  2
      `} />;


const App = () => {
  return (
    <div className="App">
      <HopHighLadies1 />
      <HopHighLadies2 />
      <WorriedMansBlues />
    </div>
  );
}

export default App;
