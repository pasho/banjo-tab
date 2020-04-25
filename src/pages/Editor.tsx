import React, { useEffect, useCallback } from 'react';
import { Sheet, useSheet, useEditor } from '../components/Sheet';
import * as Settings from "../settings";
import { useStyle } from '../components/StyleProvider';

const Cursor = () => {
  const { meter } = useSheet();
  const { addNote, move, position, backspace, del } = useEditor();
  const onKey = useCallback(({ keyCode }: KeyboardEvent) => {
    switch (keyCode) {
      case 37:
        move("left");
        break;
      case 39:
        move("right");
        break;
      case 8: 
        backspace();
        break;
      case 46:
        del();
        break;
      case 66:
        addNote("b0000");
        break;
    }
  }, [move, addNote, backspace, del]);

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);
  

  const { barsPerStave } = useStyle();
  const noteWidth = Settings.width / barsPerStave / meter;
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

export default () => {
  return (
    <>
      <Sheet title="Editor" notes="">
        <Cursor/>
      </Sheet>
    </>
  )

}
