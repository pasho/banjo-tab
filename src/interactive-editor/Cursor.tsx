import * as React from 'react';
import { useEditor } from './Editor';
import { useSettings } from '../components/Settings';

const Cursor = () => {
  const { position, meter } = useEditor();
  const settings = useSettings();
  const noteWidth = settings.staveWidth / settings.barsPerStave / meter;
  const x = settings.padding + (.1 + position) * noteWidth;
  const height = settings.lineSpacing * 5;
  const y1 = .5 * settings.padding - .5 * settings.lineSpacing;
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