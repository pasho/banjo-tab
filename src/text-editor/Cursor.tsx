import * as React from 'react';
import * as Settings from "../settings";
import { useStyle } from '../components/StyleProvider';
import { useTextEditor } from './Editor';

const Cursor = () => {
  const { position, meter } = useTextEditor();
  const { barsPerStave } = useStyle();
  const noteWidth = Settings.staveWidth() / barsPerStave / meter;
  const width = noteWidth;
  const x = Settings.padding() + position * noteWidth;
  const height = Settings.staveHeightWithPadding();
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