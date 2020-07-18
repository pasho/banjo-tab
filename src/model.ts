export type Duration = 1 | 2 | 4 | 8 | 16;

export type Note = {
  stringFrets: { string: number; fret: number }[];
  duration: Duration;
  extended?: boolean;
  chord?: string;
};

export type Beam = Note[];

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
