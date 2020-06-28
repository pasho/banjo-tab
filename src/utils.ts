export const range = (length: number) => Array.from(Array(length).keys());

export const getStringFrets = (strings: string) =>
  range(5)
    .map((stringIndex) => ({ stringIndex, fret: (strings ?? [])[stringIndex] }))
    .filter(({ fret }) => fret !== undefined && fret !== " ")
    .map(({ stringIndex, fret }) => {
      if (isNaN(parseInt(fret))) {
        const alphabet = "abcdefghijklmnopqrst";
        const alphaIndex = alphabet.indexOf(fret);
        if (alphaIndex !== -1) {
          const doubleDigitFret = 10 + alphaIndex;
          return { stringIndex, fret: doubleDigitFret.toString() };
        }
      }
      return { stringIndex, fret };
    });

export const getLowestStringIndex = (strings: string) => {
  const stringFrets = getStringFrets(strings);

  if (stringFrets.length === 0) {
    return undefined;
  }

  return stringFrets[stringFrets.length - 1]?.stringIndex;
};

export const getHighestStringIndex = (strings: string) => {
  const stringFrets = getStringFrets(strings);

  if (stringFrets.length === 0) {
    return undefined;
  }

  return stringFrets[0]?.stringIndex;
};

export const getNote = (tuning: string, stringIndex: number, fret: string) => {
  const scale = "a♭ a b♭ b c c# d e♭ e f f# g".split(" ");
  const stringNote = tuning.toLowerCase().split("").reverse()[stringIndex];
  const stringNoteIndex = scale.indexOf(stringNote);
  const fretIndex = parseInt(fret);

  const fretNote = scale[(stringNoteIndex + fretIndex) % scale.length];

  return fretNote ?? "";
};

export const merge = <T>(defaultValue: T, overrides: Partial<T>): T => {
  return (Object.keys(defaultValue) as (keyof T)[]).reduce(
    (acc, key) =>
      overrides[key] !== undefined
        ? { ...acc, ...{ [key]: overrides[key] } }
        : acc,
    { ...defaultValue }
  );
};
