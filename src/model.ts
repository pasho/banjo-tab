import { getStringFrets } from "./utils";

export type Duration = 1 | 2 | 4 | 8 | 16;

export type Position = {
  string: number;
  fret: number;
};

export type Note = {
  positions: Position[];
  duration: Duration;
  extended?: boolean;
  chord?: string;
  slurStart?: boolean;
  slurEnd?: boolean;
};

export type Beam = {
  notes: Note[];
  label?: string;
};

export type Bar = {
  notes: (Note | Beam)[];
  comment?: string;
};

export type Part =
  | {
      type: "section";
      title?: string;
      content: (Bar | Part)[];
    }
  | {
      type: "repeat";
      title?: string;
      content: (Bar | Part)[];
      firstEnding?: Bar[];
      secondEnding?: Bar[];
    };

export type Meter = {
  beatsPerBar: number;
  beatDuration: Duration;
};

export type Score = {
  title: string;
  tuning: string;
  meter: Meter;
  content: (Part | Bar)[];
};

const positions = (positionsString: string): Position[] => {
  return getStringFrets(positionsString).map(({ stringIndex, fret }) => ({
    string: stringIndex,
    fret: parseInt(fret),
  }));
};

export const single = (string: number, fret: number): Position[] => [
  { string, fret },
];

export type PositionsSpec = Position[] | string;

export const toPositions = (positionsSpec: PositionsSpec) =>
  typeof positionsSpec === "string" ? positions(positionsSpec) : positionsSpec;

export const note = (
  duration: Duration,
  positionsSpec: PositionsSpec
): Note => ({
  positions: toPositions(positionsSpec),
  duration,
});

export const crotchet = (positions: PositionsSpec) => note(4, positions);

export const quaver = (positions: PositionsSpec) => note(8, positions);

export const doubleQuaver = (
  first: PositionsSpec,
  second: PositionsSpec
): Beam => ({ notes: [quaver(first), quaver(second)] });

export const brush = (positionsSpec: PositionsSpec) =>
  doubleQuaver(positionsSpec, single(1, 0));

export const slur = (
  first: PositionsSpec,
  second: PositionsSpec,
  type: "H" | "P" | "SL"
) => {
  const beam = doubleQuaver(first, second);
  beam.notes[0].slurStart = true;
  beam.notes[1].slurEnd = true;
  beam.label = type;
  return beam;
};

export const hammerOn = (first: PositionsSpec, second?: PositionsSpec) => {
  if (!second) {
    const hammerEnd = toPositions(first);
    const hammerStart = [{ string: hammerEnd[0].string, fret: 0 }];
    return slur(hammerStart, hammerEnd, "H");
  } else {
    return slur(first, second, "H");
  }
};

export const pullOff = (first: PositionsSpec, second?: PositionsSpec) => {
  if (!second) {
    const pullStart = toPositions(first);
    const pullEnd = [{ string: pullStart[0].string, fret: 0 }];
    return slur(pullStart, pullEnd, "P");
  } else {
    return slur(first, second, "P");
  }
};

export const slide = (start: PositionsSpec, end: PositionsSpec | number) => {
  if (typeof end === "number") {
    const slideStart = toPositions(start);
    const slideEnd = [{ string: slideStart[0].string, fret: end }];
    return slur(slideStart, slideEnd, "SL");
  } else {
    return slur(start, end, "SL");
  }
};

export const dropThumb = (first: PositionsSpec, second: PositionsSpec) =>
  doubleQuaver(first, second);

export const thumb = (second: PositionsSpec) => doubleQuaver([], second);
