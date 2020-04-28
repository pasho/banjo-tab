import * as React from 'react';
import { useTextEditor } from './Editor';
import { useSettings } from '../components/Settings';

const Cursor = () => {
  const { position, meter } = useTextEditor();
  const settings = useSettings();
  const noteWidth = settings.staveWidth() / settings.barsPerStave / meter;
  const width = noteWidth;
  const x = settings.padding() + position * noteWidth;
  const height = settings.staveHeightWithPadding();
  const y = 0;

  return (
    <rect
      {...{ x, y, width, height }}
      strokeWidth={1} 
      stroke="black" 
      fill="transparent">
    </rect>
  )
}

export default Cursor;