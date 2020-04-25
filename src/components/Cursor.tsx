import * as React from 'react';
import { useSheet } from '../components/Sheet';
import * as Settings from "../settings";
import { useStyle } from '../components/StyleProvider';
import { useEditor } from './Editor';

const Cursor = () => {
  const { meter } = useSheet();
  const { position } = useEditor();
  const { barsPerStave } = useStyle();
  const noteWidth = Settings.staveWidth() / barsPerStave / meter;
  const x = Settings.padding() + (.1 + position) * noteWidth;
  const height = Settings.lineSpacing * 5;
  const y1 = .5 * Settings.padding() - .5 * Settings.lineSpacing;
  const y2 = y1 + height;

  return (
    <line
      x1={x} y1={y1} x2={x} y2={y2}
      strokeWidth={1} stroke="black">
      <animate attributeName="visibility" from="visible" to="hidden" dur="1s" repeatCount="indefinite" />
    </line>
  )
}

export default Cursor;