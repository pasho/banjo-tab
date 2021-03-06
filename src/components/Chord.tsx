import * as React from "react";
import { useSettings } from "./SettingsContext";

const Chord = ({
  chord,
  noteX,
  staveY,
  width,
}: {
  chord: string;
  noteX: number;
  staveY: number;
  width: number;
}) => {
  const { lineSpacing, textCharCentreOffset } = useSettings();
  if (!chord) {
    return null;
  }
  const x = noteX + width / 2 + chord.length * textCharCentreOffset.x;
  const y = staveY - 1.5 * lineSpacing + textCharCentreOffset.y;
  return <text {...{ x, y }}>{chord}</text>;
};

export default Chord;
