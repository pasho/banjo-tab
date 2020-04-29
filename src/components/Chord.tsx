import * as React from "react";
import { useSettings } from "./Settings";

export const Chord = ({
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
  const settings = useSettings();
  if (!chord) {
    return null;
  }
  const x = noteX + width / 2 + chord.length * settings.textCharCentreOffset.x;
  const y =
    staveY - 1.5 * settings.lineSpacing + settings.textCharCentreOffset.y;
  return <text {...{ x, y }}>{chord}</text>;
};
