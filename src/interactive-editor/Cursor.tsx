import * as React from "react";
import { useEditor } from "./Editor";
import { useSettings } from "../components/Settings";

const Cursor = () => {
  const { position } = useEditor();
  const { noteWidth, padding, lineSpacing } = useSettings();
  const x = padding + (0.1 + position) * noteWidth;
  const height = lineSpacing * 5;
  const y1 = 0.5 * padding - 0.5 * lineSpacing;
  const y2 = y1 + height;

  return (
    <line x1={x} y1={y1} x2={x} y2={y2} strokeWidth={1} stroke="black">
      <animate
        attributeName="visibility"
        from="visible"
        to="hidden"
        dur="1s"
        repeatCount="indefinite"
      />
    </line>
  );
};

export default Cursor;
