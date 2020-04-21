import * as React from "react";
import * as Settings from "../settings";

export const Chord = ({ chord, noteX, staveY, width }: {
  chord: string,
  noteX: number;
  staveY: number;
  width: number;
}) => {
  if (!chord) {
    return null;
  }
  const x = noteX + width / 2 + chord.length * Settings.textCharCentreOffset.x;
  const y = staveY - 1.5 * Settings.lineSpacing + Settings.textCharCentreOffset.y;
  return (
    <text {...{ x, y }}>{chord}</text>
  )
}