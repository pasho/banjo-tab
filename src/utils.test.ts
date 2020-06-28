import { getBarNotes, getBarNotesForEditor } from "./utils";

const meter = 4;

describe("getBarNotes", () => {
  it("should return empty for ''", () => {
    const bars = getBarNotes("", meter);
    expect(bars).toEqual([]);
  });
  it("should return empty for \\n", () => {
    const bars = getBarNotes("\n", meter);
    expect(bars).toEqual([]);
  });
  it("should return full bar for a full bar input", () => {
    const bars = getBarNotes("m0;b0;m0;b0", meter);
    expect(bars).toEqual([["m0", "b0", "m0", "b0"]]);
  });
  it("should split using meter and handle incomplete", () => {
    const bars = getBarNotes("m0;b0;m0;b0;m0;b0", meter);
    expect(bars).toEqual([
      ["m0", "b0", "m0", "b0"],
      ["m0", "b0"],
    ]);
  });
  it("should split bars on \n even if short", () => {
    const bars = getBarNotes("m0;b0\nm0;b0\nm0;b0", meter);
    expect(bars).toEqual([
      ["m0", "b0"],
      ["m0", "b0"],
      ["m0", "b0"],
    ]);
  });
  it("should ignore empty bars - trailing ; after complete bar", () => {
    const bars = getBarNotes("m0;b0;m0;b0;", meter);
    expect(bars).toEqual([["m0", "b0", "m0", "b0"]]);
  });
  it("should ignore empty bars - trailing ; after complete bar followed by \n and more notes", () => {
    const bars = getBarNotes("m0;b0;m0;b0;\nm0;b0", meter);
    expect(bars).toEqual([
      ["m0", "b0", "m0", "b0"],
      ["m0", "b0"],
    ]);
  });
});

describe("getBarNotesForEditor", () => {
  it("returns bar with one blank note for empty string", () => {
    const bars = getBarNotesForEditor("", meter);
    expect(bars).toEqual([[""]]);
  });
  it("returns two bars if there is a new line and nothing else", () => {
    const bars = getBarNotesForEditor("\n", meter);
    expect(bars).toEqual([[""], [""]]);
  });
});
